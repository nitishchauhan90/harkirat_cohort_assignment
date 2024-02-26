const { isUtf8 } = require("buffer");
const fs = require("fs");

const filereader = async(filepath)=>{
    try{
        const filedata=fs.readFileSync(filepath,"utf-8");
        filedata.trim();
        console.log(filedata);
    }catch(e){
        throw new Error(`Error`);
    }
}
