exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	var embed = new Discord.RichEmbed()
								   if((message.content.startsWith("c!dvss") == 0)){
		var rand = Math.floor(Math.random() * 3) + 1;
		switch(rand){
case 1:
embed.addField('Cachorro Wins!', 'Gif abaixo:')
embed.setImage("https://losgifs.files.wordpress.com/2013/09/pug_82e5ef_4800417.gif");
message.channel.send(embed)
break;
case 2:
embed.addField('Escada Wins!', 'Gif abaixo:')
embed.setImage("https://cdn.discordapp.com/attachments/269250764143067137/272001030336544778/cachorro-como-descer-escada.gif");
message.channel.send(embed)
break;
case 3:
embed.addField('Empat.. Bebê Wins!', 'Gif abaixo:')
embed.setImage("http://2.bp.blogspot.com/-fUudOb5JKMg/TegZ9pJ493I/AAAAAAAAALo/IzzBoFNhPFw/s1600/bebe+descendo+a+escada.gif");
message.channel.send(embed)
break;
}
}
var embed1 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!dvss'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed1})
}