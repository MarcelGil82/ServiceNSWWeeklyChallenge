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
            let myIndex = parseInt(userInput) -1;
            if (userInput < wanderers.length) {
                let myPlayer = wanderers[myIndex]
                console.log(`You have selected: ${myPlayer.playerName}. He is ${myPlayer.age} years old and plays as a ${myPlayer.position}.`);
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
