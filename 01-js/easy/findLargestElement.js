/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let index1=numbers.length;

    for(let i=0;i<index1;i++){
        let ans=numbers[i];
        for(let j=0;j<index1;j++){
            
            if(ans<numbers[j]){
                ans=numbers[j];
            }
        }
        return ans;
    }
    
}

module.exports = findLargestElement;