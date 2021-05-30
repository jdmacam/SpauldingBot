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
		message.channel.send('`The clown\'s in town! Yayayayayaya! 🤡`');
	}

	else if (message.content === 'clown.d20'){
		var roll = Math.floor(Math.random() * 20) + 1;
		message.channel.send(roll + ' 🤡🎲');
	}

	else if (message.content == 'clown.call'){
		// Joining the channel and creating a VoiceConnection.
		message.member.voice.channel.join().then(VoiceConnection => {
			// Playing the music, and, on finish, disconnecting the bot.
			VoiceConnection.play("./assets/chicken.mp3").on("finish", () => VoiceConnection.disconnect());
			message.reply("Playing...");
		}).catch(e => console.log(e))
	}
});


// login to the SpauldingBot using dotenv
require('dotenv').config()
client.login(process.env.TOKEN)