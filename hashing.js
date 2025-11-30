// password123;
//ifififffki1564fdfh89ysf


const crypto=require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash =crypto.createHash("md5").update("password123").digest("hex");//not recommended
console.log("input: password123");
console.log("MD5 HasedPassword: ", md5Hash);


const sha256Hash=crypto.createHash('sha256')
    .update('password123')
    .digest("hex")
console.log("input: password123");
console.log("SHA256 HashedPassword: ", sha256Hash);

const sha512Hash=crypto.createHash('sha512')
    .update('password123')
    .digest("hex")
console.log("input: password123");
console.log("SHA256 HashedPassword: ", sha512Hash);

console.log(2 ** 32 / 10 ** 9);