var user = "user";

// a lot of times the 'return' can be seen over 'break' but both work the same basically

switch (user) {
    case "admin":
        return console.log("You get the full access");
        //break;
    case "subadmin":
        return console.log("Gets access for creating/deleting courses");
        //break;
    case "testprep":
        return console.log("Gets access to creating/deleting tests");
        //break;
    case "user":
        return console.log("Gets access to consume content");
        //break;
    // if none of the values matches the above ones it will fall through to default one
    default:
        return console.log("Trivial user");
        //break;
}