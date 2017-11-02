exports.run = (client, message, args) => {
    const moment = require('moment')
    moment.locale('pt-br')
    let suffix = message.content.slice('c!roleinfo'.length).trim(),
    role = message.channel.guild.roles.find(r => r.name == suffix);
     if (!role) return message.channel.send('**Esse cargo não existe, ou tente citar um cargo **(apenas diga o nome, não mencione)');

     function mentionabe() {
        var mentionable = role.mentionable
        if  (status == "online") {
        return "Disponível"
      } else if (status == "offline") {
        return ("Afk/Indisponível")
        }
      }

     const Discord = require('discord.js');
     const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle(':name_badge: RoleInfo', true)
    .addField(':person_with_pouting_face: Nome:', role.name, true)
    .addField(':cartwheel: Posição:', role.position, true)
    .addField(':speaking_head: Mencionável:', role.mentionable, true)
    .addField(':large_blue_circle: Cor (em Hex)', role.color, true)
    .addField(':calendar: Criado em:', moment(new Date(role.createdAt)).format("D [de] MMMM [de] YYYY, [às] HH:mm", true))
    .setThumbnail(message.channel.guild.iconURL)
    message.channel.send({embed: embed})
        }