const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel.js");

router.route("/book").post((req, res) => {
    const {
        station,
        returnStation,
        train,
        returnTrain,
        hours,
        minutes,
        returnHours,
        returnMinutes,
        combinedDate,
        combinedReturnDate,
    } = req.body;
    
    const booking = new Booking({
        station,
        returnStation,
        train,
        returnTrain,
        hours,
        minutes,
        returnHours,
        returnMinutes,
        combinedDate,
        combinedReturnDate
    });
    booking.save()
    res.send("Booking Saved")
})

router.route("/bookings").get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
})

module.exports = router;