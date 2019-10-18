// Code your solutions in this file
const badges = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(badges) {
    for (let i = 0; i < badges.length; i++) {
            console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`);
    }
    return badges; 
}

function tailsNeverFails() {
    function flip() {
        return Math.random() >= 0.5;
    }
    
    let numberOfFlips = 0

    while (flip()) {
       numberOfFlips++; 
    }
    return `You got ${numberOfFlips} tails in a row!`;
}
