const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("HEY",{type: 'PLAYING'})

});

client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const Baron = new Discord.Client();
const prefix = '%';
Baron.on("ready", ()=>{
Baron.user.setActivity('test', {type : 'watching'});
console.log('Loding')
setTimeout(() => {
  console.log('Loding.')//Baron#1500
}, 500)
setTimeout(() => {
  console.log('Loding..')//Baron#1500
}, 1000)
setTimeout(() => {
  console.log('Loding...')//Baron#1500
}, 1500)
setTimeout(() => {
  console.log(`Logged as ${Baron.user.tag}`)//Baron#1500
}, 2000)
})
Baron.on("message", message =>{//Baron#1500
//السطر ال تحت لمنع تكرار انشاء الرتب لو عاوز تغير اسم الرتب غيرها وحط اسمها فى السطر ال تحت كمان علشان ميحصلش سبام
let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(message.content.startsWith(prefix + "roles")) {//Baron#1500
  if(message.author.bot) return;//Baron#1500
  if(roles) return message.reply('**الرتب موجوده بالفعل**')//Baron#1500
  //دى بقا الرتب ال انت عاوزو يعملها
  let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥");//Baron#1500
  if(!roleking) {
  message.guild.createRole({//Baron#1500
  name: '⇁『KiNG 』‏‏༄  ❥',
  color: 'RANDOM',
  position: (1),
  hoist: (true),
  permissions: 'ADMINISTRATOR'
})
  }
let roleleader = message.guild.roles.find(r => r.name === "⇁『LEADER』‏‏༄  ❥");//Baron#1500
if(!roleleader) {
 message.guild.createRole({//Baron#1500
    name: '⇁『LEADER』‏‏༄  ❥',//Baron#1500
    color: 'RANDOM',
    position: (2),//Baron#1500
    hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
}//Baron#1500
let rolebigboss = message.guild.roles.find(r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥");//Baron#1500
if(!rolebigboss) {//Baron#1500
  message.guild.createRole({
    name: '⇁『BiG BOSS 』‏‏༄  ❥',
    color: 'RANDOM',
     position: (3),//Baron#1500
     hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
}//Baron#1500
let rolecaptain = message.guild.roles.find(r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥");//Baron#1500
if(!rolecaptain) {//Baron#1500
message.guild.createRole({
    name: '⇁『CAPTAIN 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (4),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}
let rolesergant = message.guild.roles.find(r => r.name === "⇁『SERGEANT 』‏‏༄  ❥");//Baron#1500
if(!rolesergant) {
 message.guild.createRole({
    name: '⇁『SERGEANT 』‏‏༄  ❥',
    color: 'RANDOM',//Baron#1500
    postion: (5),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}//Baron#1500
let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
if(!roleyoutuber) {//Baron#1500
  message.guild.createRole({
    name: '⇁『youtuber 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (6),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
}
let roleactive = message.guild.roles.find(r => r.name === "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(!roleactive) {//Baron#1500
 message.guild.createRole({
  name: '⇁『ACTIVE 』‏‏༄  ❥',
  color: 'RANDOM',
  postion: (7),
  hoist: (true),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'Fortnite',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'playerunknowns',
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})//Baron#1500
message.guild.createRole({
  name: 'counter-strike',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'creative-destruction',//Baron#1500
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({//Baron#1500
  name: 'overwatch',
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'minecraft',//Baron#1500
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({//Baron#1500
  name: 'league-of-legends',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.channel.send(message.member + '**جارى انشاء الرتب**').then((m)=> {
  setTimeout(() => {//Baron#1500
    m.edit('**تم انشاء الرتب بنجاح**')
  }, 3000);//Baron#1500
})
}//Baron#1500
}
})//Baron#1500
Baron.on("message", message =>{
  let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
//Baron#1500
  let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
  if(message.content.startsWith(prefix + "channels")) {
if(!roles) return message.reply("**من فضلك قم بانشاء الرتب اولا اكتب $roles**")//Baron#1500
if(roles) {//Baron#1500
message.reply("**جارى انشاء الرومات**").then((c)=> {//Baron#1500
setTimeout(() => {
  c.edit("**تم انشاء الرومات بنجاح**")//Baron#1500
}, 10000);
});
