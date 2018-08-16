// setup /////////////////////////////////////

const Discord = require("discord.js");
const PREFIX = "roll.";
const math = require("math-expression-evaluator");
var client = new Discord.Client();
client.on("ready", () => {
	console.log("I am ready!");
});

// help //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "help") {
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
	}
});

// math //////////////////////////////////////

exports.run = (client, message, args, tools) => {
	const embed = new Discord.MessageEmbed()
        .setColor(0x0094FF);
    if (!args[0]) {
        embed.setFooter('Please input an expression.');
        return message.channel.send(embed);
    }
    let result;
    try {
        result = math.eval(args.join(' '));
    } catch (e) {
        result = 'Error: "Invalid Input"';
    }
    embed.addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``);
    message.channel.send(embed);
}

// ping //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "ping") {
	message.channel.send("pong!");
	}
});
     
// token login ///////////////////////////////

client.login(process.env.BOT_TOKEN);
