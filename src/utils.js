const allKanjiByGrade = require('./kanji.json');

const allKanji = allKanjiByGrade.reduce((all, grade) => ([...all, ...grade.kanji]), []);

const findKanjiCharacter = kanjiCharacter =>
  allKanji.find(kanji => kanji.character === kanjiCharacter);

const getKanjiByGrade = grade => allKanjiByGrade.find(section => section.grade === +grade);

const findKanjiCharacterByMeaning = meaning =>
  allKanji.filter(kanji => kanji.meaning.includes(meaning));

const findKanjiCharacterByRomaji = romaji =>
  allKanji.filter(kanji => kanji.on.includes(romaji) || kanji.kun.includes(romaji));

module.exports = {
  findKanjiCharacter,
  findKanjiCharacterByMeaning,
  findKanjiCharacterByRomaji,
  getKanjiByGrade,
  allKanji,
};
