exports.run = (client, message, args) => {
  if(message.author.id != 242039675970256898) return;
  
    if(!args || args.size < 1) return message.reply("Diga o comando que deseja recarregar");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`O comando ** ${args[0]} ** foi recarregado com ** SUCESSO **`);
    
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!reload'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
  };