const {Client,Intents,MessageActionRow,MessageButton,MessageEmbed,Collection,MessageSelectMenu} = require("discord.js");
const config = require("./ayarlar.json");
const client = new Client({intents: 32767});

require("./util/eventLoader")(client)
require("./util/slashHandler")(client)
require("./util/commandHandler")(client)

client.login(config.token);