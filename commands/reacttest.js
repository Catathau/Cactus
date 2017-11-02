exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var embed1 = new Discord.RichEmbed()
    .addField(`:books: Função:`, `Tanque`, true)
    .addField(`:person_with_pouting_face: Nome verdadeiro:`, `Aleksandra Zaryanova`, true)
    .addField(`:cake: Idade:`, `28 anos`, true)
    .addField(`:briefcase: Ocupação:`, `Soldado`, true)
    .addField(`:desktop: Base de operações:`, `fronte de Krasnoyarsk, Rússia`, true)
    .addField(`:bread: Afiliação:`, `Forças Defensivas Russas`, true)
    .setImage('https://i.imgur.com/6kzh2Lw.jpg')
    message.channel.send({embed: embed1}).then(newMsg => {
        newMsg.react('⬅');
        newMsg.react('0⃣');
        const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);

        collector.on('collect', r => {
            switch(r.emoji.name) {
                case '⬅':
                var embed2 = new Discord.RichEmbed()
                .addField('Habilidades:')
                .setImage('https://i.imgur.com/jnlkZK8.jpg')
                    newMsg.edit({embed: embed2});
                    r.users.filter(u => r.remove(u.id !== client.user.id));
                    break;
                case '➡':
                var embed3 = new Discord.RichEmbed()
                .addField('História:', `"Aleksandra Zaryanova é uma das mulheres mais fortes do mundo, uma atleta aclamada que sacrificou o triunfo pessoal para proteger sua família, amigos e país em tempos de guerra.
                Aleksandra nasceu em uma vila remota na Sibéria, que era uma das linhas de frente na Crise Ômnica, que começou por volta de trinta anos atrás. Apesar das forças russas terem derrotado os robôs e desligado seu omnium, a região foi devastada pelo conflito. Aleksandra, que era apenas uma criança na época, foi cercada pela destruição pós-guerra, e com o passar dos anos, ela jurou que se tornaria forte para ajudar seu povo a se recuperar.`)
                    newMsg.edit({embed: embed3});
                    r.users.filter(u => r.remove(u.id !== client.user.id));
                    break;
            }
        });
    });
var embed4 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!reacttest'`)
.setColor(0xd34d4d)
client.channels.get("365640365564231681").send({embed: embed4})
    }
        