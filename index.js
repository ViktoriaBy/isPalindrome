//Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

function isPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
  
  //isPalindrom("no")