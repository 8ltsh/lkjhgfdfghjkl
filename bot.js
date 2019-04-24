const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = ";";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("HEY",{type: 'PLAYING'})

});




client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('send')){
 if (message.author.id !== '486322208109494282') return message.reply('** u cant wp**')
 if(!message.author.id === '486322208109494282') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN); 
