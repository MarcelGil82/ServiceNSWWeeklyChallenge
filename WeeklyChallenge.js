const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}

async function Program() {
    let wanderers = [
            {
                playerName: "Mitchell Duke",
                age: 29,
                position: "Striker",
            }, {
                playerName: "Daniel Lopar",
                age: 35,
                position: "Keeper",
            }, {
                playerName: "Daniel Georgievski",
                age: 32,
                position: "Defender",
            }, {
                playerName: "Keanu Baccus",
                age: 22,
                position: "Midfielder",
            },
        ];
    console.log("Welcome to the Western Sydney Wanderers Squad!");
    while (true) {
        {
            console.log("[1] Mitchell Duke");
            console.log("[2] Daniel Lopar");
            console.log("[3] Daniel Georgievski");
            console.log("[4] Keanu Baccus");
            console.log("[5] Exit");
            let userInput = await askQuestion("Enter number for corresponding player bio: ");
            
            if (userInput == "1") {
                console.log(`You have selected: ${playerName}. He is ${age} years old and plays as a ${position}.`);
            }   else      
            if (userInput == "2") {
                console.log("You have selected: Daniel Lopar, he is age years old and plays as a position");
            }   else
            if (userInput == "3") {
                console.log("You have selected: Daniel Georgievski, he is age years old and plays as a position");
            }   else
            if (userInput == "4") {
                console.log("You have selected: Keanu Baccus, he is age years old and plays as a position");
            }   else
            if (userInput == "5") {
                console.log("Thank you for visiting the Western Sydney Wanderers Squad.");
                break;
            }
        }
    }
}
Program().then(() => {
    process.exit(0);
});
