exports.run = (client, message, args) => {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.reply(`**Aqui estão todos os emojis da guilda: __${message.guild.name}__** \n` + emojiList);
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!emojilist'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed1})
    }