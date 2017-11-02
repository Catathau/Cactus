exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    limit = parseInt(args[0]);
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) 
        return message.reply("Você não tem permissão para realizar esse comando");
    if (!limit) 
        return message.reply('Especifique uma mensagem de **2** a **100** para limpar!');
    
        message.channel.fetchMessages({
            limit: amount,
           }).then((messages) => {
            if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
     const Discord = require('discord.js');
     var embed1 = new Discord.RichEmbed()
     .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
     .setDescription(`${message.author.username} usou o comando 'c!limpar'`)
     .setColor(0xd34d4d)
     client.channels.get("373607840780386313").send({embed: embed1})
     })
    }