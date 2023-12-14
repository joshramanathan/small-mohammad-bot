const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./data/config.json');
const commandsList = require('./data/commands_list.js');
const Commands = require('./commands.js');
const utilities = require('./utilities.js');

client.once("ready", () => {
    console.log(`${client.user.tag} is ready to insult`);
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "Big Mo (commands)",
            type: "WATCHING"
        }
    })
});

client.login(config.BOT_TOKEN);
Commands.client = client;

setInterval(() => {client.user.setActivity({name: "Big Mo (commands)", type: "WATCHING"})}, 3600000);

client.on("message", async message => {
    if (message.channel.type == "dm") {
        Commands.sendDm(message);
        return;
    }
    switch (message.author.id) {
        case config.BIGMO_ID:
            Commands.sendGetOut(message);
            break;

        case config.CLIENT_ID:
            break; // modify to manage self-responses (e.g. blacklist)

        default: {
            if (message.channel.id == config.REALM_ID) utilities.handleMessage(message.author);
            cleanMessage = message.content.toLowerCase().trim().replace(/[^\w\s]/gi, "");
            if (commandsList.exactCommands.has(cleanMessage)) {
                commandsList.exactCommands.get(cleanMessage)(message).catch(async (err) => await utilities.rejectionCallback(err, message));
            } else {
                for (let key of commandsList.includesCommands.keys()) {
                    if (cleanMessage.includes(key)) {
                        await commandsList.includesCommands.get(key)(message).catch(async (err) => await utilities.rejectionCallback(err, message));
                        break;
                    }
                }
            }  
        } 
    }
});