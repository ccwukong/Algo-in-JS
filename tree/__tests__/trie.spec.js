const Trie = require('../trie');

describe('Test Trie', () => {
  it('Return true if a word can be found.', () => {
    const t = new Trie();
    t.add('we');
    expect(t.find('we')).toBe(true);
  });

  it('Return false if a word cannot be found.', () => {
    const t = new Trie();
    t.add('web');
    expect(t.find('we')).toBe(false);
    expect(t.find('webby')).toBe(false);
    console.log(JSON.stringify(t.root));
  });
})