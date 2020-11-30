const express = require('express');
const regloginRoute = express.Router();
const db = require('../database/dbmongo')
const { ObjectId } = require("mongodb");




regloginRoute.login = (req, res) => {
    db.getDB().collection('UserAccounts').findOne({ $or:[{name: req.body.name},{email: req.body.name,}] , password: req.body.password }, { projection: { phone: 0, name: 0, dob: 0, email: 0, password: 0 } }, (err, result) => {
        if (err)
            throw err;
        else if (result == null) {
            res.json({ status: false, message: 'INVALID_USER' })
        } else {
            res.json({ status: true, message: ' Login SUCCESS', data:result})
            console.log(result)
        }

    })
}

regloginRoute.reguser = (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password
    var phone = req.body.phone


    if (name !== '' && email !== '' && password !== '' && phone !== '') {
        db.getDB().collection('UserAccounts').insertOne(req.body, (err, result) => {
            if (err) throw err
            res.json({ status: true, message: 'succesfully Registered' })
        })
    }
    else {
        res.json({ status: false, message: 'Registration failed' })
    }
}

regloginRoute.createBday = (req,res)=>{
    console.log(req.body)
    db.getDB().collection('BirthDay').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })
}
regloginRoute.getBirthdays  = (req, res)=>{

    db.getDB().collection('BirthDay').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recevued",result:resul})
        }
    })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

regloginRoute.userlogincheck = (req, res) => {
    db.getDB().collection('UserAccounts').updateOne({ _id: ObjectId(req.body.UserID) }, { $set: { LoginTime: req.body.LoginTime } }, (err, result) => {
        if (err) throw err
        else {
            res.json({ status: true, message: "updated" })
        }
    })
}
///========================================================
regloginRoute.updatelocation = (req, res) => {
    db.getDB().collection('UserAccounts').updateOne({ _id: ObjectId(req.body.UserID) }, { $set: { latitude: req.body.latitude ,logitude:req.body.logitude,locationTime:req.body.locationTime} }, (err, result) => {
        if (err) throw err
        else {
            res.json({ status: true, message: "updated" })
        }
    })
}

// =============
regloginRoute.getuser = (req, res) => {
    db.getDB().collection('UserAccounts').find({}).sort( { LoginTime: -1 } ).toArray((err, result) => {
        if (err)
            throw err;
        else if (result == null) {
            res.json({ status: false, message: 'INVALID_Request' })
        } else {
            res.json({ status: true, message: '  SUCCESS', usersInfo:result})
            console.log(result)
        }
    })
}


module.exports = regloginRoute