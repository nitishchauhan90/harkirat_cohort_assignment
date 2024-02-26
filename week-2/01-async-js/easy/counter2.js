let count =0;
function counter(){    //dont pass variable in function
  count+=1;
  console.log(count);
  setTimeout(counter,1000);
}

counter();       //ek bar chalado phir settimeout chala dega