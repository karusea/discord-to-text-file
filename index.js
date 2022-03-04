
var fs = require('fs') 
require('dotenv').config()

var logger = fs.createWriteStream('otherdataset.txt', { 
  flags: 'a' 
})

var useridLogger = fs.createWriteStream('userids.txt', { 
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
  console.log(`${msg.guild.name} - by [ ${msg.author.username} (${msg.author.id}) ] - ${msg.content}`)

  if(msg.guild.id === process.env.SERVER_TO_LOG_FROM){ // special circumstances

    fs.readFile('./userids.txt', 'utf8', function (err,data) {

    let ids = data.split(',')

    if (ids.indexOf(msg.author.id) == -1) {
      useridLogger.write(msg.author.id + ',')
      console.log(`Updated userids.txt! (${msg.author.id})`)
    }

  }) // fs readfile thing

} // if from specific server if statement

} // no bot if statement
}); 

client1.login(process.env.TOKEN1) // login through .env
