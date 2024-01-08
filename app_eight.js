const {MongoClient} = require('mongodb')

const url= 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function getDataBase(){
    let result = await client.connect()
    let db = result.db("E-COMMERCE")
   return  db.collection("PRODUCTS")
    // let data = await collection.find({}).toArray()
    // console.log(data)
}

//console.log(getDataBase())
getDataBase().then((res)=>{
//   console.log(res)
res.find().toArray().then((data)=>{
   console.log(data)
})
})