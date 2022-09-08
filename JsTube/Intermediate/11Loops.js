const countries = ["Hrvatska", "Bosna", "Srbija", 22, "Mađarska"];

// for (let i = 0; i < countries.length; i++) {
//     // break izlazi iz petlje cim je zadovoljen uvijet za uci u if u kojemu je break
//     // continue, ako zadovoljava uvijet u if-u samo ce se vratiti nazad u loop koji ce u ovom slucaju biti inkrementan za +1
//     // znaci kad god if bude zadovoljen console log se nece izvrsiti, u suprotnome hoce
//     if(typeof countries[i] !== "string") continue; 
//     console.log(countries[i]);
// }

// when the scope is over 'let' is freed up from the memory. Declaring let i in for loop after declaring it in while loop won't be a problem
// in every scope{} 'break' and 'continue' keywords work

// this is totally valid way of having a loop, but it is not good for production
// var i = 0;

// for(;;){
//     if(i > 3) break; 
//     console.log(i);
//     i++;
// }

// foreach not exactly counted as loop, but is loop
// this is great for looping arrays
countries.forEach(s => console.log(s));

// there are also more types of loops like 'for in', 'for of' which are used through js 