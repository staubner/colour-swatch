import { generateHex } from './hex.js';
import { generateRGB } from './rgb.js';
import { generateRGBA } from './rgba.js';

//reset page
const resetbtn = document.getElementById('reset')

resetbtn.addEventListener('click', () => {
    window.location.reload();
});

//handle colour unit select
const unitSelect = document.getElementById('unit-select');
const form = document.getElementById('colour-form');
let colourType = 'hex';

unitSelect.addEventListener('change', (event) => {
    event.preventDefault();

    colourType = event.target.value;
})


//handle colour value submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // add new colour type functions here
    if (colourType === 'hex') {
        generateHex(event);
    } else if (colourType === 'rgb') {
        generateRGB(event);
    } else if (colourType === 'rgba') {
        generateRGBA(event);
    }
})