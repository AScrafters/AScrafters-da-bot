module.exports = {
    name:'rules',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00DFFF')
        .setTitle('Rules of the server')
        .setURL('https://discord.gg/V3VQj3dBB9')
        .setDescription('These are the server rules')
        .addFields(
          {name: '1. Claiming your Subs', value: 'If you get an Invite or win a Sub Giveaway/Drop, you must Link your YouTube Channel to Discord. This helps us to find out if either its your Channel or somebody Elses. Go to Settings > Connections > YouTube > Login with YouTube This is a Safety Procedure to Prevent either giving Subscribers to the Wrong Channel or to Somebody elses Channel'},
          {name: '2. Claiming your Reward', value: 'You should not only open the ticket, but you must ping the Person in the Ticket and tell what Prize you will Claim'},
          {name: '3. No Begging', value: 'You should not Beg for any Exclusive Roles, Giveaways and Subs. For Example: " Hey I have been here for a Long time, give me @Godly Inviter [50] Role!'},
          {name: '4. No Drama', value: 'You should not do any Drama if you have either Won a Giveaway which has been Rerolled and given to another Person or Do not have the Requirement for Participating in a Giveaway'},
          {name: '5. Leaving the Server', value: 'If you Leave the Server, all your Subs will be Lost'},
          {name: '6. Spamming Tickets', value: 'Spamming tickets will lead to an instant mute or a ban Only create ticket if you won a giveaway or if you fulfilled the conditions for an event Only create ticket if you won a giveaway or if you fulfilled the conditions for an event  You must follow the #ʀᴜʟᴇs PLS Use TICKET IF YOU HAVE ANY DOUBTS ABOUT THE SERVER!!!'}, 

        
          
        )
        .setImage('https://cdn.abcotvs.com/dip/images/4385330_Rules1280.jpg?w=1280&r=16%3A9')
        .setFooter('Hope you have a great time in the server :D');
        message.channel.send(newEmbed);
    }
}