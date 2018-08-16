// setup /////////////////////////////////////

const Discord = require("discord.js");
const PREFIX = "roll.";
var client = new Discord.Client();
client.on("ready", () => {
	console.log("I am ready!");
});

// variables /////////////////////////////////

var fate = ["**[+]**      ","**[  ]**      ","**[-]**      ",];
var coin = ["**[HEADS]**","**[TAILS]**",];
var d4 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ",];
var d6 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ","**[5]**      ","**[6]**      ",];
var d8 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ","**[5]**      ","**[6]**      ","**[7]**      ","**[8]**      ",];
var d10 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ","**[5]**      ","**[6]**      ","**[7]**      ","**[8]**      ","**[9]**      ","**[10]**      ",];
var d12 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ","**[5]**      ","**[6]**      ","**[7]**      ","**[8]**      ","**[9]**      ","**[10]**      ","**[11]**      ","**[12]**      ",];
var d20 = ["**[1]**      ","**[2]**      ","**[3]**      ","**[4]**      ","**[5]**      ","**[6]**      ","**[7]**      ","**[8]**      ","**[9]**      ","**[10]**      ","**[11]**      ","**[12]**      ","**[13]**      ","**[14]**      ","**[15]**      ","**[16]**      ","**[17]**      ","**[18]**      ","**[19]**      ","**[20]**      ",];

// commands //////////////////////////////////

client.on("message", function(message) {
	if (message.author.equals(client.user)) return;
	if (!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");
	switch (args[0].toLowerCase()) {
		case "coin":
			message.channel.sendMessage("The coin landed on:      " + coin[Math.floor(Math.random() * coin.length)]);
			break;
		case "fate":
			message.channel.sendMessage("You rolled:      " + fate[Math.floor(Math.random() * fate.length)] + fate[Math.floor(Math.random() * fate.length)] + fate[Math.floor(Math.random() * fate.length)] + fate[Math.floor(Math.random() * fate.length)]);
			break;
		case "1d4":
			message.channel.sendMessage("You rolled:      " + d4[Math.floor(Math.random() * d4.length)]);
			break;
		case "2d4":
			message.channel.sendMessage("You rolled:      " + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)]);
			break;
		case "3d4":
			message.channel.sendMessage("You rolled:      " + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)]);
			break;
		case "4d4":
			message.channel.sendMessage("You rolled:      " + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)] + d4[Math.floor(Math.random() * d4.length)]);
			break;
		case "1d6":
			message.channel.sendMessage("You rolled:      " + d6[Math.floor(Math.random() * d6.length)]);
			break;
		case "2d6":
			message.channel.sendMessage("You rolled:      " + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)]);
			break;
		case "3d6":
			message.channel.sendMessage("You rolled:      " + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)]);
			break;
		case "4d6":
			message.channel.sendMessage("You rolled:      " + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)] + d6[Math.floor(Math.random() * d6.length)]);
			break;
		case "1d8":
			message.channel.sendMessage("You rolled:      " + d8[Math.floor(Math.random() * d8.length)]);
			break;
		case "2d8":
			message.channel.sendMessage("You rolled:      " + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)]);
			break;
		case "3d8":
			message.channel.sendMessage("You rolled:      " + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)]);
			break;
		case "4d8":
			message.channel.sendMessage("You rolled:      " + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)] + d8[Math.floor(Math.random() * d8.length)]);
			break;
		case "1d10":
			message.channel.sendMessage("You rolled:      " + d10[Math.floor(Math.random() * d10.length)]);
			break;
		case "2d10":
			message.channel.sendMessage("You rolled:      " + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)]);
			break;
		case "3d10":
			message.channel.sendMessage("You rolled:      " + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)]);
			break;
		case "4d10":
			message.channel.sendMessage("You rolled:      " + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)] + d10[Math.floor(Math.random() * d10.length)]);
			break;
		case "1d12":
			message.channel.sendMessage("You rolled:      " + d12[Math.floor(Math.random() * d12.length)]);
			break;
		case "2d12":
			message.channel.sendMessage("You rolled:      " + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)]);
			break;
		case "3d12":
			message.channel.sendMessage("You rolled:      " + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)]);
			break;
		case "4d12":
			message.channel.sendMessage("You rolled:      " + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)] + d12[Math.floor(Math.random() * d12.length)]);
			break;
		case "1d20":
			message.channel.sendMessage("You rolled:      " + d20[Math.floor(Math.random() * d20.length)]);
			break;
		case "2d20":
			message.channel.sendMessage("You rolled:      " + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)]);
			break;
		case "3d20":
			message.channel.sendMessage("You rolled:      " + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)]);
			break;
		case "4d20":
			message.channel.sendMessage("You rolled:      " + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)] + d20[Math.floor(Math.random() * d20.length)]);
			break;
		case "help":
			var embed = new Discord.RichEmbed()
				.setTitle("**What can J4CE do?**")
				.addField("Coin", "Flips a coin, resulting in either HEADS or TAILS.")
				.addField("Fate", "Rolls 4 FATE dice, which each show a plus, minus, or blank face.")
				.addField("_D4", "Rolls a number of D4's")
				.addField("_D6", "Rolls a number of D6's")
				.addField("_D8", "Rolls a number of D8's")
				.addField("_D10", "Rolls a number of D10's")
				.addField("_D12", "Rolls a number of D12's")
				.addField("_D20", "Rolls a number of D20's")
				.setColor(0x0094FF)
				.setFooter("Wherever you see an underscore, this can be replaced with a number between 1 and 4 to decide the number of dice to roll.")
			message.channel.sendEmbed(embed);
			break;
		default:
			message.channel.sendMessage("Invalid command!");
	}
});

// ping //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "ping") {
	message.channel.send("pong!");
	}
});
     
// token login ///////////////////////////////

client.login(process.env.BOT_TOKEN);
