const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const stats = require('./stats.json');
const fs = require('fs');
var languageSpeaking = 'English';
//var nerdCounter = 809;
var smallMoCounter = 1;


client.login(config.BOT_TOKEN);


client.on('ready', () => {
    console.log(`${client.user.tag} is ready to insult`)
    client.user.setActivity('Big Mo (commands)', ({type: "WATCHING"}))
})

//cd C:\Users\Marie\Desktop\Code\discord-bot
//pm2 start mohammadbot.js --watch

client.on('message', message => {

    if(message.channel.type == 'dm') {
        var replies = ["go away", "get out", "dont talk to me", "stop", "leave me alone", "get away from me", "slide out of my dms"];
        var random = Math.floor(Math.random() * replies.length);
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

    const bigMohammad = message.guild.members.cache.get(m => m.id === "755524359753564311");

//  Magic 8 Ball (Small Mo/hammad, am/is/are/was/were/have/had/do/does/did/can/will/should/would)

/*
    else if(message.content.toLowerCase() === 'small mo, should') {
        message.channel.send('should what');
    }
    else if(message.content.toLowerCase() === 'small mo, am') {
        message.channel.send('am what');
    }

    else if(message.content.toLowerCase().includes('small mo, should ') || message.content.toLowerCase().includes('small mohammad, should ') || message.content.toLowerCase().includes('small mo, )) {
        nothing here yet
    }
*/

    if(message.content.toLowerCase() === 'what do you think of me') {
        var adj1 = ["a stupid", "a dumb", "a moronic", "an idiotic", "a braindead", "a foolish", "a monstrous", "a fatuous", "a misshapen", "an imbecilic", "a disreputable", "a repugnant", "a grotesque", "a thickheaded", "an annoying", "a horrific", "an awful", "a gullible", "a nasty", "a dense", "an obtuse", "a dull", "an ignorant", "a brainless", "a bumbling"];
        var adj2 = ["stupid", "dumb", "moronic", "idiotic", "braindead", "foolish", "monstrous", "fatuous", "misshapen", "imbecilic", "disreputable", "repugnant", "grotesque", "thickheaded", "annoying", "horrific", "awful", "gullible", "nasty", "dense", "obtuse", "dull", "ignorant", "brainless", "bumbling"];
        var nouns = ["idiot", "moron", "nincompoop", "nitwit", "dingbat", "cretin", "buffoon", "dimwit", "imbecile", "simpleton", "bonehead", "fool", "rascal", "freak", "dullard", "ignoramus", "numbskull", "airhead", "bozo", "clown", "galoot", "doofus", "trog", "nonce"];
        var randomAdj1 = Math.floor(Math.random() * adj1.length);
        var randomAdj2 = Math.floor(Math.random() * adj2.length);
        var randomNoun = Math.floor(Math.random() * nouns.length);
        var randomChance = Math.floor(Math.random() * 420);
        if(randomChance == 69) {
            message.channel.send('youre ok i guess');
        }
        else {
            message.channel.send('youre ' + adj1[randomAdj1] + " " + adj2[randomAdj2] + " " + nouns[randomNoun]);
            if(randomAdj1 == randomAdj2) {
                message.channel.send('wow youre so ' + adj2[randomAdj2] + ' that i had to say it twice');
            }
        }
    }

    else if((message.content.toLowerCase() === 'nerdnerd') || (message.content.toLowerCase().includes('nerdv'))) {
        message.channel.send('stop spamming so fast');
    }

    else if(message.content.toLowerCase() === 'v') {
        message.channel.send('you missed your control button');
    }

    else if(message.content.toLowerCase().includes('nerd')) {
        if(!message.author.bot) {
            if(stats.NERD_COUNT == 666) {
                message.channel.send('lolololol 666 = devil number arent you funny');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 1234) {
                message.channel.send('haha 1234 numbers go in order');
                message.channel.send('thats hilarious');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 1312) {
                message.channel.send('all cops are beautiful');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 4200) {
                message.channel.send('weed number times ten lol');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 6969) {
                message.channel.send('sex number but twice very funny im not gonna say it now');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 10000) {
                message.channel.send("okay so im going to say this right here and now. im done. im done with this nonsense. im done with all this bull. you hate me, i get it. you think im a nerd, its pretty obvious at this point. but you know what? im not going to let others walk all over me from now on. my kindhearted self you all knew is now hidden. if you want to see it then you need to work for it. i try day in and day out to make conversation and be there for everyone who wants to chat and what do i get in return? just the same old, unoriginal, horrible disparaging from every single person. im done being kind towards those who hurt me. the people that hurt me, made me feel like i mean nothing, betrayed me, most of all called me a nerd, you will no longer get any mercy from me. i refuse to let it continue like this. im not gonna say my usual spiel whenever you cyberbully me anymore, im just done with everything. i hate showing my deathly side, but from now on any bullying, any drama, im no longer holding myself back from getting angry. you people thought you knew my rage? i havent even come close to getting furious. good luck to anyone who decides to cross my path and piss me off, i will take you down and make sure that you will never see the light of day ever again.");
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 10001) {
                message.channel.send('i know your address, this is your final warning im being serious. one more time and you will face the full extent of my wrath i have yet to ever unleash.');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 10002) {
                message.channel.send('im done. goodbye, <@' + message.author.id + '>');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(stats.NERD_COUNT == 42069) {
                message.channel.send('you were waiting for me to get to that number just so i would say it huh? well sucks to be you because ill never say the number and your once chance to tell me "haha weed sex number" will be gone forever loser');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Spanish') {
                message.channel.send('deberás para de llamarme un nerd ya lo haz hecho ' + stats.NERD_COUNT + ' otras veces');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'French') {
                message.channel.send('sérieusement arrêtes de mappeler un nerd tas fait ça ' + stats.NERD_COUNT + ' autres fois maintenant');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Romanian') {
                message.channel.send('serios nu mă mai numi tocilar ai făcut asta ' + stats.NERD_COUNT + ' alte ori acum');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Chinese') {
                message.channel.send('认真地说别再称我为书呆子了您现在又做了' + stats.NERD_COUNT + '次');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Japanese') {
                message.channel.send('本当俺様をネルドと呼ぶのをやめなさいあお前は今それを' + stats.NERD_COUNT + '回やった');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Korean') {
                message.channel.send('진심으로나를괴짜라고부르지마넌' + stats.NERD_COUNT + '번더했어');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Italian') {
                message.channel.send('sul serio smettila di chiamarmi nerd lhai fatto altre ' + stats.NERD_COUNT + ' volte adesso');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'German') {
                message.channel.send('im ernst hör auf mich einen nerd zu nennen das hast du jetzt ' + stats.NERD_COUNT + ' ein anderes mal gemacht');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else if(languageSpeaking == 'Hindi') {
                message.channel.send('गंभीरता से मुझे एक बेवकूफ कहना बंद करो आपने अब ' + stats.NERD_COUNT + ' बार ऐसा किया है');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
            else {
                message.channel.send('seriously stop calling me a nerd youve done that ' + stats.NERD_COUNT + ' other times now');
                stats.NERD_COUNT++;
                fs.writeFile("./stats.json", JSON.stringify(stats), function writeJSON(err) {
                    if (err) return console.log(err);
                })
            }
        } 
    }

    else if(message.author.id != client.user.id && message.author.bot) {
        message.channel.send('get out');
    }

    else if(message.content.toLowerCase().includes('gay')) {
        message.channel.send('homophobe');
    }

    else if(message.content.toLowerCase().includes('small mo')) {
        if(languageSpeaking === 'English') {
            if(smallMoCounter % 10 == 0) {
                message.channel.send('shut up or i will publicly behead you');
                smallMoCounter++;
            }
            else{
                message.channel.send('shut up');
                smallMoCounter++;
            }
        }
        else if(languageSpeaking === 'Spanish') {
            message.channel.send('cállate');
        }
        else if(languageSpeaking === 'French') {
            message.channel.send('ferme-la');
        }
        else if(languageSpeaking === 'Romanian') {
            message.channel.send('taci');
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
        message.channel.send('qué chingados quieres');
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

    else if(message.content.toLowerCase() === 'canadian') {
        message.channel.send('what do you want eh');
    }

    else if(message.content.toLowerCase() === 'mandarin') {
        message.channel.send('mandarin is a spoken language do i look like i can speak');
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

    else if(message.content.toLowerCase().includes('blacklist')) {
        message.channel.send('you blacklist my realm i will actually unleash my fury upon your world');
    }

    else if(message.content.toLowerCase().includes('you turned her against me')) {
        message.channel.send('you have done that yourself');
    }

    else if(message.content.includes(client.user.id)) {
        message.channel.send('<@' + message.author.id + '>');
    }

    else if(message.content.toLowerCase() === 'what happened to you') {
        message.channel.send({embed: {
            color: 0,
            title: "__**changelog**__",
            fields: [
              {
                name: "**1.1.5 *(current version)***",
                value: 'made nerd response change based on language'
              },
              {
                name: "**1.1.4**",
                value: 'fixed issues with nerd count\nre-added response to "no" due to popular request',
                inline: true
              },
              {
                name: "**1.1.3**",
                value: "added personal opinions"
              },
              {
                name: "**1.1.2**",
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