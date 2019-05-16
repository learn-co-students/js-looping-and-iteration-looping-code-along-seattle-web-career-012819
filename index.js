// Code your solutions in this file
printBadges = (employees) => {
  for (let i = 0; i < employees.length; i++) {
      console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

tailsNeverFails = () => {
   totalTails = 0;
   while (Math.random() >= .5) {
      totalTails += 1;
   }
   return `You got ${totalTails} tails in a row!`;
}