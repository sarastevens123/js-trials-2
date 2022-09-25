'use strict';

// 1. countWords
function countWords(phrase) {

  const wordCounts = {}; 

  for (const word in phrase.split(' ')) {
    if (wordCounts.has(word)) {
      wordCounts[word] += 1; 
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;

}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
