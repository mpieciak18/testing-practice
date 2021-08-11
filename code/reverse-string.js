const reverseString = function(string) {
    let stringReversed = '';

    for (let i = 0; i < string.length; i++) {
        stringReversed += `${string.charAt(string.length - (i + 1))}`
    }

    return stringReversed
};

module.exports = reverseString;