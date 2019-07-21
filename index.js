const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const bot = new Discord.Client()
const prefix = "*"

bot.on('ready', function () {
console.log("Je suis connecté !")
bot.user.setActivity("Sauver Des Ordi en Peril !");
})

bot.on('message', message => {
	if (message.content == prefix + 'wait') {
		var voiceChannel = message.member.voiceChannel;
			if (!voiceChannel) return message.channel.send('Vous devez être dans un channel pour ecouter la musique!');
			const permissions = voiceChannel.permissionsFor(message.client.user);
			if (!permissions.has('CONNECT')) {
				return message.channel.send('LA PERMMISION STP!');
			}
			if (!permissions.has('SPEAK')) {
				return message.channel.send('LA PERMISSION POUR PARLER STP!');
			}
			else{
				const streamOptions = { seek: 0, volume: 1 };
				voiceChannel.join().then(connection => {
					console.log("joined channel");
					message.channel.send("```Nous allons Vous Prendre en charge le plus vite possible!\nVeuillez Patientez !```" );
					const stream = ytdl('https://www.youtube.com/watch?v=t9oCAamwlwM', { filter : 'audioonly' });
					const dispatcher = connection.playStream(stream, streamOptions);
						dispatcher.on("end", end => {
						console.log("left channel");
						voiceChannel.leave();
					});
				}).catch(err => console.log(err));
			}
	}
	if (message.content == prefix + 'a38') {
		var voiceChannel = message.member.voiceChannel;
			if (!voiceChannel) return message.channel.send('Vous devez être dans un channel pour ecouter la musique!');
			const permissions = voiceChannel.permissionsFor(message.client.user);
			if (!permissions.has('CONNECT')) {
				return message.channel.send('LA PERMMISION STP!');
			}
			if (!permissions.has('SPEAK')) {
				return message.channel.send('LA PERMISSION POUR PARLER STP!');
			}
			else{
				const streamOptions = { seek: 0, volume: 1 };
				voiceChannel.join().then(connection => {
					console.log("joined channel");
					message.channel.send("```Nous n'avons pas comprit votre demande.```" );
					const stream = ytdl('https://www.youtube.com/watch?v=T91eccRfg3I', { filter : 'audioonly' });
					const dispatcher = connection.playStream(stream, streamOptions);
						dispatcher.on("end", end => {
						console.log("left channel");
						voiceChannel.leave();
					});
				}).catch(err => console.log(err));
			}
	}
	if (message.content == prefix + 'stop') {
		var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('Vous devez être dans le channel pour arreter la musique!');
		message.channel.send("```Desoler pour la gêne occasionnez !```" );
		voiceChannel.leave();
	}
	if (message.content == prefix + 'help') {
		message.channel.send("```Nous vous Invitons a rejoindre la Salle D'attente !\nVous Pouvez avoir de la musique pendant votre attente avec la commande 'wait'\nNos Technicien sont bientôt prêt à vous aider!\nVotre Technicien sera Erwan !```" );
	}
	if (message.content == prefix + 'vip') {
		var roll = Math.floor(Math.random() * 100) + 1;
		message.channel.send("```Nous allons Vous Prendre en charge le plus vite possible!\nVotre place est N°"+roll+"!```" );
	}
	if (message.content == prefix + 'sav') {
		message.channel.send("```Nos équipes sont disponible 23h/24 !\nAfin de vous garantir un service de Qualiter.```" );
	}
	if (message.content == prefix + 'stage') {
		message.channel.send("```Nous proposont des stages et formation dans l'informatique\npour prendre rendez-vous contactez un technicien.```" );
	}
	if (message.content == prefix + 'facture') {
		message.channel.send("```Un Souci avec votre facture ?\nNos Conseiller sont la entre 10h30 et 11h45,pour vous aider!```" );
	}
	if (message.content == prefix + 'devis') {
		var roll = Math.floor(Math.random() * 1000) + 1;
		message.channel.send("```Après etude de votre dossier le montant de la réparation sera de :\n\n"+roll+"€ TTC\n\nVous avez 30 Jours Pour annulez.```" );
	}
})

bot.login(process.env.TOKEN)
