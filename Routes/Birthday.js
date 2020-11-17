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
// ==============================MEMORIESSSSSSSS==================<>>>>>>>>>>>>>>>>>

Birthday.createMemories = (req, res)=>{
    db.getDB().collection('Memories').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })

}

Birthday.memoriesRecieve  = (req, res)=>{

    db.getDB().collection('Memories').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recevued",memories:resul})
        }
    })
}
// ======================================REMINDER==============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Birthday.createreminder = (req, res)=>{
    db.getDB().collection('Reminders').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })

}

Birthday.reminderecieve  = (req, res)=>{

    db.getDB().collection('Reminders').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recevued",Reminder:resul})
        }
    })
}

// +++++++++===========================CERTIFICATES========================>>>>
Birthday.createcertificates = (req, res)=>{
    db.getDB().collection('Certificates').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })

}

Birthday.recievecertificates  = (req, res)=>{

    db.getDB().collection('Certificates').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"certificates inserted",certificates:resul})
        }
    })
}
// +++++++++++++++++++++++++=================VERIFICATION CARDS====>>
Birthday.createveriviedcards = (req, res)=>{
    db.getDB().collection('VerificationCards').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully done' })

        }
    })

}
Birthday.recieveverificationcards  = (req, res)=>{

    db.getDB().collection('VerificationCards').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recieveverificationcards ",verified:resul})
        }
    })
}
// ========================SAVE THE DATE ++=====================
Birthday.createsavedate = (req, res)=>{
    db.getDB().collection('Savedates').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully done' })

        }
    })

}
Birthday.recievesavedate  = (req, res)=>{

    db.getDB().collection('Savedates').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"Savedates ",saveDateClasData:resul})
        }
    })
}
// +===================== CONTACTS ========================
Birthday.createcontact = (req, res)=>{
    db.getDB().collection('Contacts').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully done' })

        }
    })

}
Birthday.recievecontact  = (req, res)=>{

    db.getDB().collection('Contacts').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"Contacts ",contacts:resul})
        }
    })
}
// ======================NOTES +==========================
Birthday.createnotes = (req, res)=>{
    db.getDB().collection('Notes').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully done' })

        }
    })

}
Birthday.recievenotes  = (req, res)=>{

    db.getDB().collection('Notes').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"Notes ",Notes:resul})
        }
    })
}
// ========================================================================?
module.exports = Birthday