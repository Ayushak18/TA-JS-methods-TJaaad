let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array) {
  let sortedArr = array.sort((a, b) => a.length - b.length);
  if (
    sortedArr[sortedArr.length - 1].lenght ===
    sortedArr[sortedArr.length - 2].length
  ) {
    return sortedArr[sortedArr.length - 2];
  } else {
    return sortedArr[sortedArr.length - 2];
  }
}

// - Convert the above array "words" into an array of length of word instead of word.

words.map((element) => element.length);

// - Create a new array that only contains word with atleast one vowel.

words.filter((element) => {
  return (
    element.includes(`a`) ||
    element.includes(`e`) ||
    element.includes(`i`) ||
    element.includes(`o`) ||
    element.includes(`o`)
  );
});

// - Find the index of the word "rhythm"

words.findIndex((element) => element.includes(`rhythm`));

// - Create a new array that contians words not starting with vowel.

words.filter((element) => {
  return !(
    element.startsWith(`a`) ||
    element.startsWith(`e`) ||
    element.startsWith(`i`) ||
    element.startsWith(`o`) ||
    element.startsWith(`o`)
  );
});

// - Create a new array that contianse words not ending with vowel

words.filter((element) => {
  return !(
    element.endsWith(`a`) ||
    element.endsWith(`e`) ||
    element.endsWith(`i`) ||
    element.endsWith(`o`) ||
    element.endsWith(`o`)
  );
});


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array) {
  return array.reduce((acc, cv) => acc + cv, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.filter((element) => element % 3 === 0);

// - Create a new array that contains only even numbers

numbers.filter((element) => element % 2 === 0);

// - Create  a new array that contains only odd numbers.

numbers.filter((element) => element % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.

numbers.map((element) => element % 2 !== 0);

// - Sort the above number in assending order.

numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?

let answer = `yes sort mutates array`;

// - Find the sum of the numbers in the array.

function sumArray(array) {
  return array.reduce((acc, cv) => acc + cv, 0);
}

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function sumArray(array) {
  return array.reduce((acc, cv) => acc + cv, 0) / array.length;
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array) {
  let wordslength = array.map((element) => element.length);
  return wordslength.reduce((acc, cv) => acc + cv, 0) / wordslength.length;
}
