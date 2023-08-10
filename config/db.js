const mongoose = require('mongoose');

const mongoDB_Url = process.env.mongoDB_Url;

mongoose.connect(config.DB,{ useMongoClient:true });
mongoose.connect(mongoDB_Url);
mongoose.connection.on('connected',()=>{
    console.log('connected');
});
mongoose.connection.on('err',(err)=>{
    console.log(err);
});


