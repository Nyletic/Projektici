function batmanOrder(a, b){
    var batman = ["Arkham Origins",
    "Assault on Arkham",
    "Arkham Asylum",
    "Arkham City",
    "Arkham Knight"];

    return batman.indexOf(a) - batman.indexOf(b);
}

var games = ["Arkham Knight", 
"Arkham Origins",
"Arkham City",
"Assault on Arkham"];

games.sort(batmanOrder);
console.log(games);