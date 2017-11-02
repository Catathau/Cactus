exports.run = (client, message, arg) => {
  message.channel.send(":mailbox_with_mail: Mandei para seu privado! Pode conferir! :envelope_with_arrow:... **CUIDADO COM SEU PRIVADO!**")
      const Discord = require('discord.js');
      var embed = new Discord.RichEmbed()
      .addField('<:cacto3:374704170231660554> | Minha ajuda', `Olá! Me chamo Cactus! Prazer em conhecê-lo! Sou um simples Bot ainda em beta `)
      .addField('🚪 | Outra coisa', `Se você está vendo essa mensagem, significa que você usou **c!ajuda**, não é? Ah, eu tenho 1 <:camel2:375651973749407754>** Camelo** de estimação... Aproveite meus comandos! <:greenheart1:375652522754441216>`)
      message.author.send({embed: embed})

      var embed1 = new Discord.RichEmbed()
      .setTitle('<:dolphin2:375666799460483072> Divertidos')
      .setDescription(
`**c!avatar** - Mostra o avatar de tal usuário \n
**c!créditos** - Meus créditos \n
**c!deathnote** - Use o deathnote! Mate alguém \n
**c!embed** - Igual o say, só que, em outra forma \n
**c!emojilist** - Quais os emojis do servidor? \n
**c!giphy** - Pesquise gifs com tal assunto! \n
**c!letra** - Fale com letras :regional_indicator_a: :regional_indicator_s: :regional_indicator_s: :regional_indicator_i: :regional_indicator_m:! \n
**c!papai** - Primeiras palavras do filho \n
**c!ping** - Mostra seu ping atual \n
**c!say** - Repete o que você fala \n
**c!serverinfo** - Mostra inf. sobre o servidor \n
**c!serverinvite** - Mostra o invite do servidor \n
**c!userinfo** - Mostra inf. sobre tal usuário \n
**c!vovó** - Mal conheceu a vovó e já fez besteira...`)
.setThumbnail('https://i.imgur.com/LUoSPD1.png')
      message.author.send({embed: embed1})

      var embed2 = new Discord.RichEmbed()
      .setTitle('<:frenchfries2:375666799397568533> Random')
      .setDescription(
     `**c!surprise** - Surpresas na sua DM... \n
**c!roleta** - Roleta russa!! \n
**c!jp** - Filósofo João Paulo \n
**c!dog** - Random imagens, gifs de cachorros \n
**c!dvss** - Cachorro ou escada? Quem ganha? \n
**c!fish** - Pesque algo! (Que seja peixe...) \n
**c!8ball** - Pergunte algo, e ele lhe responderá! \n
**c!bunny** - Random imagens, gifs de coelhos! \n
**c!cat** - Random gifs, imagens de gatos! \n
      `)
      .setThumbnail('https://i.imgur.com/mF9YTLy.png')
      message.author.send({embed: embed2})

      var embed3 = new Discord.RichEmbed()
      .setTitle('<:hole2:375666799158624257> Úteis')
      .setDescription(
`**c!uptime** - Mostra meu uptime \n
**c!sugestão** - Mande 1 sugestão para meu dono! \n
**c!rolecreate** - Crie 1 role com cor personalizável \n
**c!limpar** - Limpar mensagens de 2 a 100 \n
**c!info** - Mostra minha info \n
**c!convite** - Meu convite para adicionar em servidores \n
**c!calc** - Faça equações! (Calculadora é mais fácil) \n
**c!unban** - Desbane alguém banido \n
**c!mute**- Muta tal usuário \n
**c!kick** - Kika tal usuário \n
**c!unmute** - Desmuta alguém mutado \n
**c!ban** - Bane tal usuário \n
**c!aviso** - Avise algo para uma pessoa!
      `)
      .setThumbnail('https://i.imgur.com/NyYh8pK.png')
      message.author.send({embed: embed3})

      var embed3 = new Discord.RichEmbed()
      .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.guild.name}`)
      .setDescription(`${message.author.username} usou o comando 'c!ajuda'`)
      .setColor(0xd34d4d)
      client.channels.get("373607840780386313").send({embed: embed3})
  }