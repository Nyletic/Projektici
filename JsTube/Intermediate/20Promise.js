// promises, resolve, reject, async, await

const jedan = () => {
  return "Jen!";
};

// const dva = async() => {
//     setTimeout(() => "ovo stoji prije dva", 1000);
//     return "Dva, jebes mu sve!";
// }

//fetching data from anywhere always takes a bit of time at least
//that is why we need async programming, like promises
const dva = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ovo je dva");
    }, 3000);
  });
};

const tri = () => {
  return "Drei";
};

async function callFunctions(){
    console.log(jedan());
    console.log(await dva());
    console.log(tri());
}

callFunctions();

// promise is something that has two states: fulfilled or not fulfilled
