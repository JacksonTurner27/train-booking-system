const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");

router.route("/users").get((req, res) => {
    
    User.find()
        .then(users => res.json(users))
})

router.route("/user").post((req, res) => {
    const {
        username,
        password,
    } = req.body;
    
    const user = new User({
        username,
        password,
    })
    res.send("User Saved")

    return user.save()
})

module.exports = router;