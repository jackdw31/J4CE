const Discord = require('discord.js');
const PREFIX = "c.";

var client = new Discord.Client();
var servers = {};

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'c.ping') {
    	message.reply('pong!');
  	}
});

client.on('message', message => {
    if (message.content === 'c.bun') {
    	message.reply('https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
