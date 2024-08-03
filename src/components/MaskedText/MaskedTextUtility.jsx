export function getAllCharacters(word, usedLetters) {
    // This function will return a string with all the characters of the word that have been guessed so far
    usedLetters = usedLetters.map(letter => letter.toUpperCase()); // ['b', 'e'] -> ['B', 'E']
    const guessedLetters = new Set(usedLetters); // {'B', 'E'}
    const characters = word.toUpperCase().split('').map(char => {
        if (guessedLetters.has(char)) {
            return char;
        }
        return '_';
    }); // ['_', '_', '_', 'B', '_', 'E']
    return characters.join(''); // ___B_E
}