// shift + option + down arrow = coppies current line onto the next one
// holding option key will allow me to write same thing on more then on place

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).bacgroundColor);
// window is referred to the window in the browser when using inspector tools
// and has a lot of properties, one of which is getComputedStyle which grabs you 
// a style of a particular element and then target particular style that you 
// want to target

const getRgbColor = (selectElement) => {
    return window.getComputedStyle(selectElement).backgroundColor;
}

//var color = getRgbColor(red);

//red.addEventListener('mouseenter', () => {
//     return center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        return center.style.background = color;
    })
}

magicColorChanger(red, getRgbColor(red));
magicColorChanger(cyan, getRgbColor(cyan));
magicColorChanger(orange, getRgbColor(orange));
magicColorChanger(violet, getRgbColor(violet));
magicColorChanger(pink, getRgbColor(pink));

