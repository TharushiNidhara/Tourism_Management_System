import React from 'react'
import "./my_booking.css"
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import axios from "axios"
import {

  useParams,
} from "react-router-dom";
function MyBookings() {
  const { email } = useParams();

  const [details,setDetails]=React.useState([])
  React.useEffect(() => {
    axios.get(`http://localhost:4000/booking/detail/${email}`)
    .then((res) => {
      setDetails(res.data)
      console.log(res);
    })
      .catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <div className="booking-details-container">
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href={"/HotelHomepage/" + email}>hotel</a>
          </li>
          <li>
            <a href={"/AdvaticementHomePage/" + email}>Advatice</a>
          </li>
          <li>
            <a href={"/appointmentHomepage/" + email}>Appointment</a>
          </li>
          <li>
            <a href={"/TourguideHomepage/" + email}>Guide</a>
          </li>

          <li>
            <a href={"/RoomHomePage/" + email}>Room</a>
          </li>
          <li>
            <a href={"/VehicleHomePage/" + email}>Vehicle</a>
          </li>
          <li>
            <a href={"/AyurvedicTreatmentHomePage/" + email}>Treatement</a>
          </li>
          <li>
            <a href={"/destinations/" + email}>Destination</a>
          </li>
          <li>
            <a href={"/ExperienceHomepage/" + email}>Experience</a>
          </li>
        </ul>
        <div className="profile">
          <a href={"/index/" + email}>
            <img src={image} alt="" srcset="" />
          </a>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </nav>
      <div className="booking-details-container-body">
        <div className="booking-details-wrapper">
          <label className="title-label">My Booking Details</label>
          <br />
          <br />
          <div className="booking-details-table-head">
            <div className="booking-details-table-head-col1">Hotel Name</div>
            <div className="booking-details-table-head-col2">Package Name</div>
            <div className="booking-details-table-head-col3">Check In Date</div>
            <div className="booking-details-table-head-col4">
              Check Out Date
            </div>
            <div className="booking-details-table-head-col5">Paid Amount (Rs.)</div>
            <div className="booking-details-table-head-col6">Status</div>
          </div>
          {details.map((item) => (
            <div className="booking-details-table-body">
              <div className="booking-details-table-body-col1">
                {item.hotelName}
              </div>
              <div className="booking-details-table-body-col2">
                {item.packageName}
              </div>
              <div className="booking-details-table-body-col3">
                {item.checkInDate}
              </div>
              <div className="booking-details-table-body-col4">
                {item.checkOutDate}
              </div>
              <div className="booking-details-table-body-col5">
                {" "}
                Rs {item.paidAmount}.00
              </div>
              <div className="booking-details-table-body-col6">
                {item.bookingStatus === "Approved" ? (
                  <span style={{ color: "green",fontWeight:"bold",fontSize:"15px" }}>Approved</span>
                ) : item.bookingStatus === "Pending" ? (
                  <span style={{ color: "orange",fontWeight:"bold",fontSize:"15px" }}>Pending</span>
                ) : (
                  <span style={{ color: "rgb(255, 86, 86)",fontWeight:"bold",fontSize:"15px" }}>
                    {item.bookingStatus}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default MyBookings