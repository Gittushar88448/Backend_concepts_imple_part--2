const mongoose = require('mongoose')
require('dotenv').config();

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connection established ");
    })
    .catch((error)=>{
        console.error(error);
        console.log('Error Occurred !');
        process.exit(1);
    })
}

module.exports = dbConnect;