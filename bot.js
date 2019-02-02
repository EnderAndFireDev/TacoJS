const { Client, RichEmbed } = require('discord.js'); // Adding them sweet embeds
const Discord = require("discord.js"); // Just making sure discord.js in our bloody code

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`[Taco] Logged into ${client.user.tag} (${client.user.id})`)
  client.user.setPresence({ game: { name: `Discord.js test`, });
});
