const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');
const commands = [];
const commandList = new Map();


module.exports = (updateCommands) => {
    
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '945182690926272552';
const guildId = '900319858997227530';

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	commandList.set(command.data.name, command.run);
}

const rest = new REST({ version: '9' }).setToken(token);

if(updateCommands) {
	(async () => {
		try {
			console.log('🔄 Bắt đầu làm mới lại (/) commands.');
	
			await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },
			);
	
			console.log('✔ Làm mới lại (/) commands thành công.');
		} catch (error) {
			console.error(error);
		}
	})();
}

}

module.exports.commands = commandList;
