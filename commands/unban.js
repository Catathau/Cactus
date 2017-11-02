const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = args[0];
  let modlog = message.guild.channels.find('name', 'mod-log');
  let embeduser = client.users.get(user);
  if (!modlog) return message.channel.send('Não achei o canal mod-log!');
  if (!user) return message.channel.send('Você precisa dizer o ID da pessoa banida!');
  const embed2 = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Ação:', 'Unban', true)
    .addField('Usuário', `${embeduser.username}#${embeduser.discriminator} (${user})`, true)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`, true);
  client.channels.get(modlog.id).send({embed: embed2});
  return message.guild.unban(user).then(message.channel.send(`**${embeduser.username}#${embeduser.discriminator}** foi desbanido com **SUCESSO**`));

var embed1 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!ban'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed1})
}