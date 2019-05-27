const express = require("express");
const router = express.Router();

const {User} = require("../db/models/user");

const driver = require("../db/driver");

router.post("/",(req,res) => {
   const {name,email,password} = req.body;
   const schema = {name:name,email:email,password:password};
       const user = new User(schema);
       user.save()
           .then(result => res.status(200).json({status:"Success"}))
           .catch(err => res.status(200).json({status:"Failed"}));
});

router.get("/",(req,res) => {
   User.find({},(err,collection) => {
     if (err) {
         return res.status(200).json({err:"failed fetching collection"});
     }  else {
         return res.status(200).json({accounts:collection});
     }
   });
});


module.exports = router;