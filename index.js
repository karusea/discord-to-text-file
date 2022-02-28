
var fs = require('fs') 
require('dotenv').config()

var logger = fs.createWriteStream('dataset.txt', { // handles writting to the dataset text document
  flags: 'a' 
})

var ironylogger = fs.createWriteStream('untainted-irony-dataset.txt', { 
    flags: 'a' 
  })
  




function addtodataset(text){ 
    logger.write('\n'+text+'\n') 
    logger.write('<|endoftext|>') 
}




const Discord1 = require('discord.js-selfbot');
const client1 = new Discord1.Client();

client1.on('message', msg => {
if(!msg.author.bot){
    ironylogger.write('\n'+msg.content+'\n') 
    ironylogger.write('<|endoftext|>') 
    console.log(`IRONY PARSER #1: ${msg.content}`)
}
});



const Discord2 = require('discord.js-selfbot');
const client2 = new Discord2.Client();

client2.on('message', msg => {
if(!msg.author.bot){
    addtodataset(msg.content)
    console.log(`PARSER #2|${msg.guild.name} :` + msg.content)
}
});


const Discord3 = require('discord.js-selfbot');
const client3 = new Discord3.Client();

client3.on('message', msg => {
if(!msg.author.bot){
    addtodataset(msg.content)
    console.log(`PARSER #3|${msg.guild.name} :` + msg.content)
}
});


const Discord4 = require('discord.js-selfbot');
const client4 = new Discord4.Client();

client4.on('message', msg => {
if(!msg.author.bot){
    addtodataset(msg.content)
    console.log(`PARSER #4|${msg.guild.name} :` + msg.content)
}
});

const Discord5 = require('discord.js-selfbot');
const client5 = new Discord5.Client();

client5.on('message', msg => {
if(!msg.author.bot){
    addtodataset(msg.content)
    console.log(`PARSER #5|${msg.guild.name} :` + msg.content)
}
});

client1.login(process.env.TOKEN1); // Irony Parser (dogelore, okbr, boogtown)
client2.login(process.env.TOKEN2); // E-Girl Parser #1 (sesspool of weird people)
client3.login(process.env.TOKEN3); // E-Girl Parser #2 (sesspool of weird people)
client4.login(process.env.TOKEN4); // E-Girl Parser #3 (sesspool of weird people)
client5.login(process.env.TOKEN5); // Im not quite sure what servers this is in parser