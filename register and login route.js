const express = require('express');
const regloginRoute = express.Router();


regloginRoute.login = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    
}


module.exports = regloginRoute