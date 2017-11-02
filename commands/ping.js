exports.run = (client, message, args) => {
  const Discord = require('discord.js');
    if(message.content.startsWith('c!ping')) {
        let mensagens = message.createdTimestamp; - Date.now()
        let ping = Math.floor(message.client.ping); 
          const embed1 = new Discord.RichEmbed()
            .setColor(0x81b4e9)
            .addField("Ping",`:incoming_envelope: \`${message.createdTimestamp - message.createdTimestamp}ms\``, true)
            .addField("Meu ping",`:satellite_orbital: \`${ping} ms\``, true)
          message.channel.send({embed: embed1});
      }

    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!ping'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
    }

    