import fs from "fs";
import readline from "node:readline";
import { resolve } from "path";

let testWords = ["earth", "plane", "crane", "audio", "house", "offer", "often"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomWord() {
  let random_index = Math.floor(Math.random() * testWords.length);
  return testWords[random_index];
}

let answer;
const todaysWord = getRandomWord(testWords);
console.log(todaysWord);

while (answer != todaysWord) {
  const guessWord = await new Promise((resolve) =>
    rl.question("What's the word for today?", (word) => {
      console.log("I am resolving the promise");
      resolve(word);
    })
  );
  if (guessWord.toLowerCase() === todaysWord) {
    console.log("Congratulations on correct answer");
    rl.close();
  } else {
    console.log(`Your word ${guessWord} is incorrect please try again`);
  }
  answer = guessWord;
  console.log(guessWord);
}

// function validGuess(guess) {
//     return /^[a-z A-Z]{5}$/.test(guess) && testWords.includes(guess.toLowercase());
// }
