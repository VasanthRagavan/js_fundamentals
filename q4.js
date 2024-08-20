function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = regex.exec(str);
    if (match) {
        return {
            fullMatch: match[0],
            groups: match.slice(1)
        };
    }
    return null;
}
const datePattern = '(\\d{2})/(\\d{2})/(\\d{4})'; 
const testString = 'The event is scheduled for 25/08/2024.';
const result = extractGroups(datePattern, testString);
console.log('Full Match:', result ? result.fullMatch : 'No match');
console.log('Day:', result ? result.groups[0] : 'N/A');
console.log('Month:', result ? result.groups[1] : 'N/A');
console.log('Year:', result ? result.groups[2] : 'N/A');
