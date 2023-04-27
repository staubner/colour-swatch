const form = document.getElementById('form');
const resetbtn = document.getElementById('reset')

form.addEventListener('submit', (event) => {
    //handle event and extract values
    event.preventDefault();

    const submittedArray = [];

    for (let i = 0; i < 5; i++) {
        submittedArray.push(event.target[i].value)
    }

    const colourArray = submittedArray.filter((colour) => {
        const hexRegEx = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

        return (colour.length <= 6 && hexRegEx.test(colour));
    })

    //handle hex values into swatches
    for (let i = 0; i < colourArray.length; i++) {
        let hex = colourArray[i];

        if (hex.length === 3) {
            const hex1 = hex[0];
            const hex2 = hex[1];
            const hex3 = hex[2];
            hex = hex1 + hex1 + hex2 + hex2 + hex3 + hex3
        }

        const hexToDecimal = parseInt(hex, 16);
        const divId = i + 1;
        const div = document.getElementById(`${divId}`)

        if ((hexToDecimal / 2) < 8388607) {
            div.style.color = 'white';
        } else {
            div.style.color = 'black';
        }

        div.style.display = 'block';

        div.style.backgroundColor = `#${hex}`

        div.innerText = `Colour ${divId}: #${hex.toUpperCase()}`;
    }
})

//reset page
resetbtn.addEventListener('click', () => {
    window.location.reload();
})