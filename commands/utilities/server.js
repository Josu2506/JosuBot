/* eslint-disable no-undef */
const { SlashCommandBuilder } = require('discord.js');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get(['/', '/:name'], (req, res) => {
	greeting = '<h1>Hello From Node on Fly!</h1>';
	name = req.params['name'];
	if (name) {
		res.send(greeting + '</br>and hello to ' + name);
	}
	else {
		res.send(greeting);
	}
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));


module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
	},
};