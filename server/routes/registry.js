const router = require("express").Router();

const dummyData = [];

router.post("/",(req,res) => {
  const {name,age} = req.body;
  if(name && age){
    const d = {name:name,age:age};
    dummyData.push(d);
    return res.status(202).json(d);
  } else {
    return res.status(400).json({"error":"check format"});
  }
});

router.get("/",(req,res) => res.json({registry:dummyData}));

module.exports = router;