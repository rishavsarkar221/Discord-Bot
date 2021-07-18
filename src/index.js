const Discord = require("discord.js")
const client = new Discord.Client()

const fs = require('fs')

let messages = []

const token = 'HAHA TOKEN BRRRRRODYyMjE0Nzg4MzkzODYxMTQx.YOVGGA.Q-IyrrlcS29-M4-r3hvxVYsEh3w'

let banned_words = [
    'chattan',
    'singh',
    'aadit',
    'bagga',
    'a@dit',
    '@adit',
    '@@dit',
    'ch@tt@n',
    'ch@ttan',
    'chatt@n',
    'c|-|@tt@n',
    'c|-|att@n',
    'c|-|@ttan',
    '$ingh',
    '$ing|-|',
    'sing|-|',
    'paaji',
    'p@aji',
    'pa@ji',
    'p@@ji',
    '`chattan`',
    '`singh`',
    '`aadit`',
    '`bagga`',
    '`a@dit`',
    '`@adit`',
    '`@@dit`',
    '`ch@tt@n`',
    '`ch@ttan`',
    '`chatt@n`',
    '`c|-|@tt@n`',
    '`c|-|att@n`',
    '`c|-|@ttan`',
    '`$ingh`',
    '`$ing|-|`',
    '`sing|-|`',
    '`paaji`',
    '`p@aji`',
    '`pa@ji`',
    '`p@`@ji',
    '`chattan`',
    'singh',
    `aadit`,
    `bagga`,
    `a@dit`,
    `@adit`,
    `@@dit`,
    'ch@tt@n',
    'ch@ttan',
    'chatt@n',
    'c|-|@tt@n',
    'c|-|att@n',
    'c|-|@ttan',
    '$ingh',
    '$ing|-|',
    'sing|-|',
    'paaji',
    'p@aji',

    'c\nh\n a\n t\n t\n a\n n\n',
    's\ni\nn\ng\nh',
    'a a d i t',
    'b a g g a',
    'a @ d i t',
    '@ a d i t',
    '@ @ d i t',
    'c h @ t t @ n',
    'c h @ t t a n',
    'c h a t t @ n',
    'c | - | @ t t @ n',
    'c | - | a t t @ n',
    'c | - | @ t t a n',
    '$ i n g h',
    '$i n g | - |',
    's i n g | - |',
    'p a a j i',
    'p @ a j i',
    'p a @ j i',
    'p @ @ j i',
    '`c h a t t a n`',
    '`s i n g h`',
    '`a a d i t`',
    '`b a g g a`',
    '`a @ d i t`',
    '`@ a d i t`',
    '`@ @ d i t`',
    '`c h @ t t @ n`',
    '`c h @ t t a n`',
    '`ch a t t @ n`',
    '`c |-| @  tt @ n',
    '`c |-| a  tt @ n',
    '`c | - | @ t t a n',
    '`$ i n g h',
    'c |-| @  tt @ n',
    'c |-| a  tt @ n',
    'c | - | @ t t a n',
    '$ i n g h',
    "cchhaattaann",
    "cchhattann",
    "cchaattaan",
    "chhaattaan",
    "chatan",
    "chatann",
    
     'chattan',
    'singh',
    'aadit',
    'bagga',
    'a@dit',
    '@adit',
    '@@dit',
    'ch@tt@n',
    'ch@ttan',
    'chatt@n',
    'c|-|@tt@n',
    'c|-|att@n',
    'c|-|@ttan',
    '$ingh',
    '$ing|-|',
    'sing|-|',
    'paaji',
    'p@aji',
    'pa@ji',
    'p@@ji',
    '`chattan`',
    '`singh`',
    '`aadit`',
    '`bagga`',
    '`a@dit`',
    '`@adit`',
    '`@@dit`',
    '`ch@tt@n`',
    '`ch@ttan`',
    '`chatt@n`',
    '`c|-|@tt@n`',
    '`c|-|att@n`',
    '`c|-|@ttan`',
    '`$ingh`',
    '`$ing|-|`',
    '`sing|-|`',
    '`paaji`',
    '`p@aji`',
    '`pa@ji`',
    '`p@`@ji',
    '`chattan`',
    'singh',
    `aadit`,
    `bagga`,
    `a@dit`,
    `@adit`,
    `@@dit`,
    'ch@tt@n',
    'ch@ttan',
    'chatt@n',
    'c|-|@tt@n',
    'c|-|att@n',
    'c|-|@ttan',
    '$ingh',
    '$ing|-|',
    'sing|-|',
    'paaji',
    'p@aji',

    '```c\nh\n a\n t\n t\n a\n n\n```',
    '```s\ni\nn\ng\nh```',
    '```a a d i t```',
    '```b a g g a```',
    '```a @ d i t```',
    '```@ a d i t```',
    '```@ @ d i t```',
    '```c h @ t t @ n```',
    '```c h @ t t a n```',
    '```c h a t t @ n```',
    '```c | - | @ t t @ n```',
    '```c | - | a t t @ n```',
    '```c | - | @ t t a n```',
    '```$ i n g h```',
    '```$i n g | - |```',
    '```s i n g | - |```',
    '```p a a j i```',
    '```p @ a j i```',
    '```p a @ j i```',
    '```p @ @ j i```',
    '```c h a t t a n```',
    '```s i n g h```',
    '```a a d i t```',
    '```b a g g a```',
    '```a @ d i t```',
    '```@ a d i t```',
    '```@ @ d i t```',
    '```c h @ t t @ n```',
    '```c h @ t t a n```',
    '```ch a t t @ n```',
    '```c |-| @  tt @ n```',
    '```c |-| a  tt @ n```',
    '```c | - | @ t t a n```',
    '```$ i n g h```',
    '```c |-| @  tt @ n```',
    '```c |-| a  tt @ n```',
    '```c | - | @ t t a n```',
    '```$ i n g h```',
    "```cchhaattaann```",
    "```cchhattann```",
    "```cchaattaan```",
    "```chhaattaan```",
    "```chatan```",
    "```chatann```"
]

// IMPORTANT NOTE: Make Sure To Use async and rename bot to client or whatever name you have for your bot events!

client.on('guildMemberAdd', async newMember => {
    const welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === '🤖new-users ')
    welcomeChannel.send('')


    // Optional Part (you can modify those extra things if you'd like!) :D
    let msgEmbed = new Discord.MessageEmbed()
    .setTitle (`This is a title for a test`)
    // welcomeChannel.send(msgEmbed) | (that's commented so you know to use it only if you want an embed and also don't delete the other "welcomeChannel.send" just change it in there and say "welcomeChannel.send(msgEmbed)" and define the msgEmbed variable as a let and define it above the "welcomeChannel.send" so the bot will check and see that it's defined so errors won't happen!
    if (newMember.bot) return; // checks if it's a bot that joined so the channel won't be spammed with "*Discord Bot* has joined the server" and stuff like that, so check that.
    const newbieRole = newMember.roles.cache.find(role => role.name === 'Role Name here') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
    newMember.roles.add(newbieRole.id) // this will add the role to that member!
    // All the things that are under the "Optional Part" are 100 % Optional! No Requirement to use those, just use it if you want and they won't affect the welcome message at all!
})

client.on('message', (message) => {
    const promoteMsg = `You know, you can follow the developer of this bot over here:
    Youtube: https://www.youtube.com/channel/UCoRAQSN0v0PxOPBGhajIlbQ
    Instagram: https://www.instagram.com/rishavsarkar122_lol
    Twitter: https://www.twitter.com/RishavCoder
                    
    Please support the developer.
    I mean he made a msg tracker which even tracks deleted msgs.
    He made one anti chattan singh bot.
                    
    Itna to kar hi sakte ho`
    
    const wannaPromote = ['yes', 'no'];
    
    const randomNumber = Math.floor(Math.random() * wannaPromote.length)
    
    let words = message.content.toLowerCase().split(" ");
    let banned_words_used = []

    for (i = 0; i < words.length; i++) {
        check_word = banned_words.indexOf(words[i])
        banned_words_used.push(banned_words[check_word])

        if(check_word !== -1) {
            if(message.author == "862214788393861141") {
                return;
            }
            else if(message.author == "659626738069798943") {
                message.delete()        
                message.reply("Dont say banned word\nWord: " + message.content + "\nBanned Word Used: " + banned_words_used)
                
                if (wannaPromote[randomNumber] == 'yes') {
                    message.channel.send()
                }
                break;
            }    
        }
    }

    messages.push({author: message.author, content: message.content})
    
    if(message.content == "!messages" && (message.author == "786495709880516638" || message.author == message.guild.ownerID)) {
        if(message.length !== 0) {
            messages.map(value => {
                return message.channel.send(value.author + ' Messaged: ' + value.content)
            })
        }
        else {
            message.reply("There are no messages")
        }
        
        if (wannaPromote[randomNumber] == 'yes') {
            message.channel.send(promoteMsg)
        }
    }
    
    else if(message.content == "!clearmsg" && (message.author == message.guild.ownerID || message.author == "786495709880516638")) {
        message.reply("Cleared All Messages");
        messages = [];
        if (wannaPromote[randomNumber] == 'yes') {
            message.channel.send(promoteMsg)
        }
    }
    
    else if(message.content == "!help") {
        message.reply(`
        !clearmsg - Clears all message history. (Only available to server owners)
        !messages - Shows message history. (Only available to server owners)
        !banned - Shows all the banned words.
        `)
    }
    
    else if(message.content == "!banned") {
        banned_words.forEach(banned => banned)
        if (wannaPromote[randomNumber] == 'yes') {
        message.channel.send(promoteMsg)
        }
    }
    
    let check_name = message.content.toLowerCase().split(" ");
    let banned_name_used = []

    for (i = 0; i < words.length; i++) {
        check_name = banned_words.indexOf(words[i])
        banned_name_used.push(banned_words[check_word])

        if(check_name !== -1) {
            if(message.author == "862214788393861141") {
                return;
            }
            else {
                message.delete()
                message.reply("Hey You have a banned name!!! Change it 😡😡")
                message.guild.members.get(message.author).setNickname("Broke rules, so changed nickname")

                if (wannaPromote[randomNumber] == 'yes') {
                    message.channel.send()
                }
                break;
            }
        }
    }
})


client.on('ready', () => console.log("I am ready"))

client.login(token.slice(17, ));
