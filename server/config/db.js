const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => console.log("Successfully Connected to Mongo DB"))
    .catch(error => {
        console.error("======== DB Connection Issues ========");
        console.error(error);
        console.error("======================================");
        process.exit(1);
    })
}

module.exports = dbConnect