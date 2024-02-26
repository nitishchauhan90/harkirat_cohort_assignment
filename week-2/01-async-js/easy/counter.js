let count = 0;
function counter(){    //dont pass variable in function
    count+=1;
    console.log(count);
}
setInterval(counter,1000);