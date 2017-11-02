exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    var embed1 = new Discord.RichEmbed()
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setDescription("**Aqui está: [clique aqui!](http://bit.ly/2eU0mGk)**")
    .setColor(0x6db34b)
    message.channel.send({embed: embed1})

    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!invite'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}
