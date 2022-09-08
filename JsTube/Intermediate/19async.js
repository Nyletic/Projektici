
const jedan = () => {
    console.log("Jen!");
}

const dva = () => {
    setTimeout(() => console.log("ovo stoji prije dva"), 2000)
    console.log("Dva, jebes mu sve!");
}

const tri = () => {
    setTimeout(() => console.log("ovo stoji prije tri"), 1000);
    console.log("Broj poslije dva");
}

jedan();
tri();
dva();