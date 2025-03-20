const express = require("express");
const router = express.Router();
const {getRegisterUsers, getLoginUsers} = require("./../handlers/user-handler")

router.post("/register",async (req,res)=>{
    let model = req.body;
    if(model.name && model.password && model.email){
        await getRegisterUsers(model);
        res.send({message:"User registered"});
    }else{
        res.status(400).json({
            error:"Please provide name, email and password"
        })
    }
})

router.post("/login",async(req,res)=>{
    let model = req.body;
    if(model.email && model.password){
        const result = await getLoginUsers(model);
        if(result)
        {
            res.send(result);
        }
        else{
            res.status(400).json({
                message:"email or Password is incorrect"
            })
        }
    }else
    {
        res.status(400).json({
            message:"Please provide email and password"
        })
    }
})
router
module.exports = router;