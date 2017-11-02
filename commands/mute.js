const Discord = require("discord.js");
exports.run = (bot, message, args, level) => {
    let user = message.mentions.users.first();
    if  (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("Você não tem permissão para mutar um membro");
    if (!user) return message.reply('Mencione alguem para mutar').catch(console.error);
    if (!message.guild.member(user).bannable) return message.reply('Eu não posso mutar esse membro');
  if (message.mentions.users.size < 1) return message.reply('Mencione alguem para mutar').catch(console.error);
    if (!message.mentions.users.array()[0]) return;
    var mutee = message.mentions.users.array();
    if (args.length == 1) {
        var reason = "Razão não especifica";
    } else {
        var reason = args.slice(1).join(" ");
    };
    for(var k = 0; k < mutee.length; k++) {
        var member = message.guild.members.get(mutee[k].id);
        var channels = message.guild.channels.array();
        for(var i = 0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: false})
        }
        
        var mute = new Discord.RichEmbed();
        mute.setTitle('Membro mutado')
        .addField('Mutado', user, true)
        .addField('Mutado por', message.author, true)
        .addField('Razão', reason)
        .setFooter("Mutado")
        .setTimestamp()
        .setColor(0x651699)
        var logs = message.guild.channels.find('name', 'logs');
        if (!logs) return message.reply('Não encontrei o canal logs');
        logs.send({embed: mute});
    }
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!mute'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}