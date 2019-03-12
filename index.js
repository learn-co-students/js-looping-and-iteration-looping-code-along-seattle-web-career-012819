// Code your solutions in this file
function printBadges(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
   }
   return array
}

function tailsNeverFails(){
   tailsCounter = 0
   while (Math.random() >= .5) {
         tailsCounter += 1
      }
return `You got ${tailsCounter} tails in a row!`
}
