exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const randomPuppy = require('random-puppy');
    
   randomPuppy()
       .then(url => {
           const embed = new Discord.RichEmbed()
           .setDescription('<:dog3:363872231991934997> AuAu!')
           .setImage(url)
           .setColor(0xa54601)
       message.channel.send({embed: embed})

   var embed1 = new Discord.RichEmbed()
   .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
   .setDescription(`${message.author.username} usou o comando 'c!dog'`)
   .setColor(0xd34d4d)
   client.channels.get("373607840780386313").send({embed: embed1})
                   })
                }
               
