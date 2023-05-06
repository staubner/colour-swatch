export function generateRGBA(event) {
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


    const rgbaArray = submittedArray.filter((colour) => {
        const rgbRegEx = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)$/


        return rgbRegEx.test(colour);
    })

    for (let i = 0; i < rgbaArray.length; i++) {
        const rgb = rgbaArray[i];
        const divId = i + 1;
        const div = document.getElementById(`${divId}`);

        // test RGB value to determine text colour
        const rgbToArray = rgb.split(',');
        const rgbToNums = rgbToArray.map((value) => {
            let num = Number(value);
            if (num === 0) {
                num += 1
            };

            return num;
        });

        const alpha = rgbToNums[rgbToNums.length - 1];

        rgbToNums.pop();

        let rgbTotal = 1;

        for (let j = 0; j < rgbToNums.length; j++) {
            rgbTotal *= rgbToNums[j];
        }

        if (rgbTotal <= 8500000 && alpha > 0.5) {
            div.style.color = 'white';
        } else {
            div.style.color = 'black';
        }

        div.style.display = 'block';

        div.style.backgroundColor = `rgb(${rgb})`

        div.innerText = `Colour ${divId}: RGB ${rgb}`;
    }
};