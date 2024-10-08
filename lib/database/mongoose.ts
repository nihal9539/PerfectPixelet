import mongoose, { Mongoose } from "mongoose";

const MONGOBD_URL = process.env.MONGODB_URL;

interface MongooseConnecetion {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let cached: MongooseConnecetion = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGOBD_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGOBD_URL, {
      dbName: "PerfectPixelet",
      bufferCommands: false,
    });
    cached.conn = await cached.promise;

    return cached.conn;
};
