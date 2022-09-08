/* difference between const and var is that const is somethings that is gonna stay 
the same throught the whole script and it can't and won't be changed. It 
can't vary like variable. */  

// svejedno je da li koristim single ili double quotation u stringu, prihvaca sve. 

const uid = 'konj123';

var userName = "Mihael Nikolić";

var email = 'konj@drkmail.com';

var password = "12345";
var confirmPassword = "12345";

// variable(or const) is inserted with $ sign. ``(option + 7) is used here insted of "".
console.log(`
    With unique ID: ${uid}
    User is: ${userName}
    and his email is: ${email}
    and uses the password: ${password}
`);
