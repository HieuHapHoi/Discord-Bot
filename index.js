const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const { token } = require('./config.json');

require("./Handlers/Events")(client);

client.on("messageCreate", message => {
    if(message.content == "ping") {
        message.reply("pong");
    }
});

client.login(token);