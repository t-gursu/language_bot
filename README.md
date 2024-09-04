# Talk to Learn Bot

## Overview
Talk to Learn Bot is a Telegram-based language learning bot that helps users practice both English and German. The bot encourages users to practice language skills by offering feedback, corrections, and dynamic conversation topics. The bot leverages Groq Cloud for language processing and is powered by a Node.js backend.

## Features:
Language Switching: Easily switch between English and German using the /change command.

Interactive Feedback: The bot provides constructive feedback on grammar, vocabulary, and sentence structure.

Dynamic Conversations: Engages users with creative questions to sustain an interesting and educational conversation.

Motivational Feedback: Encourages users to keep improving their language skills.


## Prerequisites:
Node.js (v14 or higher)

Telegram Bot Token (can be created via BotFather)

Groq Cloud account for language processing.Installation

## Start the bot
/start: This will initiate the bot and ask the user to choose a language (English or German) for practice.

/change: This command allows users to switch between English and German practice sessions.

## Example Interaction (English session):
User: "I go to the park yesterday."
Bot Feedback: "Good try! Instead of 'go,' you should use 'went' because it's past tense. So, 'I went to the park yesterday' is correct."

Bot Response: "What did you do at the park? Did you have fun?"

## Example Interaction (German session):
User: "Ich bin am Wochenende nach Berlin gefahren."
Bot Feedback: "Sehr gut! Die Satzstruktur ist korrekt, aber statt 'am Wochenende' könntest du auch 'letztes Wochenende' sagen, um klarer zu machen, dass es das vergangene Wochenende war."

Bot Response:
"Was hast du in Berlin gemacht? Hast du interessante Orte besucht?"
"What did you do in Berlin? Did you visit any interesting places?"

## License
This project is licensed under the MIT License.
