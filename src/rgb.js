export function generateRGB(event) {
    //reset swatch display in case of value deletion
    for (let i = 0; i < 5; i++) {
        const divId = i + 1;
        const div = document.getElementById(`${divId}`);
        div.style.display = 'none';
    }

    const submittedArray = [];

    for (let i = 0; i < 5; i++) {
        submittedArray.push(event.target[i].value);
    };

    const rgbArray = submittedArray.filter((colour) => {
        const rgbRegEx = /^(?:(?:^|,\s*)([01]?\d\d?|2[0-4]\d|25[0-5])){3}$/

        return rgbRegEx.test(colour);
    })

    for (let i = 0; i < rgbArray.length; i++) {
        let rgb = rgbArray[i];
        const divId = i + 1;
        const div = document.getElementById(`${divId}`);

        div.style.display = 'block';

        div.style.backgroundColor = `rgb(${rgb})`

        div.innerText = `Colour ${divId}: RGB ${rgb}`;
    }    
};