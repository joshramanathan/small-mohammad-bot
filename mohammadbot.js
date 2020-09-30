const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var languageSpeaking = 'English';
var nerdCounter = 600;
var smallMoCounter = 0;


client.login(config.BOT_TOKEN);


client.on('ready', () => {
    console.log(`${client.user.tag} is here now`)
    client.user.setActivity('Big Mohammad (commands)', ({type: "WATCHING"}))
})


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

    else if(message.content.toLowerCase().includes('nerd')) {
        if(!message.author.bot) {
            if(nerdCounter == 666) {
                message.channel.send('lolololol 666 = devil number arent you funny');
                nerdCounter++;
            }
            else if(nerdCounter == 1234) {
                message.channel.send('haha 1234 numbers go in order');
                message.channel.send('thats hilarious');
                nerdCounter++;
            }
            else if(nerdCounter == 1312) {
                message.channel.send('i love cops');
                nerdCounter++;
            }
            else if(nerdCounter == 42069) {
                message.channel.send('you were waiting for me to get to that number just so i would say it huh? well sucks to be you because ill never say the number and your once chance to tell me "haha weed sex number" will be gone forever loser');
                nerdCounter++;
            }
            else {
                message.channel.send('seriously stop calling me a nerd youve done that ' + nerdCounter + ' other times now');
                nerdCounter++;
            }
        } 
    }

    else if(message.content.toLowerCase().includes('small mohammad')) {

        if(languageSpeaking === 'English') {
            if(smallMoCounter % 10 == 0) {
                message.channel.send('shut up or i will publicly behead you');
            }
            else{
                message.channel.send('shut up');
            }
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
    else if(message.content.toLowerCase() === 'commands') {
        message.channel.send('what do you mean "commands" you cant order me around');
    }
    else if(message.content.toLowerCase() === 'what happened to you') {
        message.channel.send({embed: {
            color: 0,
            title: "__**changelog**__",
            fields: [{
                name: "**1.1.2 *(current version)***",
                value: "added changelog and bugfixes\nprioritized nerd response over all",
                inline: true
              },
              {
                name: "**1.1.1**",
                value: 'removed censoring from "nerd"'
              },
              {
                name: "**1.1.0**",
                value: "added nerd counter\nfixed bug where i would fall asleep and not respond ",
                inline: true
              },
              {
                name: "**1.0.6**",
                value: 'added response to being called a nerd'
              },
              {
                name: "**1.0.5**",
                value: 'added 3 new languages (hindi, asian, indian)'
              },
              {
                name: "**1.0.4**",
                value: 'added response to dms'
              },
              {
                name: "**1.0.3**",
                value: 'added 3 new languages (korean, german, and italian)'
              },
              {
                name: "**1.0.2**",
                value: 'added 5 new languages (spanish, french, romanian, chinese, japanese)\nremoved response to "no"',
                inline: true
              },
              {
                name: "**1.0.1**",
                value: 'added response to being called by name\nadded response to "no"',
                inline: true
              },
              {
                name: "**1.0.0**",
                value: "i was born and brought into the message board of big brother's visitation unit"
              }
            ],
        }});
    }
});