exports.run = (client, message, args) => {
let letras = message.content.split(" ").slice(1).join(" ").split("");
let content = "";

letras.forEach(l => {
    if(l == " ") {
        content += "    ";
    } else {
        content += ":regional_indicator_"+l+":";
    }
});
message.channel.send(content);
var embed = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!letra'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed})
}