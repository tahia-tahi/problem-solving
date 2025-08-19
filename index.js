// reverse

let word = 'Hello World'
let reversed = word.split('').reverse().join('')
console.log(reversed);

// factorial
let numbers = [1, 2, 3, 4, 5]
let n = 1;
for (i = 1; i = numbers.length; i++) {
    result *= n[i]
}


// palindrome
let input = 'madam'
let palindrome = input.split('').reverse().join('')
if (input === palindrome){
    return true
}


//largest number
let allNumbers = [5, 1, 9, 3]
let largest = Math.max(allNumbers);

return largest


// remove duplicate
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(unique); 

// sum
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


console.log(sumArray([1, 2, 3, 4])); 



// even numbers
function findEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}


console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 



// Capitalize
function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return capitalized.join(" ");
}

console.log(capitalizeWords("hello world")); 



// Vowels
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); 




// ping pong
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}


pingPong();
