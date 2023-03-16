/*
TODO Get one dice working: 
D20 - 
button,
input field for how many,
input field for DC,
TODO total of the rolls,
TODO how many passed the DC,
TODO what percentage passed the DC.
*/
const numsToDisplay = document.getElementById('nums-to-display');
const displayNumsEl = document.querySelector('input[name="display-nums-el"]');
const amountInput = document.getElementById('amount-input');
const dcEl = document.getElementById('dc');
const dcPassEl = document.getElementById('dc-pass-el');
const dcPassElInitial = document.getElementById('dc-pass-el').textContent;
const sidesEl = document.getElementById('sides');
let numsString = '';
function howManyPassed(times = 1, sides = 1, dc = 0, modifier = 0) {
    if (!modifier) {
        modifier = 0
    }
    numsString = '| ';
    console.log(modifier)
    console.log(`DC: ${dc} Sides: ${sides} Number Of Rolls: ${times}`)
    console.log(sides)
    let didPass = 0;
    let didNotPass = 0;
    let crit = 0;
    let critFail = 0;
    let Modifier = parseInt(modifier)
    for (let i = 0; i < times; i++) {
        let tempNum = Math.floor(Math.random()*sides) + 1;
        console.log(tempNum)
        numsString += `${(tempNum + Modifier)} | `
        if (tempNum == 1) {
            critFail++
        }
        if (tempNum == 20) {
            crit++
        }
        if (tempNum + Modifier >= dc) {
            didPass++;
            
        } else {
            didNotPass++;
            
        };
    };
    console.log(critFail)
    dcPassEl.textContent = dcPassElInitial + didPass
    document.getElementById('dc-fail-el').textContent = `This many failed: ${didNotPass}`
    document.getElementById('crit-el').textContent = `This many crit (roll = ${sides}): ${crit}`
    document.getElementById('crit-fail-el').textContent = `This many crit failed (roll = 1): ${critFail}`
}

rollAll.addEventListener('click', function() {
    howManyPassed(amountInput.value, sidesEl.value, dcEl.value, document.getElementById('mod-el').value);
    numsToDisplay.textContent = numsString
});


displayNumsEl.addEventListener('change', function() {
    if (displayNumsEl.checked == true) {
        numsToDisplay.style.display = 'block'
    } else {
        numsToDisplay.style.display = 'none'
    }
})

const lameModeCheckbox = document.querySelector('input[name="lame-mode"')
const pagestyle = document.getElementById('pagestyle')
lameModeCheckbox.addEventListener('change', function() {
    if (lameModeCheckbox.checked == true) {
        pagestyle.setAttribute('href', 'lame.css')
        document.getElementById('web-title').textContent = '*sigh*'

        document.getElementById('head-tag').innerHTML = `
        <link id='pagestyle' rel='stylesheet' href = 'lame.css'>
        <title id="web-title">*sigh*</title>
        <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon-images-lame/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-images-lame/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-images-lame/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">`
    } else {
        document.getElementById('head-tag').innerHTML = `
        <link id='pagestyle' rel='stylesheet' href = 'index.css'>
        <title id="web-title">DND Many Dice Roller</title>
        <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon-images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-images/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">`
    }
})
