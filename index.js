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
    for (let i = 0; i < times; i++) {
        let tempNum = Math.floor(Math.random()*sides) + 1;
        console.log(tempNum)
        tempNum += parseInt(modifier)
        numsString += `${tempNum} | `
        if (tempNum >= dc) {
            didPass++;
            if (tempNum == 20) {
                crit++
            }
        } else {
            didNotPass++;
            if (tempNum == 1) {
                critFail ++
            }
        };
    };
    dcPassEl.textContent = dcPassElInitial + didPass
    document.getElementById('dc-fail-el').textContent = `This many failed: ${didNotPass}`
    document.getElementById('crit-el').textContent = `This many crit: ${crit}`
    document.getElementById('crit-fail-el').textContent = `This many crit failed: ${critFail}`
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