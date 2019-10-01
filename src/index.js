const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function trimZeroes(string) {
    let cutString;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '0') {
            cutString = string.slice(i);

            return cutString;
        }
    }
}

function digitsToMorse(string) {
    let morseCode = '';

    for (let i = 1; i < string.length; i += 2) {
        if (string[i] === '0') {
            morseCode += '.';
        } else {
            morseCode += '-';
        }
    }

    return morseCode;
}


function decode(expr) {
    let finalString = '';

    for (let i = 0; i < expr.length; i += 10) {
        let subString = expr.substring(i, i + 10);
        if (subString[0] === '*') {
            finalString += ' ';
        } else {
            subString = digitsToMorse(trimZeroes(subString));
            finalString += MORSE_TABLE[subString];
        }
    }

    return finalString;
}

module.exports = {
    decode
};