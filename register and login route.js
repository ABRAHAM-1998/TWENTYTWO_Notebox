const express = require('express');
const regloginRoute = express.Router();
const db = require('./database/dbmongo')
const { ObjectId } = require("mongodb");




regloginRoute.login = (req, res) => {
    console.log(req.body)
    res.json({ status: true, message: 'succesfully deleted' })
}

regloginRoute.reguser = (req, res) => {
   var name = req.body.name
    var email = req.body.email
    var password  = req.body.password
    var phone = req.body.phone

    
    if (name !== ''&& email !== ''&& password !== ''&& phone !== ''){
        db.getDB().collection('UserAccounts').insertOne(req.body, (err, result) => {
            if (err) throw err
            res.json({ status: true, message: 'succesfully Registered' })
        })
    }
    else{
        res.json({ status: false, message: 'Registration failed' })
    }
}

module.exports = regloginRoute