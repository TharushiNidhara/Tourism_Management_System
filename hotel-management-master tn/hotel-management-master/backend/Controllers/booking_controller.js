const BookingSave = require("../Models/booking_model");

const addNewBooking = (req, res, next) => {
  const data = req.body;
  let saveDetails = new BookingSave(data);
  saveDetails
    .save()
    .then((data) => {
      res.status(200).send({ message: "Booking saved successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Service Unavailable!" });
    });
};
const getBookingDetailByEmail = (req, res, next) => {
  let emails = req.params.email;
  console.log(emails);
  BookingSave.find({ customerEmail: emails })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Service Unavailable!" });
    });
};
const getBookingDetail = (req, res, next) => {
  let emails = req.params.email;
  console.log(emails);
  BookingSave.find({
    $or: [{ bookingStatus: "Pending" }, { bookingStatus: "Approved" }],
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Service Unavailable!" });
    });
};
const updateStatus = (req, res, next) => {
  let bid = req.params.id;
  let newStatus = req.params.status;
  console.log(bid);
  BookingSave.findOneAndUpdate(
    { _id: bid },
    {
      bookingStatus: newStatus,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Service Unavailable!" });
    });
};

const getRefundDetails = (req, res, next) => {
  BookingSave.find({ bookingStatus: "Refunded" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Service Unavailable!" });
    });
};
const getSummerydDetails = (req, res, next) => {
  let pending = 0;
  let approved = 0;
  let refund = 0;
  let reject=0;

  BookingSave.find()
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].bookingStatus == "Pending") {
          pending = pending + parseInt(data[i].paidAmount);
        } else if (data[i].bookingStatus == "Approved") {
          approved = approved + parseInt(data[i].paidAmount);
        } else if (data[i].bookingStatus == "Refunded") {
          refund = refund + parseInt(data[i].paidAmount);
        }
        // else if (data[i].bookingStatus == "Rejected") {
        //   reject = reject + parseInt(data[i].paidAmount);
        // }
      }
      res
        .status(200)
        .send({ pending: pending, approved: approved, refund: refund,reject:reject });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internal Server Error!" });
      return null;
    });
};

module.exports = {
  addNewBooking: addNewBooking,
  getBookingDetailByEmail: getBookingDetailByEmail,
  getBookingDetail: getBookingDetail,
  updateStatus: updateStatus,
  getRefundDetails: getRefundDetails,
  getSummerydDetails: getSummerydDetails,
};
