const express = require('express');
const regloginRoute = express.Router();
const db = require('./database/dbmongo')
const { ObjectId } = require("mongodb");




regloginRoute.login = (req, res) => {
    console.log(req.body)
    res.json({ status: true, message: 'succesfully deleted' })
}

regloginRoute.reguser = (req, res) => {
    console.log(req.body.name)
    if (req) {
        db.getDB().collection('UserAccounts').insertOne(req.body, (err, result) => {
            if (err) throw err
            res.json({ status: true, message: 'succesfully deleted' })
        })

    }
}


module.exports = regloginRoute