// Variáveis
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();
const guild = new Discord.Client();

// Pasta Events
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  // Pasta Commands
  const moment = require('moment')
  moment.locale('pt-br');
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log(err)
  }
 
});

// Jogando...
client.on('ready', () => {
  client.user.setGame(`água para ${client.guilds.size} desertos e ${client.users.size} mussoumanos | c!ajuda`, "https://www.twitch.tv/cactus")
  console.log('Iniciando..');
  console.log('3..');
  console.log('2..');
  console.log('1..');
  console.log(`Funcionando!! Logado como ${client.user.tag}!`);
});
client.login(process.env.BOT_TOKEN)
