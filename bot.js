const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});//Toxic Codes

client.on('message', message => {
    var prefix = '#'
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content === ('#bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@486322208109494282>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

client.on("message", async msg =>{
  
  if( msg.content.startsWith(`${prefix}unban`)){
 var args = msg.content.split(" ").slice(1);
        if(!args[0]) return msg.reply(`unban${prefix} <id>`).then( msgs => msgs.delete(3000));
         if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
            if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply("i don't have permission").then(z => {z.delete(1600);})    
            let check = await msg.guild.fetchBans();
            if(!check.find("id", args[0])) return msg.reply("i can't find player id").then( z => z.delete(1600));
            let banembed = new Discord.RichEmbed()
            .setDescription("~unban~")
            .setColor("BLACK")
            .addField("unban User", ` ID: ${args[0]}`)
            .addField("unban By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
            .addField("Time", msg.createdAt)
            .setTimestamp()
            .setFooter(client.user.username,client.user.displayAvatarURL)
            let unbanChannel = msg.guild.channels.find("name","server-log");
            if(!unbanChannel) return ;
            msg.reply(`Done:white_check_mark:  `).then(z => z.delete(1600));
            unbanChannel.send(banembed)
};
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`نورت يرجا قرأة القوانين
 ${member}  
 `) 
}).catch(console.error)
})

client.on('message', message => {//Toxic Codes
if(message.content.startsWith(prefix + 'mute')){//Toxic Codes
    let role = message.guild.roles.find(r => r.name === 'Muted');//Toxic Codes
    if(!role) message.guild.createRole({name: 'Muted'});//Toxic Codes
     if(user.bot){//Toxic Codes
        return message.channel.send(`I can't mute ${user} because he is a bot`);//Toxic Codes
    }
    if(user.hasPermission('ADMINISTRATOR')) {//Toxic Codes
        return message.channel.send(`I can't mute ${user} because he is staff`);//Toxic Codes
    }//Toxic Codes
   
    if(!user){//Toxic Codes
        message.channel.send(`There's no person to mute tho`);
    }
    message.guild.channels.forEach(f => {//Toxic Codes
        f.overwritePermissions(role, {//Toxic Codes
            SEND_MESSAGES: false
        });
        user.addRole(role);//Toxic Codes
       
    });
     message.channel.send(`I muted ${user}`);
}
});//Toxic Codes
 
 
client.on('message', message => {//Toxic Codes
if(message.content.startsWith(prefix + 'unmute')){//Toxic Codes
    let role = message.guild.roles.find(r => r.name === 'Muted');//Toxic Codes
if(!user.roles.has(role)) {
    return message.channel.send(`He is not muted`);//Toxic Codes
}
    user.removeRole(role).then(message.channel.send(`Unmuted ${user}`));
   
}
}); //Toxic Codes
