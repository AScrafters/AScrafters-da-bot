const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready',() =>  {
    console.log('AScrafters da bot is online!');
    client.user.setActivity('AScrafters vids! | -help', {type:'WATCHING'}).catch(console.error);

  
}); 


   
    


client.on('message', message=>{ 
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command=args.shift().toLowerCase();

if(command === 'ping'){
client.commands.get('ping').execute(message, args);
} else if (command == 'youtube'){
message.channel.send('https://bit.ly/AScrafters');
} else if (command == 'aboutme')
 message.channel.send('Sup I am AScrafters da bot I was Coded On 29-11-2020 By AScrafters My Prefix Is - AScrafters#2897 Keeps on developing me more:D');{
} if (command == 'idk' ){
message.channel.send('Idk What You Are Telling Me To Do');   
} if (command == 'lmtao'){
message.channel.send('LMTAOOO!! :rofl: (This is a meme created by Pratmaster and AScrafters by accident lol)');
} if (command == 'pog'){
message.channel.send('pog champ');
} if (command == 'rickroll'){
message.channel.send('https://i.gifer.com/7b7F.gif');
} if (command == 'christmas'){
message.channel.send(':christmas_tree: Merry Christmas! ') 
} if (command == 'rules'){
    client.commands.get('rules').execute(message, args, Discord);
} if (command == 'help'){
    client.commands.get('help').execute(message, args, Discord); 
} if (command == 'inviteme'){   
    message.channel.send('http://bit.ly/AScraftersdabot');       
} else if (command === 'ban'){
    client.commands.get('ban').execute(message, args);
}else if (command === 'kick'){
    client.commands.get('kick').execute(message, args);
} else if (command === 'mute'){
    client.commands.get('mute').execute(message, args);
} else if (command == 'membercount'){
    client.commands.get('membercount').execute(message, args);
} else if (command === 'warn'){
    client.commands.get('warn').execute(message, args);
} else if (command === 'userinfo'){
    client.commands.get('userinfo').execute(message, args);
} else if (command == 'yeet'){
    client.commands.get('yeet').execute(message, args);
} else if (command == 'kill'){
    client.commands.get('kill').execute(message, args);
} else if (command == 'boop'){
    client.commands.get('boop').execute(message, args); 
}
});




 client.login('BOT_TOKEN');