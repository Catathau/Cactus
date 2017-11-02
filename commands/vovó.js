var jimp = require("jimp");
exports.run = (client, message, args) => { 
    if(args.length == 0)
    return message.reply("Escreva algo né!")
    

jimp.read("https://i.imgur.com/LtSwVOq.png").then(function(image){

    if(args.length == 16)
    return message.reply("**Mais de 16 caractéres não pode!**");
   
   jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function(font){
          
    image.print(font, 165, 383, args.join(' '), 400)
           
        image.getBuffer(jimp.AUTO, (err, buffer) => {
message.channel.send('**<:1_:374704171028578314> | Aguarde...**').then(newMessage => {
    newMessage.edit('**<:2_:374704171011538955> | Aguarde...**').then(newMessage => {
        newMessage.edit('**<:3_:374704170571268097> | Aguarde...**').then(newMessage => {
            newMessage.edit('**<:4_:374704170642440194> | Aguarde...**').then(newMessage => {
                newMessage.edit('**<:5_:374704170571137026> | Aguarde...**').then(newMessage => {
                    newMessage.edit('**<:6_:374704171020058634> | Aguarde...**').then(newMessage => {
                        newMessage.edit('**<:7_:374704170600497163> | Aguarde...**').then(newMessage => {
                            newMessage.edit('**<:8_:374718615687004170> | Aguarde...**').then(newMessage => {
                                newMessage.edit('**<:9_:374718615271899137> | Aguarde...**').then(newMessage => {
                                    newMessage.edit('**<:10:374718615217373186> | Aguarde...**').then(newMessage => {
                                        newMessage.edit('**<:11:374718616232263690> | Aguarde...**').then(newMessage => {
                                            newMessage.edit('**<:12:374718615423025152> | Aguarde...**').then(newMessage => {
                                                newMessage.edit('**<:13:374718618732068866> | Aguarde...**').then(message => message.delete(100)).then(newMessage => {
                            message.channel.sendFile(buffer, 'vovó.jpg');
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
})

}).catch(function(err){
console.log('`' + err + '`')
 
});
const Discord = require('discord.js')
var embed1 = new Discord.RichEmbed()
.setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
.setDescription(`${message.author.username} usou o comando 'c!vovó'`)
.setColor(0xd34d4d)
client.channels.get("373607840780386313").send({embed: embed1})
})
}
