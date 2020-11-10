const express = require('express');
const bodyParser = require("body-parser");
const db = require('./database/dbmongo');

var cors = require('cors')
const app = express();


app.use(bodyParser.json({ limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true, useUnifiedTopology: true }));
app.use(cors())



const regloginRoute = require('./Routes/register and login route');
app.use(require('./Routes/register and login route'));

// const Birthday = require('./Routes/Birthday');
app.use(require('./Routes/Birthday'));

app.post("/login",regloginRoute.login);
app.post("/reguser",regloginRoute.reguser);

///?/????????////birthdays
app.post("/createbday",Birthday.createBday);
app.post("/getBirthdayList",Birthday.getBirthdays)

//PORT
const PORT = process.env.PORT || 4202;
const server = app.listen(PORT, console.log('PORT RUNNING ON ::::::4200 :::::'))

//DATABASE CONNNECTION
db.connect((err) => {
    if (err) {
      console.log('unable to connect to database');
      process.exit(1);
    }
  
    else {
  
      console.log('CONNECTED TO MONGO :::27017::::');
    }
  });

module.exports = { server }