exports.run = (client, message, arg) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL
        const Discord = require('discord.js');
            const embed = new Discord.RichEmbed()
            .setDescription(':frame_photo: **Avatar de ' + user + `** \n **[Clique aqui para ver o avatar melhor!](${user.avatarURL})**`)
            .setImage(avatar)
            .setColor(0xffff)
            message.channel.send({embed: embed});
            var embed1 = new Discord.RichEmbed()
            .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.guild.name}`)
            .setDescription(`${message.author.username} usou o comando 'c!avatar'`)
            .setColor(0xd34d4d)
            client.channels.get("373607840780386313").send({embed: embed1})
}
