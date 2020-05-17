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

for (let i = 0; i < wanderers.length; i++) {
    let wanderer = wanderers[i];
    console.log(`You have selected ${wanderer.playerName}. ${wanderer.playerName} is ${wanderer.age} years old and their position is ${wanderer.position}.`);
}