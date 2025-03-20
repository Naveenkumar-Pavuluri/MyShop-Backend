const express = require("express")
const User = require("./../db/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

async function getRegisterUsers(model) {
    let hashedPassword = await bcrypt.hash(model.password,10);
    let user = new User({
        name: model.name,
        email: model.email,
        password: hashedPassword,
    });
    await user.save();
}

async function getLoginUsers(model) {
    const user = await User.findOne({email:model.email});
    if(!user){
        return null;
    }
    const isMatched = await bcrypt.compare(model.password, user.password);
    if(isMatched){
        const token = jwt.sign(
            {
                id:user._id,
                name:user.name,
                email:user.email,
                isAdmin: user.isAdmin || false,
            },
            "secret",{
                expiresIn:"1hr"
            }
        );
        return {token, user};
    }else{
        return null;
    }
}

module.exports = { getRegisterUsers, getLoginUsers }