    exports.run = (client, message, args) => {
        let math = require('mathjs')
        let code = args.join(' ') 

        const Discord = require('discord.js');
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('Comando:', "```" + code + " = " + math.eval(code) + "```")
        .setColor(0x40aa73)
        message.channel.send({embed: embed})

        var embed1 = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
        .setDescription(`${message.author.username} usou o comando 'c!calc'`)
        .setColor(0xd34d4d)
        client.channels.get("373607840780386313").send({embed: embed1})
            }