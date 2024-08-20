function matchPattern(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}
console.log(matchPattern('^Hello', 'Hello, world!')); // true
console.log(matchPattern('world$', 'Hello, world!')); // true
console.log(matchPattern('\\d+', 'There are 123 apples.')); // true
console.log(matchPattern('^Hello', 'Goodbye, world!')); // false
console.log(matchPattern('\\d+', 'No numbers here!')); // false
