exports.run = (client, message, args) => {
    const Discord = require('discord.js')

    let rollfish = Math.floor(Math.random() * 7) +1;
    if(rollfish === 1){
        var embed2 = new Discord.RichEmbed()
        .setTitle(message.author.tag, message.author.avatarURL)
        .setDescription('**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :tropical_fish:');
        message.channel.send({embed: embed2})
    
    }else if(rollfish === 2){
        var embed1 = new Discord.RichEmbed()
        .setTitle('Pescaria do Zé!', message.author.tag, message.author.avatarURL)
        .setDescription('**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :fish:');
        message.channel.send({embed: embed1})
    
    }else {
        let texto = ['**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :shopping_cart: \n **(vai no `supermercado` e coloca as compras ai dentro kk)**', '**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :boot: \n **(uau, agora não anda descalço!)**', '**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :briefcase: \n **(pelo menos, agora você tem onde guardar o dinheiro, documentos..)**', '**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :ledger: \n **(agora com esse caderno pode matar pessoas né kk)**', '**Parabéns,** `' + message.author.username + '`**! Você pescou um:** :moneybag: \n **(Que sorte, tem muita grana agora ein, porém, não é `peixe`...)**'];
        let random = texto[Math.floor(Math.random() * texto.length)];

        var embed = new Discord.RichEmbed()
        .setTitle('Pescaria do Zé!', message.author.tag, message.author.avatarURL)
        .setDescription(random)
        message.channel.send({embed: embed})
    }
}