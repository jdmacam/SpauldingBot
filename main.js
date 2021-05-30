// Create const Discord obeject so we can use discord.js node modules
const Discord = require('discord.js');
// Create Discord client/bot object
const client = new Discord.Client();

// Message that will print when SB comes online
client.once('ready', () => {
    console.log('The clown\'s in town! Yayayayayaya!')
})

// SB listens to messages for commands
client.on('message', async message => {
	if (message.content === 'clown.ping') {
		console.log("Pinging bot")
		message.channel.send('`The clown\'s in town! Yayayayayaya! 🤡`');
	}

	else if (message.content === 'clown.d20'){
		console.log("Rollin' D20")
		var roll = Math.floor(Math.random() * 20) + 1;
		message.channel.send(roll + ' 🤡🎲');
	}

	else if (message.content == 'clown.call'){
		console.log("clown.call")
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			VoiceConnection.play("./assets/chicken.mp3").on("finish", () => VoiceConnection.disconnect());
			message.reply("Playing...");
		}).catch(e => console.log(e))
	}

	else if (message.content == '.iwanttosee'){
		console.log(".iwanttosee")
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			VoiceConnection.play("./assets/iwanttosee.mp3", {volume: 0.5}).on("finish", () => VoiceConnection.disconnect());
			message.reply("Playing...");
		}).catch(e => console.log(e))
	}

	else if (message.content == '.goodmtndew'){
		console.log(".goodmtndew")
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			VoiceConnection.play("./assets/goodmtndew.mp3", {volume: 0.4}).on("finish", () => VoiceConnection.disconnect());
			message.channel.send(`${mdew} ${mdew} ${mdew}`);
		}).catch(e => console.log(e))
	}

	else if (message.content == '.potion'){
		console.log(".potion")
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			VoiceConnection.play("./assets/potion.wav", {volume: 1.0}).on("finish", () => VoiceConnection.disconnect());
			message.reply("Playing...");
		}).catch(e => console.log(e))
	}

	else if (message.content == '.knock'){
		console.log(".knock")
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			VoiceConnection.play("./assets/knock.mp3", {volume: 1.0}).on("finish", () => VoiceConnection.disconnect());
			message.reply("Playing...");
		}).catch(e => console.log(e))
	}

	else if (message.content === ".test") {
		const mdew = client.emojis.cache.find(emoji => emoji.name === "mtndew");
	  }
});


// login to the SpauldingBot using dotenv
require('dotenv').config()
client.login(process.env.TOKEN)