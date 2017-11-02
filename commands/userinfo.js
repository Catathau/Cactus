

exports.run = (client, message, args) => {
    const moment = require('moment');
    const Discord = require('discord.js');
    moment.locale('pt-br');

    function mebotCheck(){
        var botChecking = message.author.bot;
            if (botChecking == true) {
                return "Sim";
            } else {
        if (botChecking == false){
                return "Não"
        }
            }
        }
    
    function stats(status) {
        return {
            'online': 'Online',
            'dnd': 'Ocupado',
            'idle': 'Ausente',
            'offline': 'Offline'
        }[status];
    }
    function getEmbed(user, member) {
        var username = user
        var embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .addField(':person_with_pouting_face: Nome:', user.username, true)
        .addField(':video_game: Jogando:', user.presence.game ? user.presence.game.name : "Nada!", true)
        .addField(':id: ID:', user.id, true)
        .addField(':bread: É um BOT?', `${mebotCheck()}`, true)
        .addField(':radio_button: Status:', `${stats(member.presence.status)}`, true)
        .addField(':briefcase: Quantidade de Cargos:', message.guild.member(message.author.id).roles.size ? message.guild.member(message.author.id).roles.size : "Sem cargos!", true)
        .addField(':date: Conta criada:', moment(user.createdAt).format('LLLL'))
        .addField(':star2: Entrou em:', moment(message.member.joinedAt).format('LLLL'))
    message.channel.send({embed: embed})
    }
    if (message.mentions.members.array().length > 0)
        return message.channel.send('', getEmbed(message.mentions.users.first(), message.mentions.members.first()));
    else
        return message.channel.send('', getEmbed(message.author, message.member));

        var embed1 = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
        .setDescription(`${message.author.username} usou o comando 'c!userinfo'`)
        .setColor(0xd34d4d)
        client.channels.get("373607840780386313").send({embed: embed1})
}