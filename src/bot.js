// bot.js
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Replace with your bot token
const token = '6715571769:AAE9YBAwTpa9TUW8TfsTrCxPvcBOBuVfepQ';
const bot = new TelegramBot(token, { polling: true });

// ID of the chat where the message will be sent
const chatId = 'YOUR_CHAT_ID'; // Replace with the chat ID

// Function to send the reminder
const sendReminder = () => {
    const message = 'This is your daily reminder!';
    bot.sendMessage(chatId, message);
};

// Schedule the reminder to be sent once a day at 9:00 AM
cron.schedule('0 9 * * *', () => {
    console.log('Sending daily reminder...');
    sendReminder();
});

console.log('Bot is running...');

bot.on('message', (msg) => {
    console.log(msg.chat.id);
});
