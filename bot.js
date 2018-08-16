// setup

const Discord = require('discord.js');
const PREFIX = "c.";
var client = new Discord.Client();

// console ready

client.on('ready', () => {
	console.log('I am ready!');
});

// command cases

client.on("message", function(message) {
	if (!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");
	switch (args[0].toLowerCase()) {
		case "ping":
			message.channel.sendMessage("Pong!");
			break;
		case "bun":
			const attachment = new Attachment('https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png');
			message.channel.send(attachment);
			break;
		case "help":
			var embed = new Discord.RichEmbed()
				.setTitle("**What can C1NN4-B0T do?**")
				.addField("c.help", "Displays list of commands")
				.addField("c.ping", "Pong!")
				.addField("c.bun", "Reminds you of your cinnamon bun-ness!")
				.setColor(0xFBA635)
				.setFooter("The Novelcraft Lounge")
			message.channel.sendEmbed(embed);
			break;
		default:
			message.channel.sendMessage("Invalid command!");
	}
});

// token login
client.login(process.env.BOT_TOKEN);
