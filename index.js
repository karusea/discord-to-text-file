
var fs = require('fs') 
require('dotenv').config()

var logger = fs.createWriteStream('otherdataset.txt', { 
  flags: 'a' 
})


function filter(text){ // filters out text because we don't want links or stuff like that
if(text.includes('https://')){return;}
if(text.startsWith('<:')){return;}
logger.write('\n'+text+'\n') 

} 


const Discord1 = require('discord.js-selfbot');
const client1 = new Discord1.Client();

client1.on('ready', () =>{
  console.log('ready to log !!')
})

client1.on('message', msg => {
if(!msg.author.bot){
  filter(msg.content)
  console.log(msg.content)
}
});

client1.login(process.env.TOKEN1) // login through .env
