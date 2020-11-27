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
//delete
Birthday.deletememories = (req,res)=>{
    db.getDB().collection('Memories').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
        }
    })
}
// ======================================REMINDER==============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Birthday.createpassword = (req, res)=>{
    db.getDB().collection('Passwords').insertOne(req.body,(err,result)=>{
        if(err) throw err
        else{
            res.json({ status: true, message: 'succesfully created' })

        }
    })

}

Birthday.passwordrecieve  = (req, res)=>{

    db.getDB().collection('Passwords').find({UserID:req.body.UserID}).toArray((err, resul) => {
        if(err)throw err
        else{
            res.json({status:true,message:"recevued",passwordsArray:resul})
        }
    })
}
Birthday.deletesavepassword = (req,res)=>{
    db.getDB().collection('Passwords').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
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
Birthday.deletecertificates = (req,res)=>{
    db.getDB().collection('Certificates').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
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
Birthday.deleteverifications = (req,res)=>{
    db.getDB().collection('VerificationCards').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
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
Birthday.deletesavedates = (req,res)=>{
    db.getDB().collection('Savedates').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
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
Birthday.deletecontacts = (req,res)=>{
    db.getDB().collection('Contacts').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
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
Birthday.deletenotes = (req,res)=>{
    db.getDB().collection('Notes').deleteOne({UserID:req.body.UserID, _id:ObjectId(req.body.Item_ID)},(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
        }
    })
}
// ========================================================================?
Birthday.createlocker = (req,res)=>{
    db.getDB().collection('UserAccounts').updateOne({_id:ObjectId(req.body.UserID)},{ $set: { lockpassword: req.body.lockpassword,locker:"1" } },(err,result)=>{
        if(err) throw err
        else{
            res.json({status:true,message:"deleted"})
            console.log(result.ops)
        }
    })
}

//==========================================================================
module.exports = Birthday