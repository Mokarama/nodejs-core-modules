const fs=require('fs');

fs.writeFileSync("./output/temp.txt", "This is a temp file");
console.log("temp file created");

if(fs.existsSync("./output/temp.txt")){
    console.log("file exits!!!");

    fs.unlinkSync('./output/temp.txt');
    console.log("file deleted")
};

/*** */

try{
    fs.unlinkSync('./output/temp-file.txt');
}
catch(error){
    console.log("ERROR :", error.message)
};


/*********async */

fs.writeFile('./output/temp2.txt', "Another temp file", (err)=>{
    if(err) return console.error(err.message);

    fs.unlink("./output/temp2.txt",(err)=>{
        if(err){
            console.error("ERROR :", err.message)
        }
        else{
            console.log("Temp2 deleted")
        }
    });
})