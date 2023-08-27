const express = require('express');
const httpStatusCode = require('http-status-codes');
const router = express.Router();

const product = require('../models/product.model');
const cashRegister = require('../models/cashRegister.model');


router.get('/',(req, res) => {
product.find({},{"_id": 1,"name": 1,"category": 1, "brand": 1, "model": 1,"price": 1 , "quantity": 1}).then(docs=>{
        res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
}).get('/:id', (req,res)=>{
    let id = req.params.id;
    product.findById(id).then(docs=>{
        res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
}).post('/',(req,res)=>{
    const obj=req.body;
    product.create(obj).then(doc=>{
        res.status(httpStatusCode.CREATED).send(doc);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
}).put('/:id', (req,res)=>{
    let id =req.params.id;
    const obj = req.body;
    product.findByIdAndUpdate(id,{
        name:obj.name, 
        category: obj.category, 
        brand: obj.brand ,
        model: obj.model ,
        price: obj.price ,
        quantity: obj.quantity,
        created_at: obj.created_at ,
        description: obj.description ,
        updated_at: obj.updated_at ,
        tv_screen_size: obj.tv_screen_size ,
        case_quality: obj.case_quality ,
        case_for_mobile: obj.case_for_mobile ,
        ac_ton: obj.ac_ton ,
        speaker_type: obj.speaker_type,
        mob_IMEI: obj.mob_IMEI ,
        mob_RAM_ROM: obj.mob_RAM_ROM ,
        mob_color: obj.mob_color ,
        mob_image: obj.mob_image ,
        mob_condition_type: obj.mob_condition_type ,
        sellername_detail_snd_exchng: obj.sellername_detail_snd_exchng ,
        })
        .then(doc=>{
            res.status(httpStatusCode.OK).send(doc);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
}).delete('/:id', (req,res)=>{
    let id = req.params.id;
    product.findByIdAndDelete(id).then(docs=>{
        res.status(httpStatusCode.OK).send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});

module.exports = router;