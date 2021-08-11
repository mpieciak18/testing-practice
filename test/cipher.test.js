const cipher = require('../code/cipher');
// test encryption
test('encrypt an all lower case string, shifting 1 character forward', () => {
    expect(cipher.encrypt('abc')).toBe('bcd');
});

test('encrypt an all lower case string, shifting 5 characters forward', () => {
    expect(cipher.encrypt('abc', 5)).toBe('fgh');
});

test('encrypt a mixed case string, shifing 1 character forward', () => {
    expect(cipher.encrypt('AfLaCk')).toBe('BgMbDl');
});

test('encrypt a string containing a \'z\', shifting 1 character forward', () => {
    expect(cipher.encrypt('xyz')).toBe('yza');
});
// test decryption
test('decrypt an all lower case string, shifting 1 character backward', () => {
    expect(cipher.decrypt('bcd')).toBe('abc');
});

test('decrypt an all lower case string, shifting 5 characters backward', () => {
    expect(cipher.decrypt('fgh', 5)).toBe('abc');
});

test('decrypt a mixed case string, shifing 1 character backward', () => {
    expect(cipher.decrypt('BgMbDl')).toBe('AfLaCk');
});

test('decrypt a string containing a \'a\', shifting 1 character backward', () => {
    expect(cipher.decrypt('yza')).toBe('xyz');
});