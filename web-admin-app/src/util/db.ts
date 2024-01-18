
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI

let cachedClient: MongoClient;

export async function connectDB() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri);

  cachedClient = client;
  return client;
}