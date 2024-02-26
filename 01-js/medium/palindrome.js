/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const a=str.toLowerCase();
  // const c=a.replace(/,|.|?|!|/gi,"");
  // const d=c.trim();
  // const b=d.split('').reverse().join('');
  // if(d===b){
  //   return true;
  // }
  // else{
  //   return false;
  // }
  
  str = str.toLowerCase().replace(/(\W)|(_)/g,"").split("");
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 -i]) {
      return false;
      }
    }
    return true;
  

  
}

module.exports = isPalindrome;
