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

    console.log(rgbArray)

    for (let i = 0; i < rgbArray.length; i++) {
        const rgb = rgbArray[i];
        const divId = i + 1;
        const div = document.getElementById(`${divId}`);

        const rgbToArray = rgb.split('');
        const rgbNumOnly = rgbToArray.filter(num => num !== ",");
        console.log(rgbNumOnly)
        let rgbTotal = 0;

        for (let j = 0; j < rgbNumOnly.length; j++) {
            const strToNum = Number(rgbNumOnly[j])
            rgbTotal += strToNum;
        }

        if (rgbTotal <= 20) {
            div.style.color = 'white';
        } else {
            div.style.color = 'black';
        }

        div.style.display = 'block';

        div.style.backgroundColor = `rgb(${rgb})`

        div.innerText = `Colour ${divId}: RGB ${rgb}`;
    }
};