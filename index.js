const discord = require('discord.js');
const command = require('nodemon/lib/config/command');
const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS, 
        discord.Intents.FLAGS.GUILD_MEMBERS, 
        discord.Intents.FLAGS.GUILD_MESSAGES
    ],
});
const { token } = require("./config.json");
require("./slash-register")();
let commands = require("./slash-register").commands;

client.on("ready", () => {
    client.user.setActivity({
        name: `${client.user.username} đang được phát triển bởi HieuHapHoi`,
        type: `WATCHING` 
    })
    console.log(`🟢 ${client.user.username} đã bắt đầu hoạt động`);

    let commands = client.application.commands;
})



client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand) return;
    
    let name = interaction.commandName;
    let options = interaction.options;

    let commandMethod = commands.get(name);
    
    if(!commandMethod) return;

    await interaction.deferReply();

    commandMethod(client, interaction);

})

client.login(token);
