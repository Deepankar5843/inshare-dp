require('dotenv').config();
 
const mongoose = require("mongoose");



function connectDB() {
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
};

mongoose
.connect(process.env.MONGO_CONNECTION_URL, connectionParams)
.then(() => {
    console.info("Connected to the DB");
})
.catch((err) => {
    console.log("Error:", err);
})
}
module.exports = connectDB;

