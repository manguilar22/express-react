const express = require("express");
const router = express.Router();

const {Pet} = require("../db/models/pet");

router.post("/",(req,res) => {
    const {name,type,image} = req.body;
    const schema = {name:name,type:type,image:image};
    const pet = new Pet(schema);
    console.log(schema);
    pet.save()
        .then(result => res.status(200).json({status:"successful submission",schema:schema}))
        .catch(err => res.status(200).json({status:"failed, check format"}));
});

router.get("/",(req,res) => {

    Pet.find({})
        .then(collection => res.status(200).json({data:collection}))
        .catch(err => res.status(400).json({data:"collection is empty"}));

});

router.route("/name/:name").get((req,res) => {
    const {name} = req.params;
    const query = {name:name};
    Pet.findOne(query)
        .then(pet => res.status(200).json(pet))
        .catch(err => res.status(400).json(err));
});


router.route("/type/:type").get((req,res) => {
   const {type} = req.params;
   const query = {type:type};
   Pet.find(query)
       .then(pet => res.status(200).json({pets:pet}))
       .catch(err => res.json(400).json({status:"Not Found",err:err}));
});

module.exports = router;