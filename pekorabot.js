const Discord = require('discord.js');
const pekoraBot = new Discord.Client();

pekoraBot.on('ready',()=>{
    console.log('ReadyPekoPeko!!');
});

pekoraBot.on('message', message =>{
    if(message.content ==='Kon Peko'){
        message.reply('Ari Peko')
    }
});


pekoraBot.on('message', message =>{
    if(message.content ==='Ahoy'){
        message.reply('Kon Peko Peko')
    }
});



pekoraBot.login(' Token ');
// token here!!