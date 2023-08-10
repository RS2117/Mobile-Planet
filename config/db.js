const mongoose = require('mongoose');


mongoose.connect(MongoDB_Url);
mongoose.connection.on('connected',()=>{
    console.log('connected');
});
mongoose.connection.on('err',(err)=>{
    console.log(err);
});


