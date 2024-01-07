const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/name.txt`
//fs.writeFileSync(filePath, JSON.stringify("My name is abhishek tiwari"))

fs.readFile(filePath, (err, data) => {
  console.log(data); //<Buffer 22 4d 79 20 6e 61 6d 65 20 69 73 20 61 62 68 69 73 68 65 6b 20 74 69 77 61 72 69 22>
})

fs.readFile(filePath,'utf8',(err, data) => {
  console.log(data); //"My name is abhishek tiwari"
}
)
fs.appendFile(filePath, ' This is Node js',(err) => {
    if(!err) console.log("updated file")
})

fs.rename(filePath, `${dirPath}/detail.txt`,(err) => {
    if(!err) console.log("File renamed !")
})

fs.unlinkSync(filePath,`${dirPath}/detail.txt`)