import mongoose from "mongoose";

export interface BlogProps {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const MONGODB_URI = process.env.MONGODB_URI!;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Application is connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;

// EXAMPLE FROM GITHUB
// declare global {
//   var mongoose: any // This must be a `var` and not a `let / const`
// }

// const MONGODB_URI = process.env.MONGODB_URI!

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }
//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

// export default dbConnect
