exports.run = (client, message, args) => {
        let texto = ["<:jp:355187532402786305> ** Eu tô chorando, carai eu sou 1 merda mermão! **", "<:jp:355187532402786305> ** A vontade de rir é grande, mas a de chorar é maior ;-; **", "<:jp:355187532402786305> ** Quando for xingar teus amigos, não xingue de 'Ah seu fela de ****' **, 'Seu fela da mãe!', xingue de SEU JOÃO PAULO!!! ** ", "<:jp:355187532402786305> **O dia nem começou e já fui derrotado 6 vezes ;-; **", "<:jp:355187532402786305> ** Meu deus o que eu fiz com a minha vida JESUS!!! **"];
        let random = texto[Math.floor(Math.random() * texto.length)];
        message.channel.send(random)
        var embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
        .setDescription(`${message.author.username} usou o comando 'c!jp'`)
        .setColor(0xd34d4d)
        client.channels.get("373607840780386313").send({embed: embed})
}