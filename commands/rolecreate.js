exports.run = (client, message) => {
    
        const args = message.content.split(' ').slice(1);
        var guild = message.guild;
    
        var perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
        if(!perms) return message.channel.send("**Erro! | Você não tem permissão para isto!**");

        if (args.length == 0)
        
        return message.channel.send(`Digite o nome e cor do cargo! | Por exemplo: **c!rolecreate [nome] [cor]**
        **---------------------------------------------------------------------------------**
        Aqui está a principal lista de cores que pode ser usada:
            '**DEFAULT**' = Normal
            '**AQUA**' = Azul claro
            '**GREEN**' = Verde
            '**BLUE**' = Azul
            '**PURPLE**' = Roxo
            '**GOLD**' = Amarelo
            '**ORANGE**' = Laranja
            '**RED**' = Vermelho
            '**GREY**' = Cinza
            '**RANDOM**' = Aleatório.`);
    
    {
        message.guild.createRole({
       
              name: args[0],
      color: args[1],
        }).then(role => message.channel.send('**Novo cargo criado! O _' + role + '_ .**'));
    }
    }