function isPalindrome(word) {
  // Write your algorithm here - function that isPalindrome
  if(word.split('').reverse().join('') === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here\
  // Need a function that will return true or false if the word 'isPalindrome'
  // that is, if it reads the same forwards and backwards
  // Ex: `"bob"` or `"tacocat"`
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;