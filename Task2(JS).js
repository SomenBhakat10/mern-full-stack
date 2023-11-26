function sortStringAlphabetically(inputString) {
    const sortedString = inputString.split('').sort().join('');
    return sortedString;
}


const stringa = prompt("Please enter a string");
const sorted = sortStringAlphabetically(stringa);
console.log("The alphabetical order is ",sorted);
