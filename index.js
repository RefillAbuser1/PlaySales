const Discord = require("discord.js");
const playstore = new Discord.Client();
const config = require("./config.json");

playstore.on('ready', () => {
  console.log(`Logged in as ${playstore.user.tag}!`);

playstore.user.setPresence({game: {name: 'prefix: ps.help | Watching: Netflix', type:0 } });
});
 // Prefix settings
playstore.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // Add Command
  if (command === "add") {
    let numArry = args.map(n=> parseInt(n));
    let total = numArry.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);

  }
  if (command === "help") {
    message.author.sendMessage("List of commands:");
    message.author.sendMessage("``ps.say (Says what you tell it to)``");
    message.author.sendMessage("``ps.info (updates pretty much)``");
    message.author.sendMessage("``ps.website (Says the website of playsales)``");
    message.author.sendMessage("``ps.avatar (Posts a pic of your profile pic)``");
    message.reply("I'm sending you the help list right now!");
  }
  
  // list of shit
  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }
  
  if (command === "website") {
    message.channel.sendMessage("Website: http://forums.mcservervote.net");
  }
 
  if (command === "info") {
    message.channel.sendMessage("ps.serverinfo | Adding soon! |");
  }
  // Shows persons profile picture
  if (command === "avatar") {
    message.reply(message.author.avatarURL);
  }
  
});

playstore.login(process.env.BOT_TOKEN);
