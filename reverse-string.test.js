const reverseStr = require('./reverse-string')

it('Reversed word', () =>
    expect(reverseStr('word')).toBe('drow')
    )

it('Reversed a sentence', () =>
    expect(reverseStr('This is a word!')).toBe('!drow a si sihT')
    )