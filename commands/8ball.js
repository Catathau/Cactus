exports.run = (client, message, args) => {
const Discord = require('discord.js');
const hook = new Discord.WebhookClient('374260729219645452', 'Dkp2QSN9tuhkxzrgWrXrD7IrTvOEHz2XaehOANpLUBy03MUj_aGhXI0JQlWIgyq3YXrL');

hook.send('I am now alive!');

    var texto = ['Talvez..', 'Claro!', 'Sim!', 'Não!', 'Provavelmente sim!', 'Provavelmente não!'];
    const random = texto[Math.floor(Math.random() * texto.length)];
    if(args.length == 0)
    return message.reply("Faça 1 pergunta, e eu responderei!");

if (message.channel.guild.me.permissions.has('MANAGE_MESSAGES'))
    message.delete();
    message.channel.send(random)
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!8ball'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}