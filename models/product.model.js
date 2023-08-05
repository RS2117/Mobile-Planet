const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    brand:{type:String, required:true},
    model:{type:String, required:true},
    price:{type:String, required:true},
    description   : { type: String},
    tv_screen_size   :{type:String},
    case_quality : {type:String },
    case_for_mobile : {type:String},
    ac_ton : {type:String},
    speaker_type : {type : String},
    mob_IMEI : {type : String},
    mob_RAM_ROM : {type : String},
    mob_color: {type : String},
    mob_image : {type : String},
    mob_condition_type : {type : String},
    sellername_detail_snd_exchng : {type : String},


},{
    timestamps: true,
    versionKey: false
});

const product = mongoose.model('product',productSchema);
module.exports = product;