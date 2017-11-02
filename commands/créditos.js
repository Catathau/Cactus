exports.run = (client, message, args) => {
var Discord = require('discord.js');
var embed = new Discord.RichEmbed()
.setDescription('Meus créditos: \n\n **Zagrion#9386** / **Me ajudou na maioria dos meus comandos :heart:**  \n  Seu Bot: **[Clique aqui!](https://discordapp.com/oauth2/authorize?client_id=353937084534489088&scope=bot&permissions=2146958591)** \n\n **Nekroッ#4893**/ ** Me ajudou em alguns comandos!** \n Seu bot: **[Clique aqui!](https://discordapp.com/oauth2/authorize?client_id=350456958890934272&scope=bot&permissions=2146958591)** \n\n **Lhermebr#0596** / **Me ajudou na maioria dos meus comandos!** \n Seu bot: **[Clique aqui!](https://discordapp.com/oauth2/authorize?client_id=340315829264711700&scope=bot&permissions=2146958591)**')
.setColor(0x82f0c7)
message.channel.send({embed: embed})

var embed1 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!créditos'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed1})
}