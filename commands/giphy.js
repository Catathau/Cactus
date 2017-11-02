const Discord = require('discord.js');
const giphy = require('giphy-api')('094856c2b0274be1bad7de14467ef93a'); //api key

exports.run = (client, message, args) => {
    if (args.length == 0) {
        message.channel.send('**Coloque Algum Termo Para Ajudar Na Pesquisa :desktop:**');
    } else {

    message.channel.send('**:mag: :desktop: Procurando por **`' + args.join(' ') + '`**...**').then(message => message.delete(1000)).then(() => {
        giphy.random(`${args.join(' ')}`, function (err, res) {

            if (!res.data.url) {
                return message.channel.send('**Não encontrei nada com** `' + args.join(' ') + '`');
            }

            let key = res.data.url.substr(res.data.url.lastIndexOf('-') + 1);
            let gif = `https://media0.giphy.com/media/${key}/giphy.gif`;

            let embed = new Discord.RichEmbed();
            embed.setColor("0x0099FF")
            .addField('<:cacto_homem:374704170231660554> Por:', message.author.username, true)
            .addField(':desktop: Pesquisa de:', args.join(' '), true)
            .setImage(gif)
            .setColor(0x20b15f)
            .setFooter('Caso não envie, peço desculpas, vou ajeitar!')
            message.channel.send({embed: embed}), {
              }
        });
    });
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!giphy' com a pesquisa: '` + args.join(' ') + `'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed1})
}
};