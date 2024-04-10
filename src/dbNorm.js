require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;  
const client = new MongoClient(process.env.URI);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const adminDb = client.db().admin();
    const databasesList = await adminDb.listDatabases();
    console.log("Databases:", databasesList);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connect();
module.exports = { client, connect, ObjectId };
