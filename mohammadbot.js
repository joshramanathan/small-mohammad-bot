const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzU1OTg1MTkwNDU4NzUzMTY1.X2LQEg.TgmvkbRK-FDcH_Jqe65QuBXDW04';
var languageSpeaking = 'English';
var nerdCounter = 0;


client.login(token);

/*
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "Big Mohammad",
            type: "WATCHING"
        }
    });
});
*/

//cd C:\Users\Marie\Desktop\Code\discord-bot
//pm2 start mohammadbot.js --watch

client.on('message', message => {

    if(message.channel.type == 'dm') {
        var replies = ["go away", "get out", "dont talk to me", "stop", "leave me alone", "get away from me", "slide out of my dms"];
        var random = Math.floor(Math.random() * 7);
        if(message.content.toLowerCase() !== 'go away'){
            if(message.content.toLowerCase() !== 'get out'){
                if(message.content.toLowerCase() !== 'dont talk to me'){
                    if(message.content.toLowerCase() !== 'stop'){
                        if(message.content.toLowerCase() !== 'leave me alone'){
                            if(message.content.toLowerCase() !== 'get away from me'){
                                if(message.content.toLowerCase() !== 'no'){
                                    if(message.content.toLowerCase() !== 'slide out of my dms'){
                                        if(message.content.toLowerCase() !== 'dont say that name in front of me'){
                                            if(message.content.toLowerCase().includes('big mohammad')){
                                                message.channel.send("dont say that name in front of me");
                                            }
                                            else {
                                                message.channel.send(replies[random]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    else if(message.content.toLowerCase().includes('small mohammad')) {

        if(languageSpeaking === 'English') {
            message.channel.send('shut up');
        }
        else if(languageSpeaking === 'Spanish') {
            message.channel.send('cállate');
        }
        else if(languageSpeaking === 'French') {
            message.channel.send('ferme-la');
        }
        else if(languageSpeaking === 'Romanian') {
            message.channel.send('lasă vorba');
        }
        else if(languageSpeaking === 'Chinese') {
            message.channel.send('闭嘴');
        }
        else if(languageSpeaking === 'Japanese') {
            message.channel.send('うるせえよ');
        }
        else if(languageSpeaking === 'Korean') {
            message.channel.send('시끄러워');
        }
        else if(languageSpeaking === 'German') {
            message.channel.send('halts maul');
        }
        else if(languageSpeaking === 'Italian') {
            message.channel.send('stai zitto');
        }
        else if(languageSpeaking === 'Hindi') {
            message.channel.send('चुप रहो');
        }
    }

    else if(message.content.toLowerCase().includes('nerd')) {
        message.channel.send('seriously stop calling me a n*rd youve done that ' + nerdCounter + ' other times now');
        nerdCounter++;
    }

    else if(message.content.toLowerCase() === 'english') {
        message.channel.send('what do you want');
        languageSpeaking = 'English';
    }

    else if(message.content.toLowerCase() === 'spanish') {
        message.channel.send('qué coño quieres');
        languageSpeaking = 'Spanish';
    }

    else if(message.content.toLowerCase() === 'french') {
        message.channel.send('tu veux quoi');
        languageSpeaking = 'French';
    }

    else if(message.content.toLowerCase() === 'romanian') {
        message.channel.send('ce vrei');
        languageSpeaking = 'Romanian';
    }

    else if(message.content.toLowerCase() === 'chinese') {
        message.channel.send('你想我干嘛');
        languageSpeaking = 'Chinese';
    }
    
    else if(message.content.toLowerCase() === 'japanese') {
        message.channel.send('何欲しいか');
        languageSpeaking = 'Japanese';
    }

    else if(message.content.toLowerCase() === 'korean') {
        message.channel.send('뭘 바래');
        languageSpeaking = 'Korean';
    }

    else if(message.content.toLowerCase() === 'german') {
        message.channel.send('was willst du');
        languageSpeaking = 'German';
    }

    else if(message.content.toLowerCase() === 'italian') {
        message.channel.send('cosa vuoi');
        languageSpeaking = 'Italian';
    }

    else if(message.content.toLowerCase() === 'hindi') {
        message.channel.send('तुम क्या चाहते हो');
        languageSpeaking = 'Hindi';
    }

    else if(message.content.toLowerCase() === 'asian') {
        message.channel.send('asian isnt a language you dumb fucking cretin, you fucking fool absolute fucking buffoon, you bumbling idiot. fuck you');
    }

    else if(message.content.toLowerCase() === 'indian') {
        message.channel.send('indian isnt a language you dumb fucking cretin, you fucking fool, you absolute fucking buffoon, you bumbling idiot. fuck you');
    }
});