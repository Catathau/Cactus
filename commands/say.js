const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if(args.length == 0)
       return message.reply("Escreve Aquela mensagem marota para eu repetir");

       var embed = new Discord.RichEmbed()
       .setDescription(`:speech_left: ` + args.join(' '))
       .setColor(0xffff)
   message.channel.send({embed: embed})

    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!say', com o texto ${args}`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed1})
}