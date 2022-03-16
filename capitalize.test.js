const capitalize = require('./capitalize')

it('Capitalize first letter in a single word', () =>
    expect(capitalize('test')).toBe('Test')
)

it('Capitalize first letter in a sentance', () =>
    expect(capitalize('this is a test!')).toBe('This is a test!')
)

it('Capitalize first letter in a single letter array', () =>
    expect(capitalize(['a', 'b', 'c'])).toStrictEqual(['A', 'b', 'c'])
)