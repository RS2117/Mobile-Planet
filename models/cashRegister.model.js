const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashRegisterSchema = new Schema({
    customerName:{type:String, require:true},
    amount:{type:Number, required:true},
    transaction:{type:String},
    reason:{type:String, required:true},
    createdAt:{type:Date},
    balance:{type:String},
    totalDenomination2k:{type:String},
    totalDenomination500:{type:String},
    totalDenomination200:{type:String},
    totalDenomination100:{type:String},
    totalDenomination50:{type:String},
    totalDenomination20:{type:String},
    totalDenomination10:{type:String},
    totalDenomination5:{type:String},
    totalDenomination2:{type:String},
    totalDenomination1:{type:String},
    denomination2k:{type:String},
    denomination500:{type:String},
    denomination200:{type:String},
    denomination100:{type:String},
    denomination50:{type:String},
    denomination20:{type:String},
    denomination10:{type:String},
    denomination5:{type:String},
    denomination2:{type:String},
    denomination1:{type:String},
},{
    timestamps: true,
    versionKey: false
});

const cashRegister = mongoose.model('cashRegister',cashRegisterSchema);
module.exports = cashRegister;