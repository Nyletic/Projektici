var isLoggedIn = true, emailVerified = true, cardValid = false;

/* if(isLoggedIn){
    console.log("Log in is successful");
    
    if(emailVerified){
        console.log("Email is verified");

        if(cardValid){
            console.log("Your credit card is valid");
        }
    }
}
*/


if(isLoggedIn && emailVerified && cardValid){
    console.log("You can make a purchase");
}
else{
    console.log("Purchase is not possible");
}
