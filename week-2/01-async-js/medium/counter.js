function counter(){
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let char = hours<12 ?  "AM" : "PM";
    console.log(`${hours}:${minutes}::${seconds}`)
    console.log(`${hours}:${minutes}::${seconds} ${char}`)
}
setInterval(counter,1000);