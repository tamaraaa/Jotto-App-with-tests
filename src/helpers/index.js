export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  console.log(typeof guessedLetterSet);
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
};
