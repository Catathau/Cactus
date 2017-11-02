exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  function topic(){
    let nad = message.channel.topic
    if(nad != undefined){
        return nad;
    }else{
        return ":x: Não detectado";
    }
}
  const embed = new Discord.RichEmbed()
  .setTitle("Informações do Canal")
  .addField(":person_with_pouting_face: Nome:", message.channel.name, true)
  .addField(":id: ID:", message.channel.id, true)
  .addField(":point_down: Posição:", message.channel.position, true)
  .addField(":bread: Tipo:", message.channel.type + " (no inglês)", true)
  .addField(":date: Data de criação:", message.channel.createdAt, true)
  .setThumbnail(message.guild.iconURL)
      message.channel.send({embed: embed})

      var embed1 = new Discord.RichEmbed()
      .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
      .setDescription(`${message.author.username} usou o comando 'c!test'`)
      client.channels.get("373607840780386313").send({embed: embed1})
        } 