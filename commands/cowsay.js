exports.run = (client, message, args) => {
    const cowsay = require("cowsay");
    
    message.channel.send('´´´\n'+cowsay.think({ //usar Texto Markdown ``
          text: args,       //define el texto a repetir
          eyes: 'oO',    //define la apariencia de los ojos.
          T : 'U '    //define la apariencia de la lengua.
    
    })+'\n´´´');
    
    
    /* Ejemplo
     _________________
    ( Hola como estas? )
     -----------------
            o   ^__^
             o  (oO)\_______
                (__)\       )\/\
                 U  ||----w |
                    ||     ||
    */    
}