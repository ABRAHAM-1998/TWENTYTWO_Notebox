const express = require('express');
const regloginRoute = express.Router();
const db = require('./database/dbmongo')
const { ObjectId } = require("mongodb");




regloginRoute.login = (req, res) => {
    console.log(req.body)
    db.getDB().collection('logindata').insertOne(req.body)

    res.send(req.body)
    
}

regloginRoute.reguser = (req,res) =>{
    console,log(req.body.name)
    res.json({ status: true, message: 'succesfully deleted' })
}


module.exports = regloginRoute