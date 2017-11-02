exports.run = (client, message, args) => {
  const moment = require('moment')
  moment.locale('pt-BR')

 const Discord = require('discord.js');
 const embed = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setThumbnail(message.author.avatarURL)
   .addField('"Importantes" (Não tão...)', 'Meu servidor: **[clique aqui](https://discord.gg/bbX7ETf)**, meu invite: **[clique aqui](http://bit.ly/2eU0mGk)**')
   .addField('Eu', 
      `Olá! Me chamo Cactus! Prazer em conhecê-lo! Fui feito em **Discord.js**, e meu prefixo atual é **c!**
      Sou um simples Bot ainda em beta! Espero que tenha paciência, pois posso estar com algumas falhas em alguns comandos (também sou dorminhoco) <:fb4:363871317826469889>
      Estou em **${client.guilds.size}** desertos e conheço mais de **${client.users.size}** mussoumanos! <:fb1:363871316891140099>  `)
   .addField('Outra Coisa:',
    `Fui criado no  **${moment(client.user.createdAt).format('LLLL')}** \n Para Ver Meus Comandos: **c!ajuda**. Para Saber Um Pouco Sobre Mim: **c!info**!<:fb3:363871317247918100>`)
  message.channel.send({embed: embed});
 var embed1 = new Discord.RichEmbed()
 .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
 .setDescription(`${message.author.username} usou o comando 'c!info'`)
 .setColor(0xd34d4d)
 client.channels.get("373607840780386313").send({embed: embed1})
}
