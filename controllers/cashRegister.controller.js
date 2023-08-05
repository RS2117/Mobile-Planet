const express = require('express');
const httpStatusCode = require('http-status-codes');
const router = express.Router();

const cashRegister = require('../models/cashRegister.model');


router.get('/',(req, res) => {
    cashRegister.find({},{"_id": 1,"customerName": 1,"amount": 1, "transaction": 1, "reason": 1,"balance": 1,"totalDenomination2k": 1,"totalDenomination500": 1,"totalDenomination200": 1,"totalDenomination100": 1,"totalDenomination50": 1,"totalDenomination20": 1,"totalDenomination10": 1,"totalDenomination5": 1,"totalDenomination2": 1,"totalDenomination1": 1,"createdAt": 1 }).then(docs=>{
            res.send(docs);
        }).catch(err=>{
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        })
    }).get('/:id', (req,res)=>{
        let id = req.params.id;
        cashRegister.findById(id).then(docs=>{
            res.send(docs);
        }).catch(err=>{
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        })
    }).post('/',(req,res)=>{
        const obj=req.body;
        cashRegister.create(obj).then(doc=>{
            res.status(httpStatusCode.CREATED).send(doc);
        }).catch(err=>{
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        })
    }).put('/:id', (req,res)=>{
        let id =req.params.id;
        const obj = req.body;
        cashRegister.findByIdAndUpdate(id,{
            customername:obj.customername, 
        amount: obj.amount, 
        transaction: obj.transaction ,
        balance: obj.balance ,
        price: obj.price ,
        totalDenomination2k: obj.totalDenomination2k ,
        totalDenomination500: obj.totalDenomination500 ,
        totalDenomination200: obj.totalDenomination200 ,
        totalDenomination100: obj.totalDenomination100 ,
        totalDenomination50: obj.totalDenomination50 ,
        totalDenomination20: obj.totalDenomination20 ,
        totalDenomination10: obj.totalDenomination10 ,
        totalDenomination5: obj.totalDenomination5,
        totalDenomination2: obj.totalDenomination2 ,
        totalDenomination1: obj.totalDenomination1 ,
        denomination2k: obj.denomination2k ,
        denomination500: obj.denomination500 ,
        denomination200: obj.denomination200 ,
        denomination100: obj.denomination100 ,
        denomination50: obj.denomination50 ,
        denomination20: obj.denomination20 ,
        denomination10: obj.denomination10 ,
        denomination5: obj.denomination5,
        denomination2: obj.denomination2 ,
        denomination1: obj.denomination1 ,
        })
            .then(doc=>{
                res.status(httpStatusCode.OK).send(doc);
        }).catch(err=>{
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        })
    }).delete('/:id', (req,res)=>{
        let id = req.params.id;
        cashRegister.findByIdAndDelete(id).then(docs=>{
            res.status(httpStatusCode.OK).send(docs);
        }).catch(err=>{
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        })
    });
    

module.exports = router;