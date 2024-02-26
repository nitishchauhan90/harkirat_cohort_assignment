/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let output=[];
  let index1=transactions.length;
  for(let i=0;i<index1;i++){
    categoryflag = false ;
    index2=output.length;
    for(let j=0;j<index2;j++){
      if(output[j]['category']===transactions[i]['category']){
        output[j]['totalSpent']=output[j]['totalSpent'] + transactions[i]['price'];
        categoryflag=true;
        break;
      }
    }
    if (categoryflag == false) {
      output.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"]
      })
    }
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
