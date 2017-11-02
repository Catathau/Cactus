exports.run = (client, message, args) => {
    const randomCat = require('random-cat')
    const Discord = require('discord.js');
    var embed = new Discord.RichEmbed()
    .setDescription(`<:cat3:363872374212263946> Miaaau!`)
    .setImage(randomCat.get())
    .setColor(0xb3b3b3)
    message.channel.send({embed: embed})
   var embed1 = new Discord.RichEmbed()
   .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
   .setDescription(`${message.author.username} usou o comando 'c!cat'`)
   .setColor(0xd34d4d)
   client.channels.get("373607840780386313").send({embed: embed1})
}