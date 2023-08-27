const express = require('express');
const httpStatusCode = require('http-status-codes');
const router = express.Router();


const login = require('../models/login.model');

router.get('/:id',(req,res)=> {
    let id= req.params.id;
    login.findById(id).then(docs => {
        res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});



module.exports = router;