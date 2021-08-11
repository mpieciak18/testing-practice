const cipher = {
    direction: null,
    encrypt: function(string, count = 1) {
        cipher.direction = 'encryption';
        let encryptedString = '';

        for (let i = 0; i < string.length; i++) {
            const oldChar = string.charAt(i);
            const newChar = cipher.shiftChar(oldChar, count);

            encryptedString += newChar;
        };

        return encryptedString;
    },
    decrypt: function(string, count = 1) {
        cipher.direction = 'decryption';
        let decryptedString = '';

        for (let i = 0; i < string.length; i++) {
            const oldChar = string.charAt(i);
            const newChar = cipher.shiftChar(oldChar, -(count));

            decryptedString += newChar;
        };

        return decryptedString;
    },
    shiftChar: function(char, count) {
        if (cipher.isChar(char) == true) {
            const newCharCode = char.charCodeAt() + count;

            if (cipher.inRange(newCharCode) == true) {
                return String.fromCharCode(newCharCode);
            } else {
                if (cipher.direction == 'encryption') {
                    return String.fromCharCode(newCharCode - 26);
                } else {
                    return String.fromCharCode(newCharCode + 26);
                };
            };
        } else {
            return char;
        };
    },
    isChar: function(char) {
        const num = char.charCodeAt();

        return ((num >= 65 && num <= 90) || (num >= 97 && num <= 122));
    },
    inRange: function(num) {
        return ((num >= 65 && num <= 90) || (num >= 97 && num <= 122));
    }
};

module.exports = cipher;