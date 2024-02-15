/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in brackets) {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== char) {
                return false; npm
            }
        }
    }

    return stack.length === 0; 
}

module.exports = { isValid };


