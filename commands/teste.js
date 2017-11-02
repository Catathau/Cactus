  exports.run = (client,message,args) => {
    const Discord = require('discord.js');
/*

Genera encuestas con determinadas preguntas y responde 
a las preguntas con reacciones usando react().
*/
if (args.length == 0)
return message.channel.send('**Faça uma pergunta para criar 1 votação!**')

const embed = new Discord.RichEmbed()
      .setAuthor('Pregunta:')
      .setDescription('**' + args + '** \n ▔▔▔▔▔▔▔▔▔▔▔')
      .addField('Opcion 1', '1\u20e3 Si')
      .addField('Opcion 2', '2\u20e3 No')
      .setColor(0xff4d4d)
      .setTimestamp()

message.channel.send({embed})
.then(m => {
        m.react("1\u20e3");
        m.react("2\u20e3");

});
};