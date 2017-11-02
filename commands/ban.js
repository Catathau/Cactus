const Discord = require("discord.js");
exports.run = (client, message, args) => {

           if  (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply("Você não pode expulsar pessoas!");

           if(message.member.roles.find("name", "Robôs", "Bots", "Integrações", "Officials Bots") || message.author.id === message.guild.owner.id)
           {
           if (message.mentions.users.size < 1) return message.reply('Você deve selecionar o usuário que deseja banir!').catch(console.error);
           let reason = args.slice(1).join(' ');
           let user = message.mentions.users.first();
           if (reason.length < 1) return message.reply('Você deve especificar um motivo para o banimento!');
    
           if (!message.guild.member(user).bannable) return message.reply("Eu não posso banir esse usuário!");
           let member = message.guild.member(user).ban()
    
           const embed = new Discord.RichEmbed()
           .setColor(0xbe0c0c)
           .setTimestamp()
           .addField(`**Ação:**`, `Ban`)
           .addField(`**Usuário:**`, `${user.username}`)
           .addField(`**Responsável:**`, `${message.author.username}`)
           .addField(`**Motivo:**`, reason)
           .setFooter('Slice **DISCORD.JS**')

               var logs = message.guild.channels.find('name', 'logs');
               if (!logs) return message.reply('Não encontrei o canal logs');
               if (logs) {
           logs.send({embed: embed})
}
  var embed1 = new Discord.RichEmbed()
  .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
  .setDescription(`${message.author.username} usou o comando 'c!ban'`)
  .setColor(0xd34d4d)
  client.channels.get("373607840780386313").send({embed: embed})
  }
}
