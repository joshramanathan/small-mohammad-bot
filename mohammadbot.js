const { Client, GatewayIntentBits, Events, ActivityType } = require('discord.js');
const { OpenAI } = require('openai');
// import OpenAI from 'openai';
const config = require('./data/config.json');
const commandsList = require('./data/commands_list.js');
const Commands = require('./commands.js');
const utilities = require('./utilities.js');

const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] });

client.once(Events.ClientReady, () => {
    console.log(`${client.user.tag} is ready to insult`);
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "Big Mo (commands)",
            type: ActivityType.Watching
        }
    })
});

client.login(config.BOT_TOKEN);
Commands.client = client;

const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY
});

setInterval(() => {
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "Big Mo (commands)",
            type: ActivityType.Watching
        }
    })
}, 3600000);

client.on(Events.MessageCreate, async message => {
    if (message.channel.type == "dm") {
        await Commands.sendDm(message);
        return;
    }
    switch (message.author.id) {
        case config.BIGMO_ID:
            await Commands.sendGetOut(message);
            break;

        case config.CLIENT_ID:
            break; // modify to manage self-responses (e.g. blacklist)

        default: {
            if (message.channel.id == config.REALM_ID)
                utilities.handleMessage(message.author);

            cleanMessage = message.content.toLowerCase().trim().replace(/[^\w\s]/gi, "");

            if (commandsList.exactCommands.has(cleanMessage))
                await commandsList.exactCommands.get(cleanMessage)(message).catch(async (err) => await utilities.rejectionCallback(err, message));

            else {
                let commandFound = false;

                for (let key of commandsList.includesCommands.keys()) {
                    if (cleanMessage.includes(key)) {
                        await commandsList.includesCommands.get(key)(message).catch(async (err) => await utilities.rejectionCallback(err, message));
                        commandFound = true;
                        break;
                    }
                }

                if (!commandFound) {
                    try {
                        await Commands.gptRespond(message, openai);
                    } catch (err) {
                        message.channel.send("im broke i literally cant respond");
                    }
                }
            }  
        } 
    }
});