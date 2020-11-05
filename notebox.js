const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();


app.use(bodyParser.json({ limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true, useUnifiedTopology: true }));
app.use(cors())



const regloginRoute = require('./register and login route');
app.use(require('./register and login route'));

app.post("/login",regloginRoute.login)


const PORT = process.env.PORT || 4200;
const server = app.listen(PORT, console.log('PORT RUNNING ON ::::::4200 :::::'))

module.exports = { server }