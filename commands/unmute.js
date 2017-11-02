const Discord = require("discord.js");
exports.run = (bot, message, args, level) => {
    if  (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("Você não tem permissão para desmutar um membro");
    if (message.mentions.users.size < 1) return message.reply('Mencione alguem para desmutar').catch(console.error);
    if (!message.mentions.users.array()[0]) return;
    var mutee = message.mentions.users.array();
    for(var k = 0; k < mutee.length; k++) {
        var member = message.guild.members.get(mutee[k].id);
        var user = bot.users.get(mutee[k].id);
        var guild = message.guild;
        var channels = message.guild.channels.array();
        for(var i=0; i < channels.length; i++) {
            if(channels[i].type == 'text')
                channels[i].overwritePermissions(member, {SEND_MESSAGES: null})
        };
        var unmute = new Discord.RichEmbed();
        unmute.setTitle('Usuario desmutado')
        .addField('Pessoa', user)
        .addField('Desmutado por', message.author)
        .setFooter("Desmutado")
        .setTimestamp()
        .setColor(0x13b927)
        var logs = message.guild.channels.find('name', 'logs');
        if (!logs) return message.reply('Não encontrei o canal logs');
        if (logs) {
          logs.send({embed: unmute});
          var embed = new Discord.RichEmbed()
          .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
          .setDescription(`${message.author.username} usou o comando 'c!unmute'`)
          .setColor(0xd34d4d)
          client.channels.get("373607840780386313").send({embed: embed})
      }
  };
}
