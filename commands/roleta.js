exports.run = (client, message, args) => {
    let texto = ["1", "2", "3", "4", "5", "6"];
    let random = texto[Math.floor(Math.random() * texto.length)];
    if(random == 6){
    message.reply("Seu número da sorte foi: **" + random + "** Que sorte ein!")
    }else{
    message.reply("Seu número da sorte foi: **" + random + "** Que azar.. tente outra vez!")
    }
    const Discord = require('discord.js');
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!roleta'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}