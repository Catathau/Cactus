    const Discord = require('discord.js');
exports.run = (client, message, args, channel) => {
    message.delete();
    message.reply('**sua sugestão foi enviada para o meu Criador! Muito Obrigado!**')
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}`)
    .setDescription(`${message.author.username} usou o comando 'c!sugestão'`)
    .setColor(0xd34d4d)
    message.channel.send({embed: embed1})

    const embed = new Discord.RichEmbed()
    .addField('Sugestão:', ` Sugestão: **${args}** \n Enviado por: **${message.author.username}#${message.author.discriminator}** \n Na guilda: **${message.channel.guild.name}**`)     
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})

}