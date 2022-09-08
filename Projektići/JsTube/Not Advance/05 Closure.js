
function nekiKurac(){
    var ime = "Timo";
    
    function reciIme(){
        console.log(ime);
    }
    // kada zovem funkciju inače moram dodati zagradu, ali u ovom slučaju ne moram 'run this directly. I have a reference of that matter
    // but I am not executing it right straighforwardly 
    // it doesn't execute this function immideately, rather it passes a refernce on it
    return reciIme;
}

var name = nekiKurac();
// we are executing this, and we get "recIme" funkciju tj "Timo"
// so called closure
name();


function doAddition(x){
    return function(y){
        return x + y;
    }
}

// jos dvije moguće opcije za isti code dolje
//var zbrajanje = doAddition(2)(4);
//console.log(doAddition(2)(4));
var zbrajanje = doAddition(2);
console.log(zbrajanje(4));

// there is a difference between referencing the method and calling the method
// reference - doAddition | call - doAddition()

