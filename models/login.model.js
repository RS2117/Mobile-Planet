const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loginSchema = new Schema({

    _id:{type:Schema.Types.ObjectId, auto:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    status:{type:String, required:true},
},{
    timestamps: true,
    versionKey: false
});

const login = mongoose.model('login',loginSchema);
module.exports = login;