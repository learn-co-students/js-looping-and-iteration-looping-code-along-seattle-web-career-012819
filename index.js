function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function tailsNeverFails() {
  flipCount = 0;
  while (Math.random() >= 0.5) {
    flipCount += 1;
  }
  return `You got ${flipCount} tails in a row!`
}
