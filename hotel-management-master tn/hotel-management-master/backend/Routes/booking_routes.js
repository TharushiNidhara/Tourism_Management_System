const express = require("express");
const router = express.Router();
const {
  addNewBooking,
  getBookingDetailByEmail,
  getBookingDetail,
  updateStatus,
  getRefundDetails,
  getSummerydDetails,
} = require("../Controllers/booking_controller");

router.post("/detail/add", addNewBooking);
router.get("/detail/:email", getBookingDetailByEmail);
router.get("/detail", getBookingDetail);
router.put("/request/:status/:id", updateStatus);
router.get("/booking/refund/details", getRefundDetails);
router.get("/hotel/summery/details", getSummerydDetails);

module.exports = router;
