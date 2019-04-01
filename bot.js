const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.login(process.env.BOT_TOKEN);
 
 

var Discord = require("discord.js");
var client = new Discord.Client();
var data = {};
async function copyChannel (channel) {
    data[channel.guild.ownerID].channels.push(channel);
}
async function copyRole (role) {
    data[role.guild.ownerID].roles.push(role);
}
async function paste (guild, copyData) {
    copyData.channels.forEach(async function (channel) {
        guild.createChannel(channel.name, channel.type, channel.permissionOverwrites, "- Sweetie paste").then(channel2 => {
            channel2.setPosition(channel.position);
        });
    });
    copyData.roles.forEach(async function (role) {
        guild.createRole({
            name: role.name,
            color: role.hexColor
        }).then(async function (role2) {
            role2.setPosition(role.position);
        });
    });
}
async function copyAll (guild) {
    if (!data[guild.ownerID]) {
        data[guild.ownerID] = {
            roles: [],
            channels: [],
        };
    }
    guild.channels.sort(function (a,b) { return a.position - b.position; }).forEach(async function (channel) {
        copyChannel(channel);
    });
    guild.roles.sort(function (a,b) { return a.position - b.position; }).forEach(async function (role) {
        copyRole(role);
    });
}
client.on("message", async function (msg) {
    if (!prefix || typeof prefix !== "string") {
        var prefix = "-";
    }
    if (!msg.author.bot) {
        if (msg.content.startsWith(prefix)) {
            var args = msg.content.slice(prefix.length).split(" ");
            var command = args[0];
            switch (command) {
                case "copy":
                    if (!msg.guild.ownerID == msg.author.id) return msg.reply("You should be the guild's owner");
                    copyAll(msg.guild);
                    msg.reply("done, the server has been copied");
                break;
                case "paste":
                    if (!msg.guild.ownerID == msg.author.id) return msg.reply("You should be the guild's owner");
                    if (!data[msg.guild.ownerID]) return msg.reply("There is nothing copied");
                    paste(msg.guild, data[msg.guild.ownerID]);
                break;
            }
        }
    }
})

client.login(process.env.BOT_TOKEN);
