#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import PressToContinuePrompt from 'inquirer-press-to-continue';
import type { KeyDescriptor } from 'inquirer-press-to-continue';
import { UserManager } from './manager.js';
import figlet from "figlet";

inquirer.registerPrompt('press-to-continue', PressToContinuePrompt);

let startSign = await inquirer.prompt(
    {
        type: "list",
        name: "choice",
        message:chalk.rgb(255,204,153)("SELECT"),
        choices: [chalk.rgb(212,255,0)("LOG IN"), chalk.rgb(212,255,0)("SIGN UP")]
    }
)

const userManager = new UserManager();
// LETS ADD
//let ar= userManager.registerUser("ARY",'6969_106');
userManager.registerUser(`ARYAN`,'123')
if (startSign.choice === chalk.rgb(212,255,0)("SIGN UP")) { 
    let askUn = await inquirer.prompt({
        name: "username",
        type: "input",
        message: chalk.rgb(0,179,0)("ENTER NAME:")
    })

    let askpass = await inquirer.prompt({
        name: "pass",
        type: "input",
        message: chalk.rgb(0,179,0)("ENTER PASSWORD:"),
    })
    userManager.registerUser(askUn.username,askpass.pass)
} else {
    let askUn = await inquirer.prompt({
        name: "username",
        type: "input",
        message: chalk.rgb(0,179,0)("ENTER NAME:")
    })
    let askpass = await inquirer.prompt({
        name: "pass",
        type: "input",
        message: chalk.rgb(0,179,0)("ENTER PASSWORD:"),
    })
    userManager.loginUser(askUn.username, askpass.pass);
}

// Function to generate technical words
function textgenTech() {
    const tech = "Algorithm, Binary, Compiler, Data, Encryption, Firewall, Gigabyte, Hash, Interface, JavaScript, Kernel, Latency, Microprocessor, Nanotechnology, Object, Protocol, Quantum, Recursion, Server, Terabyte, Unicode, Virtualization, Web, XML, Yottabyte, Zettabyte, Array, Bandwidth, Cache, Debug, Ethernet, Framework, Graphics, Hypertext, IP, JSON, Keyword, Library, Middleware, Node, OperatingSystem, Packet, Query, Router, Syntax, Throughput, Uptime, Variable, Wireless, Zip";
    return tech;
}

// Function to generate easy words
function textgenEz() {
    const ez = "Ball, Cat, Dog, Egg, Fish, Grape, Hat, Ice, Jump, Kite, Lamp, Mouse, Nest, Orange, Pencil, Queen, Ring, Sun, Tree, Umbrella, Van, Water, Xylophone, Yarn, Zebra, Book, Chair, Door, Ear, Frog, Grass, House, Ink, Jelly, Key, Lion, Moon, Nose, Octopus, Pig, Quilt, Rabbit, Star, Table, Unicorn, Vase, Window, Yellow, Zipper";
    return ez;
}

// Function to generate hard words
function textgenDead() {
    const hardWords = "Abnegation, Abscond, Abstruse, Anachronistic, Apocryphal, Assiduous, Belligerent, Calumny, Capricious, Chicanery, Circumlocution, Conflagration, Conundrum, Corpulent, Deleterious, Demagogue, Diaphanous, Dissemble, Ebullient, Eclectic, Enervate, Ephemeral, Esoteric, Exacerbate, Excoriate, Exigent, Fastidious, Fatuous, Garrulous, Grandiloquent, Harangue, Hegemony, Iconoclast, Idiosyncratic, Imbroglio, Impetuous, Indefatigable, Inexorable, Insouciant, Intransigent, Invective, Lachrymose, Languid, Largesse, Licentious, Mendacious, Meretricious, Obfuscate, Obsequious, Ostracize, Parsimonious, Pedantic, Perfidious, Perspicacious, Propinquity, Pugnacious, Quixotic, Recalcitrant, Recondite, Sycophant";
    return hardWords;
}

// Function to fetch a random cat fact
async function textgenRandom() {
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        return data.fact;
    } catch {
        throw new Error(chalk.red("error"));
    }
}

const { key: enterKey } = await inquirer.prompt<{ key: KeyDescriptor }>({
    name: 'key',
    type: 'press-to-continue',
    enter: true,
});

// Intro and welcome
console.log(`\n`)
figlet(
    "TYPESPEED TESTER",
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
console.log(chalk.rgb(3, 146, 84)(`=`.repeat(50)));
setTimeout(async()=>{
let ask = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "\t WHAT'S YOUR NAME : ",
});

console.log(chalk.rgb(128,0,255)(`HEY THERE, ${ask.name}`));

// Main game function
async function startGame() {

    let difficulty = await inquirer.prompt({
        name: "diff",
        type: "list",
        message: chalk.bgBlue("\n SELECT DIFFICULTY LEVEL: \n"),
        choices: [chalk.green("EASY"), chalk.cyanBright("TECHNICAL WORDS"), chalk.red("HARDCORE"), chalk.rgb(119, 0, 179)("RANDOM")],
    });

    // Set timeout for 60 seconds
    const { key: enterKey } = await inquirer.prompt<{ key: KeyDescriptor }>({
        name: 'key',
        type: 'press-to-continue',
        enter: true,
    })

    let text;
    let diffset = difficulty.diff;

    if (diffset === chalk.green("EASY")) {
        text = textgenEz();
        console.log(chalk.bgGreen(`\n LET'S GO WITH SOME BASIC WORDS.... \n`));
    } else if (diffset === chalk.red("HARDCORE")) {
        console.log(chalk.redBright.inverse(`\n SO YOU HAVE CHOSEN DEATH...\n`));
        text = textgenDead();
    } else if (diffset === chalk.cyanBright("TECHNICAL WORDS")) {
        console.log(chalk.bgRed(`\n LET'S GO WITH SOME TECHNICAL WORDS.... \n`));
        text = textgenTech();
    } else {
        text = await textgenRandom();
    }
    console.log(chalk.magenta(`MAKE SURE YOUR HANDS ON THE KEYBOARD!!`));
    
    console.log(chalk.cyan.inverse("YOUR SENTENCE:  "));
    console.log(chalk.yellow(text));

    const { key: anyKey } = await inquirer.prompt<{ key: KeyDescriptor }>({
        name: 'key',
        type: 'press-to-continue',
        anyKey: true,
        pressToContinueMessage: 'Press a key to continue...',
    });

    let startTime = Date.now();

    let answer = await inquirer.prompt({
        name: "inputText",
        type: "input",
        message: chalk.green("\n YOUR TEXT: "),
    });

    let endTime = Date.now();
    let timeElapsed = (endTime - startTime) / 1000; // time in seconds

    let inputText = answer.inputText.split(" ");
    let accuracy = (a:string[], b:string[]) => {
        let score = 0;
        let text = []
        for (let i = 0; i < b.length; i++) {
            if (a[i] === b[i]) {
                score++;
                let correct = chalk.green(a[i])
                text.push(correct)
            }else{
                if(typeof a[i]==="undefined"){
                text.push(chalk.redBright(`__?`))
            }else{
                let wrong = chalk.red(a[i])
                text.push(wrong)
            }
            }
        }
        let timeInMin = timeElapsed / 60;
        let wpm = (score / timeInMin).toFixed(2);
        let accuracyOfText = ((score / b.length) * 100).toFixed(2);
        return chalk.rgb(102, 255, 204)(
            chalk.rgb(24, 250, 94)('='.repeat(50)),
            `\nOVERALL :\n ${text} \n`,
            chalk.rgb(17,0,102)(`RESULT:`),
            `\nYOUR ACCURACY: ${chalk.rgb(229, 255, 163)(accuracyOfText)}%`,
            `\nYOU TYPED ${score} RIGHT WORDS IN ${timeInMin.toFixed(2)} MINUTES.`,
            `\nWPM = ${wpm}\n`,
            chalk.rgb(24, 250, 94)('='.repeat(50))
        );
    };

    console.log(accuracy(inputText, text.split(" ")));

    let choices = await inquirer.prompt({
        name: "game",
        type: "list",
        message: "WHAT DO YOU WANT TO DO:",
        choices: [chalk.rgb(252, 172, 33)("RESTART"), chalk.rgb(255, 15, 63)("QUIT")],
    });

    if (choices.game === chalk.rgb(255, 15, 63)("QUIT")) {
        console.log(chalk.rgb(3, 146, 84)(`===================================================`));
        console.log(chalk.magenta(`HAVE A NICE DAY! ALLAH HAFIZ...`))
        console.log(chalk.rgb(3, 146, 84)(`===================================================`));
        setTimeout(()=>{
        process.exit(0)
        },1000)
    } else {
        startGame(); // Restart the game
    }

}

// Start the game
startGame();
},1000)