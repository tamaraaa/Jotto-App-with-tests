const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fileContents = fs.readFileSync('./five-letter-words.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
  // select a random word
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]

  // return it as the response
  res.send(word)
})


app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;