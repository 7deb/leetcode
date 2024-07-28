const mongoose = require('mongoose');

const databaseConnect = () =>{
    try{
        mongoose.connect(process.env.DB_URL );

        console.log("connected to the database");
    }catch(error){
        console.error("error: ",error);
        console.log("error connecting to the database");
    }
}

module.exports = databaseConnect;