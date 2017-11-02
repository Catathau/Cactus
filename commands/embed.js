exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(args.join(' '))
    .setColor(message.member.user.displayHexColor)
    message.delete()
    message.channel.send({embed: embed})
}