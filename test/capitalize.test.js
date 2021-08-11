const capitalize = require('../code/capitalize');

test('capitalizes first letter', () => {
    expect(capitalize('sun')).toBe('Sun');
})