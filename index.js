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


const amountInput = document.getElementById('amount-input');
const dcEl = document.getElementById('dc');
const dcPassEl = document.getElementById('dc-pass-el');
const dcPassElInitial = document.getElementById('dc-pass-el').textContent;
const sidesEl = document.getElementById('sides')

function howManyPassed(times, sides, dc) {
    console.log(`DC: ${dc} Sides: ${sides} Number Of Rolls: ${times}`)
    console.log(sides)
    let didPass = 0;
    let didNotPass = 0;
    let crit = 0;
    for (let i = 0; i < times; i++) {
        let tempNum = Math.floor(Math.random()*sides) + 1;
        console.log(tempNum)
        if (tempNum >= dc) {
            didPass++;
            if (tempNum == 20) {
                crit++
            }
        } else {
            didNotPass++;
        };
    };
    dcPassEl.textContent = dcPassElInitial + didPass
    document.getElementById('dc-fail-el').textContent = `This many failed: ${didNotPass}`
    document.getElementById('crit-el').textContent = `This many crit: ${crit}`
}

rollAll.addEventListener('click', function() {
    // totalOfRolls(amountInput.textContent)
    howManyPassed(amountInput.value, sidesEl.value, dcEl.value);
});