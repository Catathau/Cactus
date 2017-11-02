exports.run = (client, message, args) => {
    const moment = require('moment');
    moment.locale('pt-BR'); 
    if(message.content.startsWith("c!serverinfo")) {  
        let user = message.mentions.users.first() || message.author; 
        
        function afks(){
            var afkTimeout = message.channel.guild.afkTimeout
            if (afkTimeout == "60"){
                return "1 minuto"
            } else if (afkTimeout == "300"){
                return ("5 minutos")
            } else if (afkTimeout == "900"){
                return ("15 minutos")
            } else if (afkTimeout == "1800"){
                return ("30 minutos")
            } else if (afkTimeout == "3600"){
                return ("1 hora")
            }
        }
        
        function verificationLevel(){
    var guildVerification = message.channel.guild.verificationLevel;
        if (guildVerification == "0") {
            return "Nenhum";
        } else if (guildVerification == "1") {
            return "Baixo"
        } else if (guildVerification == "2") {
            return "Médio"
        } else if (guildVerification == "3") {
            return "Alto"
        }
    }
        
   const Discord = require('discord.js')
   const embed = new Discord.RichEmbed()
            .setAuthor (message.guild, message.guild.iconURL)
            .addField(':person_with_pouting_face: Nome:',`${message.guild.name}`,true)
            .addField(`:family_wwgb: Usuários: `, `${message.guild.memberCount}`, true)
            .addField(`:id: ID Da Guilda:`, `${message.guild.id}`, true)
            .addField(':earth_asia: Região: ', `${message.guild.region}`, true)
            .addField(':crown: Dono:', `${message.guild.owner.user.username}`, true)
            .addField(':no_bell: Tempo de Ausência', `${afks()}`, true)
            .addField(':briefcase: Cargos do Servidor:', `${message.guild.roles.size}`, true)
            .addField(`:poop: Emojis:`, `${message.guild.emojis.size}` || 'Sem emojis!', true)
            .addField(':diamonds: Nível de verificação:', `${verificationLevel()}`, true)
            .addField(':mute: Canal AFK:', message.guild.afkChannel ? message.guild.afkChannel : 'Não existe', true)
            .addField(`:star2: Entrei em:`, `${moment(client.joinedAt).format('LLLL')}`)
            .addField(':date: Criado em:', `${moment(message.guild.createdAt).format('LLLL')}`)
            .addField(`Clique em 'OKAY' para ver o avatar da guilda!`, `[OKAY](message.guild.iconURL)`)
            .setThumbnail(message.guild.iconURL)
            .setColor(0x00AE86)    
            message.channel.send({embed: embed});
      }
      const Discord = require('discord.js')
      var embed1 = new Discord.RichEmbed()
      .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
      .setDescription(`${message.author.username} usou o comando 'c!serverinfo'`)
      .setColor(0xd34d4d)
      client.channels.get("373607840780386313").send({embed: embed1}) 
    }