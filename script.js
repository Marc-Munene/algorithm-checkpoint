function analyzeSentence(sentence) {
    let length = 0; 
    let words = 0; 
    let vowels = 0; 

    let inWord = false; // To track if currently inside a word

    // Iterate through each character
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Stop processing when a period is encountered
        if (char === '.') {
            break;
        }

        // Count the character
        length++;

        // Check if the character is a vowel
        if ('aeiouAEIOU'.includes(char)) {
            vowels++;
        }

        // Check if the character is part of a word
        if (char !== ' ' && !inWord) {
            inWord = true; // Entering a word
            words++;
        } else if (char === ' ') {
            inWord = false; // Exiting a word
        }
    }

    // Output the results
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words: ${words}`);
    console.log(`Number of vowels: ${vowels}`);
}

// Example usage
const sentence = "Hello world, this is a test sentence.";
analyzeSentence(sentence);
