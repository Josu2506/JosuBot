const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('que-haces')
		.setDescription('Replies with Bong!'),
	async execute(interaction) {
		await interaction.reply('Pipazo!');
	},
};