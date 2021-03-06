import { connect } from "mongoose";

async function dbConnect() {
  try {
    await connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("@@@ mongodb connected ...");
  } catch (error) {
    console.error(`$$$ mongodb connection failed!!=> ${error.message}`);
  }
}

export default dbConnect;
