// Create const Discord obeject so we can use discord.js node modules
const Discord = require('discord.js');
// Create Discord client/bot object
const client = new Discord.Client();

// Message that will print when SB comes online
client.once('ready', () => {
    console.log('The clown\'s in town! Yayayayayaya!')
})

client.on('message', message => {
	if (message.content === 'clown.ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('`The clown\'s in town! Yayayayayaya! 🤡`');
	}
});


// login to the SpauldingBot using dotenv
require('dotenv').config()
client.login(process.env.TOKEN)