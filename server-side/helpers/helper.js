var fs = require('fs');
const filePath = 'TestData.json';

// reading file of data, as my DB

const partOfSpech = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));

function generateUniqueRandom(lengthOfArr) {
  let haveIt = [];

  do {
    // Generating random number
    const randomNumber = Number(Math.floor(Math.random() * lengthOfArr).toFixed());

    // Pushing into the array only
    // if the array does not contain it
    if (!haveIt.includes(randomNumber)) {
      haveIt.push(randomNumber);
    }
  } while (haveIt.length < lengthOfArr);
  return haveIt;
}

function handleListWords() {
  // array part of speech length
  const lengthPartOfSpech = partOfSpech.wordList.length;

  // genereate a random array 1:10
  const haveIt = generateUniqueRandom(lengthPartOfSpech);

  // exam words list
  let newWordsList = [];
  // pos word checker
  let pos = [];

  partOfSpech.wordList.map((part, index, arr) => {
    //get a random part
    const randomIndex = haveIt[index];
    const randomPart = arr[randomIndex];

    // check if part isn't include my part of speech
    if (!pos.includes(randomPart.pos)) {
      newWordsList.push(randomPart);
      pos.push(randomPart.pos);
    }
    if (!newWordsList.some((part) => part === randomPart) && newWordsList.length < 10) {
      newWordsList.push(randomPart);
    }
  });
  return newWordsList;
}

function handleRankOfScore(studentScore) {
  // filter rank below given score, rounded to the nearest hundredth
  let filterRank = partOfSpech.scoresList.filter((score) => score < studentScore);
  // calculate result of student rank
  let rank = Number(((filterRank.length / partOfSpech.scoresList.length) * 100).toFixed(2));
  // return object for student rank and his/her peers
  let studentRank = {
    rank,
    peersRanks: partOfSpech.scoresList,
  };
  return studentRank;
}
module.exports = {
  handleListWords,
  handleRankOfScore,
};
