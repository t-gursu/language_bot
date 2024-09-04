Talk to Learn Bot

Overview
Talk to Learn Bot is a Telegram-based language learning bot that helps users practice both English and German. The bot encourages users to practice language skills by offering feedback, corrections, and dynamic conversation topics. The bot leverages Groq Cloud for language processing and is powered by a Node.js backend.

Features:
Language Switching: Easily switch between English and German using the /change command.
Interactive Feedback: The bot provides constructive feedback on grammar, vocabulary, and sentence structure.
Dynamic Conversations: Engages users with creative questions to sustain an interesting and educational conversation.
Motivational Feedback: Encourages users to keep improving their language skills.
Prerequisites
Node.js (v14 or higher)
Telegram Bot Token (can be created via BotFather)
Groq Cloud account for language processing.Installation
Clone the Repository

git clone https://github.com/username/talk-to-learn-bot.git
cd talk-to-learn-bot
Install Dependencies

npm install
Set Up Environment Variables Create a .env file in the root directory with the following content:

TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
GROQ_API_KEY=your_groq_cloud_api_key_here

Run the Bot
node index.jsCommands
Start the bot

/start
This will initiate the bot and ask the user to choose a language (English or German) for practice.

Switch language
bash
Kodu kopyala
/change
This command allows users to switch between English and German practice sessions.

Example Interaction (English session):
User:
"I go to the park yesterday."

Bot Feedback:
"Good try! Instead of 'go,' you should use 'went' because it's past tense. So, 'I went to the park yesterday' is correct."

Bot Response:
"What did you do at the park? Did you have fun?"

Example Interaction (German session):
User:
"Ich bin am Wochenende nach Berlin gefahren."

Bot Feedback:
"Sehr gut! Die Satzstruktur ist korrekt, aber statt 'am Wochenende' könntest du auch 'letztes Wochenende' sagen, um klarer zu machen, dass es das vergangene Wochenende war."

Bot Response:
"Was hast du in Berlin gemacht? Hast du interessante Orte besucht?"
"What did you do in Berlin? Did you visit any interesting places?"

Bot Structure
index.js: This is the main entry point of the bot. It handles interactions with Telegram's API and passes user messages to the appropriate language prompt.
/commands: This folder contains logic for handling different bot commands like /start, /change.
/services: Responsible for interacting with Groq Cloud API to handle the language processing tasks.
.env: Stores your environment variables such as the Telegram Bot Token and Groq API key.
Example Commands
Start the bot: /start
Initiates the bot and presents language options.

Change language: /change
Switches between English and German for language practice.

Language Prompts
The bot uses the following two key prompts for language interaction, which are executed via Groq Cloud:

English Teaching Prompt: Focuses on providing English feedback, including corrections on grammar, sentence structure, and vocabulary.

German Teaching Prompt: Corrects users' German input and responds in both German and English, helping learners understand their mistakes and learn new vocabulary.

Sustaining the Conversation
The bot keeps the conversation dynamic by introducing new topics when the user doesn’t bring up a new subject.
Questions such as "If you could visit any country, where would you go?" are used to spark creative responses and make learning fun.

Development
Fork the repository
Create a new feature branch (git checkout -b feature/feature-name)
Commit your changes (git commit -m 'Added a new feature')
Push to the branch (git push origin feature/feature-name)
Open a pull request

License
This project is licensed under the MIT License.
