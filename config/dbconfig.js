const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDb is connected");
});

connection.on("error", () => {
  console.log("Error is connection of Mongo", error);
});

module.exports = mongoose;
