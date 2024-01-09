const fs = require("fs");
const path = require("path");
const filePath = process.argv[2];

const STOP_WORDS = [
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "has",
  "he",
  "i",
  "in",
  "is",
  "it",
  "its",
  "of",
  "on",
  "that",
  "the",
  "to",
  "were",
  "will",
  "with",
];

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile("test-file.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      process.exit(1);
    }
    // TODO: write code to count the words in the file

    const words = data.split(/\W+/);
    const lowerCase = words.map((word) => word.toLocaleLowerCase());

    const wordFrequency = {};

    for (const word of lowerCase) {
      if (STOP_WORDS.includes(word)) {
        continue;
      }
      if (word in wordFrequency) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    }

    console.log("Initial data read from file: ", "test-file.txt");
    console.log(file);
    callback(wordFrequency);
  });
}

printWordFreq(filePath, (wordCount) => {
  console.log("The results from your word counts:", wordCount);
});
