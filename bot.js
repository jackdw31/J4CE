const Discord = require('discord.js');
const PREFIX = "c.";

var client = new Discord.Client();
var servers = {};

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", function(message) {
	if (message.author.equals(client.user)) return;
	
	if (!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch (args[0].toLowerCase()) {
		case "ping":
			message.channel.sendMessage(pong!);
			break;
		case "bun":
			message.channel.sendMessage(https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png);
			break;
		case "help":
			var embed = new Discord.RichEmbed()
				.setTitle("**What can C1NN4-B0T do?**")
				.addField("c.ping", "Pong!")
				.setColor(FBA635)
				.setFooter("The Novelcraft Lounge")
			message.channel.sendEmbed(embed);
			break;
		default:
			message.channel.sendMessage("Invalid command");
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
