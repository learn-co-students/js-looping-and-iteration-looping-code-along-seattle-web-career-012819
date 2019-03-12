function printBadges(badges) {
  for (let [num, name] of badges.entries()) console.log(`Welcome ${name}! You are employee #${num + 1}.`)
  return badges;
}

function tailsNeverFails() {
  let tailsCount = 0;
  while (Math.random() >= .5) {
    tailsCount++;
  } 
  return `You got ${tailsCount} tails in a row!`;
}