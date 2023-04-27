const form = document.getElementById('form');
const resetbtn = document.getElementById('reset')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submittedArray = [];

    for (let i = 0; i < 5; i++) {
        submittedArray.push(event.target[i].value)
    }

    const colourArray = submittedArray.filter((colour) => {
        const hexRegEx = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

        return (colour.length <= 6 && hexRegEx.test(colour));
    })

    for (let i = 0; i < colourArray.length; i++) {
        let hex = colourArray[i];

        if (hex.length === 3) {
            hex = hex + hex;
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

        div.innerText = `#${colourArray[i]}`;
    }
})

resetbtn.addEventListener('click', () => {
    window.location.reload();
})