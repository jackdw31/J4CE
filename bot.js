// setup /////////////////////////////////////

const Discord = require("discord.js");
const PREFIX = "c.";
var client = new Discord.Client();
client.on("ready", () => {
	console.log("I am ready!");
});

// help //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "help") {
	var embed = new Discord.RichEmbed()
		.setTitle("**What can C1NN4-B0T do?**")
		.addField("**c.help**", "Displays list of commands")
		.addField("**c.ping**", "Pong!")
		.addField("**c.bun**", "Reminds you of your cinnamon bun-ness!")
		.setColor(0xFBA635)
		.setFooter("- The Novelcraft Lounge -")
	message.channel.sendEmbed(embed);
	}
});

// ping //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "ping") {
	message.channel.send("pong!");
	}
});

// bun ///////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "bun") {
	const attachment = new Attachment("https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png");
		message.channel.send(attachment);
  	}
});

// token login ///////////////////////////////

client.login(process.env.BOT_TOKEN);
