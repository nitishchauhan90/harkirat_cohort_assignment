const fs = require("fs");

const fileReader = async (filePath) => {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
  
    //expensive operation after file reading
    let a = 1;
    for (let index = 0; index < 1111111; index++) {
      a += index;
    }
    console.log(fileData);
  } catch (error) {
    console.log("Error occurred while reading");
  }
};

fileReader("file path");



//write section

fs.writeFile("write.txt", "this is file data", (err) => {
  if (err) throw err;
});