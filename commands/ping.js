const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports.data = new SlashCommandBuilder()
.setName("ping")
.setDescription("Ping Pong");

module.exports.run = (client, interaction) => {
    interaction.editReply({
        content:"Hung ngu"
    })
}