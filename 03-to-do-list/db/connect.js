import mongoose from "mongoose";

// export default function connectDB(url) {
//   return mongoose.connect(url);
// }

const connectDB = (url) => mongoose.connect(url);
export default connectDB;
