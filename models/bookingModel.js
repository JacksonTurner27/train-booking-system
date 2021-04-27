const mongoose = require("mongoose");

const bookingSchema = {
    station: String,
    returnStation: String,
    train: String,
    returnTrain: String,
    hours: String,
    minutes: String,
    returnHours: String,
    returnMinutes: String,
    combinedDate: String,
    combinedReturnDate: String,
}

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;