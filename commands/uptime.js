exports.run = (client, message, args) => {
const moment = require('moment');
moment.locale('pt-br');
const Discord = require('discord.js');
var embed = new Discord.RichEmbed()
.setDescription('**Data: **' + moment(client.Uptime).format('LL') 
`**Horas: **` + moment(client.Uptime).format('LTS')
`**Criado em: **` + moment(client.user.createdAt).format('LLLL')
`**Memória:` + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
`**`)
.setColor(0xd34d4d)
message.channel.send({embed: embed})

var embed1 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!userinfo'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed1})
}