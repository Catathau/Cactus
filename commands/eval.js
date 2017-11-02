exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  
    if(message.author.id != 242039675970256898) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
  
      if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
  
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\**Parece que você errou no comando!** \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
      if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
      return text;
    }
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!eval'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
  }
