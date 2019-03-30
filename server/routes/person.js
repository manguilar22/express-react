const router = require("express").Router();

const {Person} = require("../db/models/person");

router.post("/",(req,res) => {
  const {name,age} = req.body;
  const person = new Person({name:name,age:age});
    person.save()
        .then(res => res.status(200).json({status: "successful insertion to database"}))
        .catch(res => res.status(400).json({status: "Failed insertion to database"}));
});

router.post("/test",(req,res) => {
  const {name,age} = req.body;
  if(name && age){
    res.status(200).json({
        status: 200,
        post: `Name:\t${name}\tAge:\t${age}`
    });
  }else{
    res.status(400).json({status: "Fail"});
  }
});

module.exports = router;
