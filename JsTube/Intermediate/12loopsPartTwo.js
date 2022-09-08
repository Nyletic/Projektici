// for in and for of loop
// for of loop is generally used for arrays
// for in is more used for objects 

const sites = ["Youtube", "facebook", "Instagram", "amazon", "Netflix"];

// for(const n of sites){
//     console.log(n);
// }

const symbols = {
    yt : "Youtube",  
    fb: "facebook",
    ig: "Instagram",
    vsc: "visual studio code",
};

for(const n in symbols){
    console.log(`Key is: ${n}, and the value is: ${symbols[n]}.`);
}