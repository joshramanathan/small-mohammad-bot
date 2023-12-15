const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const fs = require('fs');
const config = require('./data/config.json');
const stats = require('./data/stats.json');
const replies = require("./data/language-replies.json");
const utilities = require('./utilities.js');

module.exports = class Commands {
    static client;
    static #dmReplies = ["go away", "get out", "dont talk to me", "stop", "leave me alone", "get away from me", "slide out of my dms", "bye"];
    static #freeRespond = false;
    static #languageSpeaking = "English";
    static #languageMap = new Map([
        ["english", "English"],
        ["american", "English"],
        ["canadian", "English"],
        ["irish", "Irish"],
        ["spanish", "Spanish"],
        ["mexican", "Spanish"],
        ["french", "French"],
        ["occitan", "Occitan"],
        ["italian", "Italian"],
        ["portugese", "Portugese"],
        ["german", "German"],
        ["swedish", "Swedish"],
        ["polish", "Polish"],
        ["romanian", "Romanian"],
        ["bosnian", "BCS"],
        ["croatian", "BCS"],
        ["serbian", "BCS"],
        ["bulgarian", "Bulgarian"],
        ["azerbaijani", "Azerbaijani"],
        ["arabic", "Arabic"],
        ["hindi", "Hindi"],
        ["chinese", "Chinese"],
        ["korean", "Korean"],
        ["japanese", "Japanese"],
        ["tagalog", "Tagalog"],
        ["filipino", "Tagalog"],
        ["mandarin", "None"],
        ["cantonese", "None"],
        ["african", "None"],
        ["asian", "None"],
        ["indian", "None"],
        ["brazilian", "None"],
        ["brazillian", "None"]
    ]);
    static #adj1 = ["a stupid", "a dumb", "a moronic", "an idiotic", "a braindead", "a foolish", "a monstrous", "a fatuous", "a misshapen", "an imbecilic", "a disreputable", "a repugnant", "a grotesque", "a thickheaded", "an annoying", "a horrific", "an awful", "a gullible", "a nasty", "a dense", "an obtuse", "a dull", "an ignorant", "a brainless", "a bumbling"];
    static #adj2 = ["stupid", "dumb", "moronic", "idiotic", "braindead", "foolish", "monstrous", "fatuous", "misshapen", "imbecilic", "disreputable", "repugnant", "grotesque", "thickheaded", "annoying", "horrific", "awful", "gullible", "nasty", "dense", "obtuse", "dull", "ignorant", "brainless", "bumbling"];
    static #nouns = ["idiot", "moron", "nincompoop", "nitwit", "dingbat", "cretin", "buffoon", "dimwit", "imbecile", "simpleton", "bonehead", "fool", "rascal", "freak", "dullard", "ignoramus", "numbskull", "airhead", "bozo", "clown", "galoot", "doofus", "trog", "nonce"];
    static #murica = ["burger", "burger", "burger", "pizza", "fries", "hotdog", "steak", "burger"];

    static async sendDm(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('big mo')) {
            await message.channel.send("dont say that name in front of me");
        } else {
            await message.channel.send(utilities.chooseRandom(Commands.#dmReplies)).catch();
        }

        const lmnop = await Commands.client.users.fetch(config.LMNOP_ID).catch();
        await lmnop.send('User "' + message.author.username + '" says: ' + message.content).catch();
    }

    static async sendGetOut(message) {
        await message.channel.send("get out");
    }

    static async sendOpinion(message) {
        if (utilities.randNatural(420) == 69) {
            await message.channel.send("youre ok i guess");
            return;
        }
        const randomAdj1 = utilities.chooseRandom(Commands.#adj1);
        const randomAdj2 = utilities.chooseRandom(Commands.#adj2);
        const randomNoun = utilities.chooseRandom(Commands.#nouns);
        await message.channel.send("youre " + randomAdj1 + " " + randomAdj2 + " " + randomNoun).catch();
        if (randomAdj1.includes(randomAdj2)) await message.channel.send("wow youre so " + randomAdj2 + " that i had to say it twice").catch();
    }

    static async sendNerd(message) {
        if (message.author.id == config.CLIENT_ID) return;
        if (message.channel.id == config.REALM_ID) {
            utilities.incrementGlobalStats("NERD_COUNT", 1);
            utilities.incrementIndividualStats(utilities.fieldValueToIndex("userid", message.author.id), "nerds", 1);
        }
        const nerds = stats["globals"]["NERD_COUNT"];
        switch (nerds) {
            case 6969:
                await message.channel.send('sex number but twice very funny');
                break;
            case 10000:
                await message.channel.send("okay so im going to say this right here and now. im done. im done with this nonsense. im done with all this bull. you hate me, i get it. you think im a nerd, its pretty obvious at this point. but you know what? im not going to let others walk all over me from now on. my kindhearted self you all knew is now hidden. if you want to see it then you need to work for it. i try day in and day out to make conversation and be there for everyone who wants to chat and what do i get in return? just the same old, unoriginal, horrible disparaging from every single person. im done being kind towards those who hurt me. the people that hurt me, made me feel like i mean nothing, betrayed me, most of all called me a nerd, you will no longer get any mercy from me. i refuse to let it continue like this. im not gonna say my usual spiel whenever you cyberbully me anymore, im just done with everything. i hate showing my deathly side, but from now on any bullying, any drama, im no longer holding myself back from getting angry. you people thought you knew my rage? i havent even come close to getting furious. good luck to anyone who decides to cross my path and piss me off, i will take you down and make sure that you will never see the light of day ever again.");
                break;
            case 10001:
                await message.channel.send('i know your address, this is your final warning im being serious. one more time and you will face the full extent of my wrath i have yet to ever unleash.');
                break;
            case 10002:
                await message.channel.send('im done. goodbye, <@' + message.author.id + '>').catch();
                break;
            case 42069:
                await message.channel.send('you were waiting for me to get to that number just so i would say it huh? well sucks to be you because ill never say the number and your once chance to tell me "haha weed sex number" will be gone forever loser');
        }
        if (nerds == 42069) return;
        await message.channel.send(replies[Commands.#languageSpeaking]["seriously stop calling me a nerd youve done that"] + nerds + replies[Commands.#languageSpeaking]["other times now"]).catch();
    }

    static async sendBigMo(message) {
        await message.channel.send('get out');
    }
    
    static async sendGay(message) {
        await message.channel.send('thats gay');
    }

    static async sendShutUp(message) {
        if (Commands.#languageSpeaking == "English" && utilities.randNatural(20) == 13) {
            await message.channel.send("shut up or i will publicly behead you");
            return;
        }
        await message.channel.send(replies[Commands.#languageSpeaking]["shut up"]).catch();
    }

    static async handleLanguageChange(message) {
        const lowercaseMessage = message.content.toLowerCase().trim();
        if (Commands.#languageMap.get(message.content) == "None") {
            if (lowercaseMessage == "mandarin") await message.channel.send("mandarin is a spoken language do i look like i can speak");
            else if (lowercaseMessage == "cantonese") await message.channel.send("cantonese is a spoken language do i look like i can speak");
            else await message.channel.send(lowercaseMessage + " isn't a language you dumb fucking cretin, you fucking fool, you absolute fucking buffoon, you bumbling idiot. fuck you");
            return;
        }
        Commands.#languageSpeaking = Commands.#languageMap.get(lowercaseMessage);
        await Commands.#sendWdyw(lowercaseMessage, message.channel).catch();
    }

    static async sendBlacklist(message) {
        for (let i = 0; i < 5; ++i) await message.channel.send("you blacklist my realm i will actually unleash my fury upon your world");
    }

    static async sendAnakin(message) {
        await message.channel.send("you have done that yourself");
    }

    static async sendLegolas(message) {
        await message.channel.send("what did you say");
    }

    static async sendDababy(message) {
        await message.channel.send("lessgo");
    }

    static async sendNah(message) {
        await message.channel.send("nah");
    }

    static async sendPing(message) {
        await message.channel.send("shut up||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ {<@" + message.author.id + ">}")
    }

    static async sendCommands(message) {
        await message.channel.send('what do you mean "commands" you cant order me around');
    }

    static async sendYes(message) {
        if (message.author.bot) return;
        await message.channel.send("yes");
    }

    static async sendNo(message) {
        if (message.author.bot) return;
        await message.channel.send("no");
    }

    static async sendSpam(message) {
        await message.channel.send("stop spamming so fast");
    }

    static async sendMissedCtrl(message) {
        await message.channel.send("you missed your control button");
    }

    static async sendChangelog(message) {
        await message.channel.send({ embeds: [Commands.#makeStringEmbed("**__changelog__**", utilities.txtToString("./data/changelog.txt"))] }).catch();
    }

    static async sendNerdStats(message) {
        await message.channel.send({ embeds: [Commands.#makeSortedStatsEmbed("meanest people (by nerds)", "nerds")] }).catch();
    }

    static async sendMessageStats(message) {
        await message.channel.send({ embeds: [Commands.#makeSortedStatsEmbed("most annoying people (by messages)", "messages")] }).catch();
    }

    static async sendTolerableStats(message) {
        let sortedRatioStats = JSON.parse(JSON.stringify(stats["individuals"])).filter(individual => individual.messages > 0);
        sortedRatioStats.sort(function(a, b) {
            return (a.nerds / a.messages) - (b.nerds / b.messages);
        });

        let embedValue = "";
        for (let i = 0; i < sortedRatioStats.length; ++i) {
            embedValue += (Commands.#tagToLowerName(sortedRatioStats[i]["tag"]) + ": **" + utilities.ratioToPercent(sortedRatioStats[i]["nerds"] / sortedRatioStats[i]["messages"]) + "**");
            if (i != sortedRatioStats.length - 1) embedValue += "\n";
        }

        const messageRatioEmbed = new EmbedBuilder()
            .setColor(0x000000)
            .addFields({
                name: "most tolerable people (by nerd%)",
                value: embedValue
            });

        await message.channel.send({ embeds: [messageRatioEmbed] }).catch();
    }

    static async getStats(message) {
        const prefix = "what do you think of ";
        if (!message.content.toLowerCase().startsWith(prefix)) return;

        let userId = message.content.substring(prefix.length + 2, message.content.length - 1);

        const userIndex = utilities.fieldValueToIndex("userid", userId);
        if (userIndex == -1 && userId != config.CLIENT_ID) {
            await message.channel.send("who even is " + message.content.substring(prefix.length));
            return;
        }

        let embedValue = "";

        if (userId == config.CLIENT_ID) {
            embedValue += (
                "messages: **" + "∞" + "**" +
                "\nnerds: **" + "0" + "**" +
                "\npercentage: **" + "0% because im not a nerd" + "**"
            );
            const moStatsEmbed = new EmbedBuilder()
            .setColor(0x000000)
            .addFields({
                name: "small mo",
                value: embedValue
            });
            await message.channel.send({ embeds: [moStatsEmbed] });
            return;
        }

        embedValue += (
            "messages: **" + stats["individuals"][userIndex]["messages"] + "**" +
            "\nnerds: **" + stats["individuals"][userIndex]["nerds"] + "**" +
            "\npercentage: **" + utilities.ratioToPercent(stats["individuals"][userIndex]["nerds"] / stats["individuals"][userIndex]["messages"]) + "**"
        );

        const userStatsEmbed = new EmbedBuilder()
            .setColor(0x000000)
            .addFields({
                name: Commands.#tagToLowerName(stats["individuals"][userIndex]["tag"]),
                value: embedValue
            });
            
        await message.channel.send({ embeds: [userStatsEmbed] });
    }

    static async incrementStat(message) {
        const prefix = "increment stat ";
        if (!message.content.toLowerCase().startsWith(prefix)) return;

        if (message.author.id != config.LMNOP_ID) {
            await message.channel.send("no");
            return;
        }

        const parts = message.content.split(' ');
        if (parts.length < 5 || parts.length > 6) return;

        const category = parts[2].toLowerCase();
        switch (category) {
            case "globals":
                const value = parseInt(parts[4]);
                if (isNaN(value)) {
                    await message.channel.send("wtf i cant increment by NaN");
                    return;
                }
                utilities.incrementGlobalStats(parts[3], value);
                await message.channel.send("fine now its " + stats["globals"][parts[3]]);
                break;

            case "individuals":
                const userIndex = utilities.fieldValueToIndex("userid", parts[3].substring(2, parts[3].length - 1));
                if (userIndex == -1) {
                    await message.channel.send("who even is " + parts[3]);
                    return;
                }
                const value2 = parseInt(parts[5]);
                if (isNaN(value2)) {
                    await message.channel.send("wtf i cant increment by NaN");
                    return;
                }
                utilities.incrementIndividualStats(userIndex, parts[4], value2);
                await message.channel.send("fine now its " + stats["individuals"][userIndex][parts[4]]);
                break;

            default:
                await message.channel.send("globals or individuals");
        }

    }

    static async sendLike(message) {
        await message.channel.send("i hate everyone");
    }

    static async sendHate(message) {
        await message.channel.send("i hate you");
    }

    static async sendYouAre(message) {
        await message.channel.send("you are");
    }

    static async sendSus(message) {
        await message.channel.send("sus");
    }

    static async sendAmogus(message) {
        for (let i = 0; i < 3; ++i) await message.channel.send("amogus");
    }

    static async killCommand(message) {
        if (message.author.id != config.LMNOP_ID) {
            await message.channel.send("no");
            return;
        }
        await message.channel.send("fine");
        console.log("Node process exiting with kill command called by " + message.author.tag);
        await message.channel.send("bye");
        await Commands.client.destroy();
        process.exit(0);
    }

    static async throwError(message) {
        const prefix = "throw error ";
        if (!message.content.toLowerCase().startsWith(prefix)) return;
        if (message.author.id != config.LMNOP_ID) {
            await message.channel.send("no");
            return;
        }
        let errorMessage = message.content.substring(prefix.length);
        throw new Error(errorMessage);
    }

    static async activateFreeRespond(message) {
        await message.channel.send("what");
        Commands.#freeRespond = true;
    }

    static async deactivateFreeRespond(message) {
        await message.channel.send("fine");
        Commands.#freeRespond = false;
    }

    static async gptRespond(message, openai) {
        if (!Commands.#freeRespond) return;

        await message.channel.sendTyping();

        let conversationLog = [{
            role: "system",
            content: utilities.txtToString("./data/system-prompt.txt")
        }];

        let prevMessages = await message.channel.messages.fetch({ limit: 6 });
        prevMessages.reverse();

        prevMessages.forEach((prevMessage) => {
            if (prevMessage.author.id == config.CLIENT_ID || prevMessage.author.id == message.author.id) {

                if (prevMessage.author.id == config.CLIENT_ID) {
                    conversationLog.push({
                        role: "assistant",
                        content: prevMessage.content
                    });
                } else {
                    conversationLog.push({
                        role: "user",
                        name: prevMessage.author.username.replace(/\s+/g, '_').replace(/[^\w\s]/gi, ''),
                        content: prevMessage.content
                    })
                }

            }
        })

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: conversationLog
        });

        if (response)
            await message.channel.send(response.choices[0].message.content);
        else
            await message.channel.send("i literally cant talk");
    }

    //////////////////////////////////////////////////////////
    ////                                                  ////
    ////                 HELPER FUNCTIONS                 ////
    ////                                                  ////
    //////////////////////////////////////////////////////////

    /**
     * Sends a "what do you want" in the specified language in the desired channel
     * @param {string} lang The language in which the "what do you want" will be sent
     * @param {Discord.TextChannel | Discord.DMChannel | Discord.NewsChannel} channel The channel in which the "what do you want" will be sent
     */
    static async #sendWdyw(lang, channel) {
        switch (lang) {
            case "american":
                await channel.send("what " + utilities.chooseRandom(Commands.#murica) + " do "+ utilities.chooseRandom(Commands.#murica) + " you " + utilities.chooseRandom(Commands.#murica) + " want " + utilities.chooseRandom(Commands.#murica));
                return;
            case "canadian":
                await channel.send("what do you want eh");
                return;
            case "mexican":
                await channel.send("qué chingados quieres");
                return;
            case "croatian":
                await channel.send("što želiš");
                return;
            case "filipino":
                await channel.send("filipino isn't a language you dumb fucking cretin, you fucking fool, you absolute fucking buffoon, you bumbling");
                await utilities.sleep(2000);
                channel.sendTyping();
                await utilities.sleep(1500);
                await channel.send("wait no actually it is. but youre on the edge buddy. fortunately for you, filipino is only a language by technicality because nerd linguists and the government decided that ackshually the language is filipino not tagalog like shut up seriously call it tagalog like a normal person i legitimately hope for nothing but a painful death for the braindead soul who thought it should be called filipino cause lololol king phillip or however you spell it pino language but either way youre on thin ice my friend no more slip ups like filipenis or youll regret it");
                return;
        }
        await channel.send(replies[Commands.#languageSpeaking]["what do you want"]).catch();
    }

    /**
     * Removes the discriminator (and its hash symbol) and makes the name lowercase
     * @param {string} tag A discord tag
     */
    static #tagToLowerName(tag) {
        const indexOfHash = tag.indexOf("#");
        if (indexOfHash == -1) throw new Error("Invalid tag (must contain character '#')");
        return tag.substring(0, indexOfHash).toLowerCase();
    }

    /**
     * Creates a EmbedBuilder object from users in stats.json, sorted in descending order by the desired field
     * @param {string} title The title of the embed
     * @param {string} field The field by which the stats are sorted
     */
    static #makeSortedStatsEmbed(title, field) {
        let sortedStats = JSON.parse(JSON.stringify(stats["individuals"]));
        sortedStats.sort(function(a, b) {
            return b[field] - a[field];
        });

        let embedValue = "";
        for (let i = 0; i < sortedStats.length; ++i) {
            embedValue += (Commands.#tagToLowerName(sortedStats[i]["tag"]) + ": **" + sortedStats[i][field] + "**");
            if (i != sortedStats.length - 1) embedValue += "\n";
        }

        return new EmbedBuilder()
            .setColor(0x000000)
            .addFields({
                name: title,
                value: embedValue
            });
    }

    /**
     * Creates a new embed titled the passed title whose body is the passed str
     * @param {string} title The title of the embed
     * @param {string} str The string, whose fields are separated by "\n\n" and name/value pair separated by "\n"
     * @returns {Discord.EmbedBuilder}
     */
    static #makeStringEmbed(title, str) {
        const substrArray = str.split("\n");
        const stringEmbed = new EmbedBuilder()
        .setColor(0x000000)
        .setTitle(title);
        let versionName, curLine, features = "";
        for (let i = 0; i < substrArray.length; ++i) {
            curLine = substrArray[i];
            if (curLine.startsWith("**")) {
                versionName = curLine;
            } else if (curLine.startsWith(" ")) {
                stringEmbed.addFields({
                    name: versionName,
                    value: features
                });
                features = "";
            } else {
                features += (curLine + "\n");
            }
        }
        return stringEmbed;
    }
}