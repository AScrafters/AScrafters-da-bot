module.exports = {
    name:'help',
    description: "Embeds!",
    execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#00f7fd')     
    .setTitle('Commands')
    .setURL('https://discord.gg/TJ8n6v7')
    .setDescription('These are some fun commands of mine')
    .addFields(
     {name: '**Fun Section**', value: '`ping` `inviteme` `lmtao` `rickroll` `idk` `youtube` `aboutme` `pog` `christmas` `yeet` `kill` `boop`', inline: false},
     {name: '**Moderation Section**', value: '`ban` `kick` `mute` `warn` `clear`', inline: false},
     {name: '**Utility Section**', value: '`membercount` `userinfo` `rules`', inline: false}
    )
    .setFooter('New commands will be added soon ;)');
    message.channel.send(newEmbed);

       
        
    }
}