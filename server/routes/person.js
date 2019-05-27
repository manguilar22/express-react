const router = require("express").Router();

const {Person} = require("../db/models/person");

router.post("/",(req,res) => {
  const {name,age} = req.body;
  const person = new Person({name:name,age:age});
    person.save()
        .then(res => res.status(200).json({status: "Failed insertion to database"}))
        .catch(err => res.status(400).json({status: "Successful insertion to database"}));
});

router.get("/",(req,res) => {
  Person.find({})
      .then(collection => res.status(200).json({data:collection}))
      .catch(err => res.status(200).json({data:"empty"}));
});

module.exports = router;
