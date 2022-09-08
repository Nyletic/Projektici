let myMap = new Map([
    [-1, "MinusJedan", "dva"],
    [0, "nula"],
    [1, "Jedan"],
    [2, 'dvica']
])

myMap.set(3, "trajka");

for(let[key, value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}

//foreach loop always takes value as first parametar, 
//it takes values and indexes are not that
//so this down here is nice workaround

myMap.forEach((value, key) => console.log(key, value))


