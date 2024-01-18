import { connectDB } from '../../util/db';


export default async function handler(req, res) {
  const client = await connectDB();

  const db = client.db('sample_mflix'); // 데이터베이스
    
  const collection = db.collection('movies');

  const movies = await collection.find().limit(50).toArray()

  console.log('leo.test111', req.method, movies)
  
  // const database = client.db('your-database-name');
  // const collection = database.collection('your-collection-name');

  // 여기서 MongoDB 쿼리나 작업 수행

  res.status(200).json({ message: movies });
}
