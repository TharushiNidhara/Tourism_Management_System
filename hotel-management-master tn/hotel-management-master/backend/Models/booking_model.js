const mongoose = require("mongoose");

let currentDate = new Date();
let dateTime =
  currentDate.getDate() +
  "/" +
  (currentDate.getMonth() + 1) +
  "/" +
  currentDate.getFullYear()


const bookingSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: String,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerContact: {
    type: String,
    required: true,
  },
  paidAmount: {
    type: String,
    required: true,
  },
  bookingStatus: {
    type: String,
    default: "Pending",
  },
  bookedDate: {
    type: String,
    default: dateTime,
  },
});

const BookingRating = new mongoose.model("booking", bookingSchema);

module.exports = BookingRating;
