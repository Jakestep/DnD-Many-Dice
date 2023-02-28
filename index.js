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
const d20Btn = document.getElementById('d20-btn');
const dcEl = document.getElementById('dc');
const dcPassEl = document.getElementById('dc-pass-el');
const dcPassElInitial = document.getElementById('dc-pass-el').textContent;
const sides = document.getElementById('sides')

function howManyPassed(times, sides, dc) {
    let didPass = 0;
    let didNotPass = 0;
    for (let i = 0; i < times; i++) {
        let tempNum = Math.floor(Math.random()*(sides + 1));
        if (tempNum >= dc) {
            didPass++;
        } else {
            didNotPass++;
        };
    };
    dcPassEl.textContent = dcPassElInitial + didPass
    document.getElementById('dc-fail-el').textContent = `This many failed: ${didNotPass}`
}

rollAll.addEventListener('click', function() {
    // totalOfRolls(amountInput.textContent)
    howManyPassed(amountInput.value, sides.value, dcEl.value);
});