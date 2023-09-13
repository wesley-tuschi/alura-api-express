import moongoose, { mongo } from "mongoose";

async function dbConnect() {
  moongoose.connect(
    "mongodb+srv://levituschi:123@db.wcsnzel.mongodb.net/livraria?retryWrites=true&w=majority"
  );
  return moongoose.connection;
}

export default dbConnect;
