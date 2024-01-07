const fs = require('fs');
const input = process.argv
fs.writeFileSync(input[3],input[4])
console.log(process.argv)
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);