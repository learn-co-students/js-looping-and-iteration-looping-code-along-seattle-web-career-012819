function printBadges(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("Welcome " + (arr[i]) + "! You are employee #" + (i + 1) + ".");
    }
    return arr;
}

function tailsNeverFails() {
    let cFlip = Math.random();
    let count = 0;

    while (cFlip >= 0.5 ) {
        count++;
        cFlip = Math.random();
    }

    return ("You got " + count + " tails in a row!");
}