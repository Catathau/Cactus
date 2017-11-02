const jimp = require('jimp')
const moment = require('moment')
moment.locale('pt-br')
exports.run = (client, message, args, member) => {

    var texto = ['**Ryuk:** _Céu e inferno não existem. Não importa como você viveu sua vida, o pós-vida é o mesmo. A morte é igual para todos._', '**Ryuk:** _Os humanos são tão interessantes._', '**Ryuk para Light:** _Nós aliviamos o tédio um do outro por um bom tempo... Foi bastante divertido._', '**L Lawliet:** _A paz jamais será conquistada com violência._', '**L Lawliet:** _Yagami-san, se eu morrer nos próximos dias, o seu filho é o Kira._', '**L Lawliet:** _Arriscar a vida e desperdiçá-la totalmente em vão, são coisas distintas._', '**Light Yagami | Kira:** _Eu serei o deus do novo mundo!_', '**Light Yagami | Kira:** _Esse mundo está podre, e quem apodreceu junto com ele deve morrer!_', '**Light Yagami | Kira:** _Vejo todas essas pessoas... começo a achar que o mundo seria melhor sem elas._', '**Near:** _Você é apenas um assassino, Light Yagami. E este caderno é a arma mais mortal de assassinato em massa na história da humanidade._', '**Near:** _Se você não pode ganhar o jogo, se você não pode resolver o quebra-cabeça, então você não é nada além de um perdedor._', '**Near:** _Não se preocupe, Comandante Rester, fazer suposições faz parte de qualquer investigação. Se estamos errados, tudo o que vai custar é uma desculpa._', '**Soichiro Yagami:** _Light, meu filho... De um assassino para outro, eu te vejo no inferno!_'];
    const random = texto[Math.floor(Math.random() * texto.length)];

    if (message.content.startsWith("c!deathnote")) {
        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first().username;
    } else {
      
    return message.channel.send(message.author + " Você precisa dizer quem vai matar né dãããã");
    }
    
    let reason = args.slice(1).join(' ');
    if(reason.length < 1) reason = "Morreu de infarto!";

            const Discord = require('discord.js');
            var embed1 = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('Death Note - :notebook_with_decorative_cover:', '**Vítima: **' + user + '\n **Causa: **' + reason + '\n\n << Đ€ΔŦĦ ŇØŦ€ >>')
            .addField(':notebook_with_decorative_cover: Death Note - Frases', random)
            .setFooter('DeathNote de: ' + message.author.username + ' | ' + `${moment().calendar()}`)
            .setColor(message.member.displayHexColor)
            message.channel.send({embed: embed1})

    var embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}`+ '#' + `${message.author.discriminator} na guilda ${message.channel.guild.name}`)
    .setDescription(`${message.author.username} usou o comando 'c!deathnote'`)
    .setColor(0xd34d4d)
    client.channels.get("373607840780386313").send({embed: embed})
    }
}

