const express = require ("express")
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("This is a form")
});

router.get('/operations/:first/:second'(req,res)=>{
    const sum = Number(req.parameter1.first) + Number(req.parameter2.second);

})


module.exports = router