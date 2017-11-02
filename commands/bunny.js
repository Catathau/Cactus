let request = require('request');

function coelho() {
    return new Promise((resolve, reject) => {
        request({url:"https://api.bunnies.io/v2/loop/random/?media=poster", json: true}, (err, res, body) => {
            if (err) return err;
                resolve(body.media.poster);
        });
    });
}

exports.run = (client, msg, args) => {
    coelho().then(url => {
        msg.channel.send({
            embed: {
                description: '<:bunny3:365538501275418624> Zchhh (barulho de coelho :/) ',
                image: {url: url},
                color: 0xb3b3b3
            }
        });
    });
    var embed1 = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!bunny'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
    }