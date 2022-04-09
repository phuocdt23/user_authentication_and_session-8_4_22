//connect to database using "mongodb" modules
const mongodb = require("mongodb");

const ServerClient = mongodb.MongoClient;
let database;
async function connectToDatabase() {
  const Mongodb = await ServerClient.connect("mongodb://localhost:27017");
  database = Mongodb.db("authentication_project");
}
function getDb() {
  if (!database) {
    throw { message: "failed to connect to database!" };
  } else return database;
}
module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}
