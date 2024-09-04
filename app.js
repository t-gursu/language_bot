require('dotenv').config();
const Groq = require("groq-sdk");
const { Bot, InlineKeyboard  } = require("grammy");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

let userLanguageSettings = {};

bot.command('start', async (ctx) => {
    const keyboard = new InlineKeyboard()
        .text('🇬🇧 English', 'lang_en')
        .text('🇩🇪 German', 'lang_de');
    
    await ctx.reply('Please select the language that you want to practice:', {
        reply_markup: keyboard,
    });
});

bot.command('change', async (ctx) => {
    const keyboard = new InlineKeyboard()
        .text('🇬🇧 English', 'lang_en')
        .text('🇩🇪 German', 'lang_de');
    
    await ctx.reply('Please select the language that you want to practice:', {
        reply_markup: keyboard,
    });
});

bot.callbackQuery('lang_en', async (ctx) => {
    await ctx.editMessageText('You have chosen to practice English.');
    userLanguageSettings[ctx.from.id] = process.env.EN_PROMPT;
});

bot.callbackQuery('lang_de', async (ctx) => {
    await ctx.editMessageText('Sie haben sich für die Praxis Deutsch entschieden.');
    userLanguageSettings[ctx.from.id] = process.env.DE_PROMPT;
});

async function getGroqResponse(query, userId) {
    const systemPrompt = userLanguageSettings[userId] || process.env.EN_PROMPT; // Varsayılan dil olarak İngilizce
    
    try {
        const completion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "system",
                    "content": systemPrompt
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            "model": "llama3-8b-8192",
            "temperature": 0.85,
            "max_tokens": 1140,
            "top_p": 1,
            "stream": true,
            "stop": null
        });

        let finalResponse = '';

        for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
                finalResponse += content;
            }
        }

        return finalResponse || 'Can\'t resolve it.';

    } catch (error) {
        console.error(error);
    }
}

bot.on("message:text", async (ctx) => {
    const response = await getGroqResponse(ctx.message.text, ctx.from.id);
    ctx.reply(response);
});

bot.start();