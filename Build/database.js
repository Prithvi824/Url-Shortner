// ENV config
import dotenv from "dotenv";
dotenv.config();

import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.URI;
const dataBaseName = process.env.dataBaseName

//Client Instane
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Cached instances
let cachedClient = null;
let cachedDatabase = null;

// Function to Handle Database connection
async function connectToDatabase() {
  if (cachedClient && cachedDatabase) {
    return { client: cachedClient, db: cachedDatabase };
  }

  // Connect the client
  await client.connect();
  cachedClient = client;

  // Connect to the DataBase
  cachedDatabase = client.db(dataBaseName);

  return { client: cachedClient, db: cachedDatabase };
}

export default connectToDatabase;