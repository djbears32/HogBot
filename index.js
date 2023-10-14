// HogBot - Written by Ncookie
// Invite Link: https://discord.com/oauth2/authorize?client_id=743577527796367370&scope=bot&permissions=216128

// Initializations:
const discord = require('discord.js');
const client = new discord.Client();
const key = 'hog';
const prefix = 'hog ';
var override = false;
var alcoholCount = 0;
var hogPassedOut = false;

// User IDs:
var DJ = '328578198059221003';
var ekhog = '541269244478881803';
var horgbros = '552189097347907594';
var ncookie = '130396053399797760';
var vigilante = '269893084014182410';
var bcrew = '131451754054287360';
var aero = '152113822922964992';

// Startup Message:
client.once('ready', () => {
    console.log('HogBot is ready to rumble.');
});

// Hog Food Library:
var foods = ['coffee', 'apple', 'pear', 'tangerine', 'lemon', 'banana', 'watermelon', 'grapes', 'strawberry', 'cherries', 'peach', 'pineapple', 'kiwi', 'tomato', 'eggplant', 'avocado', 'corn', 'carrot', 'bagel', 'bread', 'cheese', 'pancakes', 'waffle', 'bacon', 'hotdog', 'hamburger', 'pizza', 'taco', 'ramen', 'sushi', 'pie', 'cupcake', 'lollipop', 'popcorn', 'doughnut', 'beverage_box', 'bagel', 'cake', 'cookie', 'cookie', 'cookie', 'cookie', 'cookie', 'cookie', 'cookie', 'cookie'];

// Hog Bible Quotes Library:
var quotes = ['There is only one true hog.', 'May the hog reign supreme.', 'Its oink can be heard for thousands of miles.', 'It is the king of the savanna.', 'Its eyes can pierce through your soul.', 'Its size immeasureable - its presence frightening.', 'The only choice is surrender.', 'The hog cannot be stopped.', 'Its horns touch the sky, and our hearts with their beauty.', 'The hog\'s favourite snack is a cookie.'];

// Hog Roast Library:
var roasts = ['This dude <X> has more chromosomes than starting villages.', 'Imagine being in the Hog Shitlist like <X>. Must be sad.', 'Hog farts smell nicer than <X>.', '<X> is nothing but a horg.', 'I bet <X> has market 30 on all their villages.', 'The hog is very displeased with you, <X>. Repent.', 'Someone get a thermometer, I think <X>\'s IQ dropped below room temperature.', '<X> is looking like a juicy internal right about now.', 'At what level HQ do you unlock the \'thinking\' skill? Asking for <X>.', '<X> looked in the mirror once. We need a new mirror.', 'How does one go about becoming a better clown than <X>? They\'re quite talented.', 'Hey <X>, yo momma so fat rangers don\'t even need to leave the village to see it\'s a lost cause.', 'COVID was created to force <X> to wear a mask when in public.', 'The day <X> says something smart is the day hogs fly.'];

// Bot Messaging Block:
client.on('message', message => {
console.log(message.content);
    //====================================================================================================//
    //                                            BOT COMMANDS                                            //
    //====================================================================================================//

    // Uncomment to get author info:
    //console.log(message.author);

    // Override Controls:
    var overrideMsg = ':boar::cry: The Hog has left us once more. All is lost. Nothing matters anymore. :cry::boar:';
    if(message.author.id == DJ && message.content == 'hog flip') {
        message.channel.send(':cry:');
        override = !override;
        return;
    }

    // Alcohol Controls:
    var passedOutMessage = ':beers::pig2::zzz: The hog has passed out. Great job. You\'re a horrible influence.';
    let alcoholCheck = (drink) => {
        if(alcoholCount > 9) {
            if(alcoholCount > 29) {
                message.channel.send(passedOutMessage);
                hogPassedOut = true;
            } else {
                message.channel.send(':' + drink + '::pig2: The hog is way too drunk, you\'ve given him ' + alcoholCount + ' drinks! Stop!');
            }
        }
    }
    if(message.author.id == DJ && message.content == 'hog slap') {
        message.channel.send(':exclamation:');
        hogPassedOut = false;
        alcoholCount = 0;
        return;
    }

    // Checking if author is Horgbros:
    if(message.author.id == horgbros) {
        message.react('🤮');
    }

    // Checking if author is Ekhog:
    if(message.author.id == ekhog) {
        message.react('🙏');
        message.react('🐗');
    }

    // Generic message checks:
    if(message.author.bot) {
        return;
    } else if(!message.content.toLowerCase().includes(key)) {
        if(message.content.toLowerCase().includes('horg')) {
            message.react('🤮');
        }
        return;
    } else if(override) {
        message.channel.send(overrideMsg);
        return;
    } else if(hogPassedOut) {
        message.channel.send(':zzz::zzz::zzz::zzz::zzz:');
        return;
    } else if(!message.content.toLowerCase().startsWith(prefix)) {
        message.channel.send(':boar: I have been summoned. What can I do for you mortal? :boar:');
        return;
    }

    // String Manipulation:
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Command: 'hog help':
    if(command === 'help') {
        message.channel.send(`:boar: Help? The hog does not help. The hog only eats.\n
You shall interact with the hog in the following ways:\n
:man_shrugging: \`hog help\` - Displays this very command!\n
:cookie: \`hog feed\` - You may feed the hog a random food or specify the nutrition you wish to bestoy upon it.\n
:pray: \`hog praise\` - Allow your inner self to give into the greatness of the hog.\n
:crossed_swords: \`hog calc\` - The hog shall guide you to a great simulator for TW2.\n
:abacus: \`hog hiba\` - The hog shall guide you to a more accurate simulator for TW2.\n
:map: \`hog map\` - The hog shall guide you to a great mapping tool for TW2.\n
:desktop: \`hog forum\` - The hog shall guide you to our world's forums.\n
:face_vomiting: \`hog shame\` - You may shame the fake hogs of this world.\n
:axe: \`hog axe\` - Beware.\n
:dash: \'hog fart\' - The sacred gases must be released.\n
:fire: \'hog roast\' - You may request from the hog a great roast.\n
:moneybag: \'hog bash\' - The hog shall school you about bashpoint calculations.\n
Also, be careful - if you even mention the hog in any message, it shall be summoned.`);
        return;
    }

    // Command: 'hog feed':
    if(command === 'feed') {
        var extraCommand = args.shift();
        var randomFood = foods[Math.floor(Math.random() * foods.length)];
        if(extraCommand == null) {
            message.channel.send(':' + randomFood + '::pig2:');
            return;
        } else {
            for(var i = 0; i < foods.length; i++) {
                if(extraCommand == foods[i]) {
                    message.channel.send(':' + foods[i] + '::pig2:');
                    return;
                }
            }
            if(extraCommand == 'juice') {
                message.channel.send(':beverage_box::pig2:');
            } else if(extraCommand == 'br' || extraCommand == 'brazilians' || extraCommand == 'brasilians') {
                message.channel.send(':flag_br::pig2:');
            } else if(extraCommand == 'wine') {
                message.channel.send(':wine_glass::pig2:');
                alcoholCount++;
                alcoholCheck('wine_glass');
            } else if(extraCommand == 'beer') {
                message.channel.send(':beer::pig2:');
                alcoholCount++;
                alcoholCheck('beer');
            } else {
                message.channel.send(':' + randomFood + '::pig2:');
            }
            return;
        }
    }

    // Command: 'hog praise':
    if(command === 'praise') {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(':boar::pray: ' + randomQuote + ' :pray::boar:');
        return;
    }

    // Command: 'hog calc':
    if(command === 'calc') {
        message.channel.send(':boar: The hog presents you with a link: http://tw2calc.com/');
        return;
    }

    // Command: 'hog map':
    if(command === 'map') {
        message.channel.send(':boar: The hog presents you with a link: https://tribalwars2map.com/en/en65');
        return;
    }

    // Command: 'hog forum':
    if(command === 'forum') {
        message.channel.send(':boar: The hog presents you with a link: https://en.forum.tribalwars2.com/index.php');
        return;
    }

    // Command: 'hog hiba':
    if(command === 'hiba') {
        message.channel.send(':boar: The hog presents you with a link: https://docs.google.com/spreadsheets/d/1Y-UPCQvlQbulStftYKGhjge2JTrh6s1bUUjVoKL1eLQ/edit?usp=sharing');
        return;
    }

    // Command: 'hog shame':
    if(command === 'shame') {
        message.channel.send(':boar::face_vomiting: Horgs are but cheap fakes of the one true hog. :face_vomiting::boar:');
        return;
    }

    // Command: 'hog axe':
    if(command === 'axe') {
        message.channel.send(':axe::boar: Careful. The hog has an axe.');
        return;
    }

    // Command: 'hog fart':
    if(command === 'fart') {
        message.channel.send(':pig2::dash:');
        return;
    }

    // Command: 'hog roast':
    if(command === 'roast') {
        var extraCommand = args.shift();
        var roastee = '';

        // Preventing insults to the Hog and it's creator:
        var roasteeCheck = extraCommand;
        if(roasteeCheck != null) {
            roasteeCheck = roasteeCheck.toLowerCase();
            while(roasteeCheck.includes('0')) { roasteeCheck = roasteeCheck.replace('0', 'o') }
            while(roasteeCheck.includes('3')) { roasteeCheck = roasteeCheck.replace('3', 'e') }
        }
        extraCommand == null || roasteeCheck.includes('hog') || roasteeCheck.includes('ookie') || roasteeCheck.includes('ockie') ? roastee = 'Horgbros' : roastee = extraCommand;

        var randomRoast = roasts[Math.floor(Math.random() * roasts.length)].replace('<X>', roastee);
        message.channel.send(':boar::fire: ' + randomRoast + ' :fire::boar:');
        return;
    }

    // Command: 'hog bash':
    if(command === 'bash') {
        message.channel.send(`:crossed_swords: **Attacking** :crossed_swords:
Spears -> 4
Swords -> 5
Archers -> 5
Heavy Cav -> 23
Trebs -> 25
Paladins -> 40
Axes -> 1
LC -> 5
MA -> 6
Rams -> 4
Catapults -> 12
Zerkers -> 10
Nobles -> 200\n
:shield: **Defending** :shield:
Spears -> 1
Swords -> 2
Archers -> 2
Heavy Cav -> 15
Trebs -> 0
Paladins -> 20
Axes -> 4
LC -> 13
MA -> 12
Rams -> 8
Catapults -> 10
Zerkers -> 25
Nobles -> 200`);
        return;
    }

    // Command: 'hog leo':
    if(command === 'leo') {
        message.channel.send(':boar::ok_hand: Just a reminder that Leonardis crowned Dummies on his tavern. :ok_hand::boar:');
        return;
    }

    // Command: 'hog rape' (Horgbros-specific):
    if(command === 'rape') {
        if(message.author.id == horgbros) {
            message.channel.send(':boar: I swear to hog you\'ll choke on a pickle and die if you type that one more time. :boar:');
        }
        return;
    }

    //====================================================================================================//

});

console.log("Token from environment: ", process.env.BOT_TOKEN);
// Accessing Bot w/ Token:
client.login(process.env.BOT_TOKEN);
