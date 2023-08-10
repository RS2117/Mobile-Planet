const mongoose = require('mongoose');

const mongoDB_Url = process.env.mongoDB_Url;

const connectDB = async () =>{
try {
    await mongoose.connect(mongoDB_Url);
    mongoose.connection.on('connected',()=>{
        console.log('connected');
    });
}catch(error){
    mongoose.connection.on('err',(err)=>{
        console.log(err);
    });

}
};

module.exports =connectDB;



