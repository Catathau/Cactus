exports.run = (client, message, args) => {
  
    let user = message.mentions.users.first();
  
    let guild = message.guild;
  
    args.shift();
  
    let reason = args.join(" ");
  
  
  
    if(message.member.roles.find("name", "[Μ€ΜβŘØŞ]", "Diretor") || message.author.id === message.guild.owner.id)
    
  
    {
  
  
      if(message.mentions.users.size < 1) return message.reply("Mencione o usuário!");
  
      if(reason.length < 1) reason = "Razão não definida! :x: ";
      message.channel.send(`:ok_hand: ** Aviso Dado Ao Usuário "${user.username}" Com Sucesso :white_check_mark:**`);
  
  
      {
  
        //eslint -.-
       
          const Discord = require("discord.js")
        const embed = new Discord.RichEmbed()
  
        .setColor(0x00AE86)
        .setTimestamp()
        .addField("Ação:", "Aviso")
        .addField("Usuário:", `${user.username}#${user.discriminator} (${user.id})`)
        .addField("Staff:", `${message.author.username}#${message.author.discriminator}`)
        .addField("Motivo:", reason);
        
        var logs = message.guild.channels.find('name', 'mod-log');
        if (!logs) return message.reply('Não encontrei o canal mod-log');
        if (logs) {
        user.send({embed: embed});
        logs.send({embed: embed});
  
      }
  
    else{
  
      message.reply("Você necessita ter a role ** Diretor ** para usar esse comando!  ");
  
    }
  
  }
  
  
  
  exports.cmd = {
  
    usage: "<@user> <reason>",
  
    disabled: true
  
  }
    }
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!aviso'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
}
