const express = require('express');

const app = express();

const {
  allKanji, findKanjiCharacter, findKanjiCharacterByMeaning,
  getKanjiByGrade, findKanjiCharacterByRomaji,
} = require('./utils');

const port = '4454';

app.get('/', (req, res) => {
  res.json(allKanji);
});

app.get('/grade/:grade', (req, res) => {
  const { grade } = req.params;
  if (grade > 0 && grade < 7) {
    res.json(getKanjiByGrade(grade));
  } else {
    res.status(404).json({ message: `No kanji found for the grade '${grade}'` });
  }
});

app.get('/lookup/:word', (req, res) => {
  const { word } = req.params;
  if (word) {
    res.json(findKanjiCharacterByMeaning(word));
  }
});
app.get('/romaji/:romaji', (req, res) => {
  const { romanji } = req.params;

  res.json(findKanjiCharacterByRomaji(romanji));
  
});
app.get('/kanji/:kanji', (req, res) => {
  const { kanji } = req.params;
  if (kanji) {
    res.json(findKanjiCharacter(kanji));
  }
});

app.listen(port, () => {
  console.log('listening');
});

