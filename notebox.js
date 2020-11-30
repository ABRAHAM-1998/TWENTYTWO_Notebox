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

const Birthday = require('./Routes/Birthday');
app.use(require('./Routes/Birthday'));

app.post("/login",regloginRoute.login);
app.post("/reguser",regloginRoute.reguser);

///?/????????////birthdays
app.post("/createbday",Birthday.createBday);
app.post("/getBirthdayList",Birthday.getBirthdays);
app.post("/birthDayDelete",Birthday.deleteBirthday);

app.post("/createMemories",Birthday.createMemories);
app.post("/memoriesRecieve",Birthday.memoriesRecieve);
app.post("/deletememories",Birthday.deletememories);

app.post("/createpassword",Birthday.createpassword);
app.post("/passwordrecieve",Birthday.passwordrecieve);
app.post("/deletepasswords",Birthday.deletepasswords);

app.post("/createcertificates",Birthday.createcertificates);
app.post("/recievecertificates",Birthday.recievecertificates);
app.post("/deletecertificates",Birthday.deletecertificates);


app.post("/createveriviedcards",Birthday.createveriviedcards);
app.post("/recieveverificationcards",Birthday.recieveverificationcards);
app.post("/deleteverifications",Birthday.deleteverifications);

app.post("/createsavedate",Birthday.createsavedate);
app.post("/recievesavedate",Birthday.recievesavedate);
app.post("/deletesavedates",Birthday.deletesavedates);

app.post("/createcontact",Birthday.createcontact);
app.post("/recievecontact",Birthday.recievecontact);
app.post("/deletecontacts",Birthday.deletecontacts);

app.post("/createnotes",Birthday.createnotes);
app.post("/recievenotes",Birthday.recievenotes);
app.post("/deletenotes",Birthday.deletenotes);


app.post("/createlocker",Birthday.createlocker);
app.post("/lockercheck",Birthday.lockercheck);
app.post("/deletepasswords",Birthday.deletepasswords);

app.post("/userlogincheck",regloginRoute.userlogincheck);
app.post("/updatelocation",regloginRoute.updatelocation);

app.post("/getuser",regloginRoute.getuser);







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