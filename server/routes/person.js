const router = require("express").Router();

const {Person} = require("../db/models/person");

router.post("/",(req,res) => {
  const {name,age} = req.body;
  const document = new Person({name:name,age:age});
  document.save()
      .then(res => console.log(res))
      .catch(err => console.log("Failed submission..."));
});

module.exports = router;
