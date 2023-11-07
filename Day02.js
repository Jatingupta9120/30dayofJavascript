function capitalizeFirstLetterOfWords(inputString) {
    return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  const inputString = 'the quick brown fox';
  const result = capitalizeFirstLetterOfWords(inputString);
  console.log(result); // Output: 'The Quick Brown Fox'
  