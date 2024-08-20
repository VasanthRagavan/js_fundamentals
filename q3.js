function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
}
const testString = "Sample text with digits 123, uppercase ABC, lowercase abc, and special characters !@#.";
const digitPattern = '\\d';            // Matches any digit
const uppercasePattern = '[A-Z]';      // Matches any uppercase letter
const lowercasePattern = '[a-z]';      // Matches any lowercase letter
const specialCharacterPattern = '[!@#]'; // Matches specific special characters
console.log('Digits:', findMatches(digitPattern, testString));
console.log('Uppercase Letters:', findMatches(uppercasePattern, testString));
console.log('Lowercase Letters:', findMatches(lowercasePattern, testString));
console.log('Special Characters:', findMatches(specialCharacterPattern, testString));
