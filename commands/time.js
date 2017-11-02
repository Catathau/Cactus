exports.run = (client, message, args) => {
    const moment = require('moment');
    const Discord = require('discord.js')
    moment.locale('pt-br');

    var embed = new Discord.RichEmbed()
    .setTitle('Tempo')
    .addField(":calendar: Data:", `Dia ` + `${moment().format("LL")}`, true)
    .addField(":calendar_spiral: Dia da semana: ", `${moment().format('dddd')}`, true) 
    .addField(":clock12: Hora: ", `${moment().format('LTS')}`, true)
    .addField(":star2: Dia começou a ", `${moment().startOf('day').fromNow()}`, true)
    .addField(":end: Dia vai terminar ", `${moment().endOf('day').fromNow()}`)
    .setThumbnail(message.author.avatarURL)
    message.channel.send(embed)
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!time'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed1})
}
