const fs =require('fs');

console.log("Start Reading....");

const data =fs.readFileSync("./data/diary.txt", "utf-8");

console.log(data)