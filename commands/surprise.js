exports.run = (client, message, [mention, ...reason]) => {
    let texto = ["** QUE EU VOU JOGAR BEM NA TUA, TUA CARA!!! **", "** Oieee **", "** Não, nãooo!! NÃOOOOOOOOOO **", "** EU SOU 1 MERDA MERMÃO ;-; **", "** A vontade de rir é grande, mas a de chorar é maior ;-; **"];
    let random = texto[Math.floor(Math.random() * texto.length)];
    {message.author.send(random)}
    message.channel.send(":gift: Tem 1 mensagem surpresa no seu privado! :mailbox_with_mail:")
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!surprise'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}