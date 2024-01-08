const dbconnect = require("./mongodb");
// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
const delete = async () => {
  const db = await dbconnect();
  const res = await db.deleteOne()
  if(res.acknowledged){
    console.log('recods deleted......')
  }
};

delete();
