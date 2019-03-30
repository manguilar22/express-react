const express = require("express");
const router = express.Router();

const {Pet} = require("../db/models/pet");

router.post("/",(req,res) => {
   const {type, name} = req.body;
   if(type && name){
    const post = new Pet({type:type,name:name});
    post.save()
        .then(res => res.status(200).json({status: "Successful Insertion to Pet"}))
        .catch(err => res.status(200).json({status: "Failed Insertion to Pet"}))
        .finally(() => post.db.close());
   } else {
       return res.status(400).json({status: "Format is incorrect for insertion "});
   }
});

router.get("/",(req,res) => {
    Pet.find({},(err,collection) => {
        if(err){
            return res.json({data:"collection is empty"});
        } else {
            return res.json({data:collection});
        }
    })
});

module.exports = router;