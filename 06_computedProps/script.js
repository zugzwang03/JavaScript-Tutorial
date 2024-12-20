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

console.log(getBGColor(black));
