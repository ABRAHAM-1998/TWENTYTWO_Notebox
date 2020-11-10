const express = require('express');
const Birthday = express.Router();
const db = require('../database/dbmongo')
const { ObjectId } = require("mongodb");

Birthday.createBday = (req,res)=>{
    console.log(req.body)
    db.getDB().collection('BirthDay').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })
}
Birthday.getBirthdays  = (req, res)=>{

    db.getDB().collection('BirthDay').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recevued",result:resul})
        }
    })
}
Birthday.deleteBirthday = (req,res)=>{
    db.getDB().collection('BirthDay').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
        }
    })
}

module.exports = Birthday