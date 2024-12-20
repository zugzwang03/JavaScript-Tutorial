var red = document.querySelector('.red')
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');
var black = document.querySelector('.black');

const center = document.querySelector('.center');

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// console.log(getBGColor(black));

var color = getBGColor(blue);
blue.addEventListener('mouseenter', () => {
    center.style.background = color;
})

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(yellow, getBGColor(yellow));
magicColorChanger(green, getBGColor(green));
magicColorChanger(blue, getBGColor(blue));
magicColorChanger(black, getBGColor(black));
