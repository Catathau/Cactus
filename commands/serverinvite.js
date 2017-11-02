exports.run = (client, message, args) => {
   var id = message.channel.id;
    message.guild.channels.get(id).createInvite({
        maxAge: 0       //maxAge: 0 significa que el link sera permanente
    
    }).then(invite =>  
        message.channel.send(invite.url)
    );
}

