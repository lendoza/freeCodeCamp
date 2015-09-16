function palindrome(str) {
  var str = str.toLowerCase().match(/\w/g).join("");
  var reverse = str.split('').reverse().join('');
  if (str === reverse) {
     return true;
  }
  else {
     return false;
  }
}

palindrome("eye");