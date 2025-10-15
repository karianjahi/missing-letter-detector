/* A function to build a missing letter dectector. The function name is `fearNotLetter` which accepts one argument: a string representing a range of letters in alphabetical order which can have one letter missing. The aim is to find the missing letter range and return it. For all letters present, the function returns undefined.
*/

const fearNotLetter = (stringOfLetters) => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    
    // split letters
    letters = letters.split("");

    // capture first and last letter in stringOfLetters
    let firstLetter = stringOfLetters[0];
    let lastLetter = stringOfLetters[stringOfLetters.length-1];

    // get indices of first and last letter from letters
    const firstLetterIndex = letters.indexOf(firstLetter);
    const lastLetterIndex = letters.indexOf(lastLetter);

    // get all letters in between 
    let allLettersBetween = "";
    for (let i=firstLetterIndex; i<=lastLetterIndex; i++) allLettersBetween += letters[i] ;

    // split the between letters
    allLettersBetweenArray = allLettersBetween.split("")
        
    // split input letters
    inputLettersArray = stringOfLetters.split("");

    // get the missing letter in the sequence
    for (let letter of allLettersBetweenArray) {
        if (inputLettersArray.includes(letter)) {
            continue
        } else {
            return letter;
        }
    }
    return undefined;

} 

let stringOfLetters = "cdefghijkmnop" // we are looking for the letter l which the function should return
console.log(fearNotLetter(stringOfLetters));