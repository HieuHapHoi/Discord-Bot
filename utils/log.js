const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#c72ec9").bold('» Lỗi « ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#c72ec9").bold('» Lỗi « ') + data);
			break;
		default:
				console.log(chalk.bold.hex("#c72ec9").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#c72ec9").bold('» EMILIA « ') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#c72ec9").bold('» EMILIA « ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#c72ec9").bold(`» EMILIA «  `) + data);
			break;
	}
}