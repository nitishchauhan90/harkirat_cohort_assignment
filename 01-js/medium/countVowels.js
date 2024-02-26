/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels='AaEeIiOoUu'
  let index=str.length;
  let index2=vowels.length;
  let count=0;
  for(let i=0;i<index;i++){
    let ele=str[i];
    for(let j=0;j<index2;j++){
      if (ele===vowels[j]){
        count++;
      }
    }
  }
  return count;
}

module.exports = countVowels;