const calculator = require('../code/calculator');

test('add two numbers', () => {
    expect(calculator.add(4, 7)).toBe(11);
});

test('subtract the 2nd number from the 1st', () => {
    expect(calculator.subtract(16, 4)).toBe(12);
});

test('multiply two numbers', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});

test('divide the 1st number by the 2nd', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});