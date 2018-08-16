// setup /////////////////////////////////////

const Discord = require("discord.js");
const Attachment = require("discord.js");
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
	message.channel.send("https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png");
  	}
});

// asdf //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "asdf") {
	message.channel.send("Hello cinnamon buns! <:CinnamonBun:473972103025131540> \n For NaNoWriMo this year, we’re taking you on a quest! There will be monsters to slay, gold to earn, but most importantly, novels to write!\n\nAny good quest needs adventurers! Below, you can react to an emoji to choose your class! The classes available:\n\n:dizzy: **Mage!** Cast spells! Invoke the elements!\n:shield: **Warrior!** Shield allies! Decimate your foes!\n:knife: **Rogue!** Trickery! Deceit! Stick to the shadows!\n:guitar: **Bard!** Boost allies’ spirits! Play legendary solos!\n\nBy levelling up in the Discord, and by helping to slay the daily boss, you can receive new class titles, showing your prowess and mastery over words!\n\nEach day a new boss fight will unlock at **12PM GMT**, with a word count required to beat it. Between 12PM and 12AM you can write as much as you wish, and can submit the number of words you completed that day - even if you didn’t meet the day’s goal. At the end of the month, everyone’s progress will be tallied up and ranked!\n\nWho will lead the raid? And who will conquer their novel? You decide! Happy writing cinnamon bun! <:CinnamonBun:473972103025131540>");
	}
});
			     
// token login ///////////////////////////////

client.login(process.env.BOT_TOKEN);
