const dbconnect = require('./mongodb')
// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
const insert = async ()=>{
    const db = await dbconnect();
    const res = await db.insert([
      {
        name: "xyz",
        modal: "abc",
        brand: "uyc",
        price: "rhdhdhh",
      },
      {
        name: "xyz",
        modal: "abc",
        brand: "uyc",
        price: "rhdhdhh",
      },
    ]);
    if(res.acknowledge){
 console.log("insert data.....", res);
    }
   
}

insert()