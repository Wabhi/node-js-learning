const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,"data")

for( i = 0; i <5;i++){
    fs.writeFileSync(dirPath+"mango"+i+".txt",'apple flie')
}

fs.readdir(dirPath,((err, files) =>{
    files.forEach(item => console.log)
}))