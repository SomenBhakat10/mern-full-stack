function reverseNumber(number) {
   
    const isNegative = number < 0;


    const positiveNumber = isNegative ? -number : number;


    const reversedString = positiveNumber.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);

   
    return isNegative ? -reversedNumber : reversedNumber;
}

const num=prompt("Enter the number")
const reversed = reverseNumber(num);
console.log("The reversed number is",reversed); 
