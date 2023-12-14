const stats = require('./data/stats.json');
const fs = require('fs');

/**
 * Increases a global field by desired amount and writes change to stats.json
 * @param {string} key The key of the field that should be increased
 * @param {int} step The step by which the field is increased
 */
module.exports.incrementGlobalStats = (key, step) => {
    stats["globals"][key] += step;
    fs.writeFile("./data/stats.json", JSON.stringify(stats), (err) => {
        if (err) throw err;
    });
}

/**
 * Increases an individual's field by desired amount and writes change to stats.json
 * @param {int} index The index of the individual
 * @param {string} key The key of the field that should be increased ("messages", "nerds")
 * @param {int} step The step by which the field is increased
 */
module.exports.incrementIndividualStats = (index, key, step) => {
    stats["individuals"][index][key] += step;
    fs.writeFile("./data/stats.json", JSON.stringify(stats), (err) => {
        if (err) throw err;
    });
}

/**
 * Increments a user's message stat and creates a new entry in stats.json if user does not already exist
 * @param {Discord.User} user The user whose message stat is increased
 */
module.exports.handleMessage = (user) => {
    const userIndex = this.fieldValueToIndex("userid", user.id);
    if (userIndex == -1) {
        const newIndividual = {
            userid: user.id,
            tag: user.tag,
            messages: 0,
            nerds: 0
        }
        stats["individuals"].push(newIndividual);
        fs.writeFile("./data/stats.json", JSON.stringify(stats), (err) => {
            if (err) throw err;
        });
    }
    this.incrementGlobalStats("TOTAL_MESSAGES", 1);
    this.incrementIndividualStats(stats["individuals"].length - 1, "messages", 1);
}

/**
 * Finds the index of the individual with the value of desired field equivalent to desired value. Returns -1 if no match.
 * @param {string} field The field of the individual from which to search
 * @param {*} value The value of the field that should match with a user
 * @returns {int}
 */
module.exports.fieldValueToIndex = (field, value) => {
    for (let i = 0; i < stats["individuals"].length; ++i) {
        if (stats["individuals"][i][field] == value) return i;
    }
    return -1;
}

/**
 * Converts the desired .txt file into a string
 * @param {string} path The path of the file that will be read
 * @returns {string}
 */
module.exports.txtToString = (path) => {
    return fs.readFileSync(path, "utf-8");
}

/**
 * Chooses a random natural number of at most max
 * @param {int} max The maximum natural number that can be returned
 * @returns {int} An integer between 0 and max
 */
module.exports.randNatural = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 * Chooses a random element from the passed in array
 * @param {Array} array The set of elements from which to randomly select
 */
module.exports.chooseRandom = (array) => {
    return array[this.randNatural(array.length)];
}

/**
 * Converts a ratio to a percent string with a percent symbol, rounded to one decimal place
 * @param {number} ratio The ratio to be converted
 */
module.exports.ratioToPercent = (ratio) => {
    if (isNaN(ratio)) return "n/a";
    return (Math.round((ratio + Number.EPSILON) * 1000) / 10) + "%";
}

/**
 * Suspends the execution of the calling thread by a desired period of time. Can only be used in async functions.
 * @param {number} time The period of time, in milliseconds, during which the script will not continue execution
 */
module.exports.sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Attaches to the catch block of an asynchronous function to handle errors
 * @param {*} err The error associated with the rejected promise
 * @param {Discord.TextChannel | Discord.DMChannel | Discord.NewsChannel} channel The channel in which the error message is sent
 */
module.exports.rejectionCallback = async (err, message) => {
    await message.channel.send("wtf thats a " + err)
        .then(console.log(err))
        .catch((err) => console.log(err));
}