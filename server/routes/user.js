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


router.get("/:id", async (req,res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if(!user){
            throw new Error("error");
        }
        return res.status(200).json(user);
    }catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;