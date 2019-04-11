"use strict"

const countWord = (word) => {
  let newWord = word.split(' ')
  return newWord.length
}

console.log(countWord(`I Have a Dream`));
console.log(countWord(`Eat Sleep trip Code`));
console.log('');
//......................................................

let alphabet = 'abcdefghijklmnop'
const toUpperAndLowerWord = (word) => {
  let newWord = ''
  for (let i = 0; i < word.length; i++) {

    if (i % 2 === 0) {
      newWord += word[i].toLowerCase()
    } else {
      newWord += word[i].toUpperCase()
    }
  }
  console.log(newWord);

}

toUpperAndLowerWord(alphabet)