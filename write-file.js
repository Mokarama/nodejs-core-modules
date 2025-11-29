/***----------Synchronously----------------- */

const fs =require("fs");

const content1 = "This is content \n nodejs is awesome!!!";
try{
    fs.writeFileSync("./output/test-sync.txt",content1);
}catch(err){
    console.log(err.message)
};




/***-----------asynchronously--------------*/
const content2=" This is a content too \n asynchronous!!! ";

fs.writeFile("./output/test-async.txt", content2,(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log("file written asynchronously");
    }
});


