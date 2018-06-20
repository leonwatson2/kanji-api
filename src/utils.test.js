const {
  findKanjiCharacter,
  findKanjiCharacterByMeaning,
  findKanjiCharacterByRomaji,
  // getKanjiByGrade,
} = require('./utils');

describe('get the correct kanji for a specific character', () => {

  test('get the correct kanji for the character 外', () => {
    expect(findKanjiCharacter('外')).toEqual({
      character: '外', strokes: '5', meaning: 'outside', on: 'gai, ge', kun: 'soto, hoka, hazu-su',
    });
  });

  test('get the correct kanji for the character 土', () => {
    expect(findKanjiCharacter('土')).toEqual({
      character: '土', strokes: '3', meaning: 'soil', on: 'do, to', kun: 'tsuchi',
    });
  });
  
  test('get the correct kanji for the character 里', () => {
    expect(findKanjiCharacter('里')).toEqual({
      character:'里', strokes: '7', meaning: 'hometown', on: 'ri', kun: 'sato'});
  });
  
});

describe('gets kanji who\'s meaning includes a word', () => {
  
  test('gets kanji who\'s meaning includes soil', () => {
    expect(findKanjiCharacterByMeaning('soil')).toContainEqual({
      character: '土', strokes: '3', meaning: 'soil', on: 'do, to', kun: 'tsuchi',
    });
  });

  test('gets kanji who\'s meaning includes song', () => {
    expect(findKanjiCharacterByMeaning('song')).toContainEqual({
      character: '歌', strokes: '14', meaning: 'song', on: 'ka', kun: 'uta'
    });
  });

  test('gets kanji who\'s meaning includes home', () => {
    expect(findKanjiCharacterByMeaning('home')).toContainEqual({
      character: '宅', strokes: '6', meaning: 'home', on: 'taku', kun: 'ie'
    });
  });

});


describe('gets kanji who\'s prononciation includes a certain romaji', () => {
  test('gets kanji who\'s meaning includes soil', () => {
    expect(findKanjiCharacterByRomaji('to')).toContainEqual({
      character: '土', strokes: '3', meaning: 'soil', on: 'do, to', kun: 'tsuchi',
    });
  });

  test('gets kanji who\'s meaning includes song', () => {
    expect(findKanjiCharacterByRomaji('uta')).toContainEqual({
      character: '歌', strokes: '14', meaning: 'song', on: 'ka', kun: 'uta'
    });
  });

  test('gets kanji who\'s meaning includes home', () => {
    expect(findKanjiCharacterByRomaji('taku')).toContainEqual({
      character: '宅', strokes: '6', meaning: 'home', on: 'taku', kun: 'ie'
    });
  });

  test('gets kanji who\'s meaning includes home', () => {
    expect(findKanjiCharacterByRomaji('taku')).toContainEqual({
      character: '宅', strokes: '6', meaning: 'home', on: 'taku', kun: 'ie'
    });
  });

})