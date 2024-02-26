/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { rejects } = require("assert");
const { resolve } = require("path");

function wait(n) {
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve();
        },n*1000);
    })
}
// wait(n).then(()=>{
//     return(
//         console.log("Promise is resolved after  "+n+" seconds")
//     )
// })
module.exports = wait;
