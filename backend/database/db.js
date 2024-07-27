const mongoose = require('mongoose');

const databaseConnect = () =>{
    try{
        mongoose.connect(process.env.mongo_url);
        console.log("connected to the database");
    }catch(error){
        console.error("error: ",error);
        console.log("error connecting to the database");
    }
}

module.exports = databaseConnect;