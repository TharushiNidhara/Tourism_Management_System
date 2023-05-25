import React from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import payment from "../images/pngwing.com (2).png";
import payment2 from "../images/pngwing.com (3).png";
import payment3 from "../images/pngwing.com (4).png";
import "./room_detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function RoomDetails() {
 const { email, hotelName } = useParams();

  const [cidate, setCIDate] = React.useState("");
  const [codate, setCODate] = React.useState("");
  const [ciTime, setCITime] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [cName, setCName] = React.useState("");
  const [pName, setPName] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const [chname, setchname] = React.useState("");
  const [cnumber, setcnumber] = React.useState("");
  const [expMonth, setexpMonth] = React.useState("");
  const [expYear, setexpYear] = React.useState("");
  const [cvc, setcvc] = React.useState("");

  const dayCalculate = (ciDate, coDate) => {
    let date_1 = new Date(ciDate);
    let date_2 = new Date(coDate);
    let difference = date_1.getTime() - date_2.getTime();
    let Days = Math.ceil(difference / (1000 * 3600 * 24));
    console.log(Days);
    return Days;
  };

// interface access//
  const [active, setActive] = React.useState({
    active1: true,
    active2: false,
    active3: false,
  });

  const data = {
    hotelName: hotelName,
    packageName: pName,
    checkInDate: cidate,
    checkInTime: ciTime,
    checkOutDate: codate,
    customerName: cName,
    customerEmail: email,
    customerContact: contact,
    paidAmount: amount,
  };

  // time form validation//
  const continue1 = () => {
    if (cidate === "" || codate === "" || ciTime === "") {
      alert("All the fields required!");
      return;
    }
    setActive({ active1: false });
    setActive({ active2: true });
  };

  const bookingHandler = () => {
    if (cName === "" || contact === "") {
      alert("Please Enter Billing Information!");
      return;
    }
    if (contact.trim().length !== 10) {
      alert("Enter Valid Contact Number!");
      return;
    }
    if (
      chname === "" ||
      cnumber === "" ||
      expMonth === "" ||
      expYear === "" ||
      cvc === ""
    ) {
      alert("All the fields required!");
      return;
    }
    if (cnumber.trim().length !== 16) {
      alert("Enter Valid Card Number!");
      return;
    }
    if (cvc.trim().length !== 3) {
      alert("Enter Valid CVC Number!");
      return;
    }
    axios.post("http://localhost:4000/booking/detail/add", data)
    .then((res) => {
      alert("Booking saved successfully!");
      window.location.reload();
       
    }).catch((err) => {
     console.log(err);
    });
    
  };

  return (
    <div className="room-details-main-container">
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
            {/* Experience */}
            <img src={image} alt="" srcset="" />
          </a>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </nav>
      <div className="room-details-body-container">
        <div className="package-details-body-container">
          {active.active1 && (
            <div className="package-details-date-container">
              <label className="package-titles">Choose Time</label>
              <div className="package-details-date-action-wrapper">
                <label>Check In Date</label>
                <input
                  type="date"
                  className="package-details-date-container-inputs"
                  min="2023-05-17"
                  onChange={(e) => {
                    setCIDate(e.target.value);
                  }}
                />
              </div>
              <div className="package-details-date-action-wrapper">
                <label>Check Out Date</label>
                <input
                  type="date"
                  min="2023-05-17"
                  className="package-details-date-container-inputs"
                  onChange={(e) => {
                    setCODate(e.target.value);
                  }}
                />
              </div>
              <div className="package-details-date-action-wrapper">
                <label>Check In Time</label>
                <input
                  type="time"
                  className="package-details-date-container-inputs"
                  onChange={(e) => {
                    setCITime(e.target.value);
                  }}
                />
              </div>
              <div className="package-details-apply-button-wrapper">
                <button
                  className="package-details-apply-button"
                  onClick={continue1}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {active.active2 && (
            <div className="package-detail-table-container">
              <label className="package-titles">Choose Package</label>
              <div className="package-detail-table-header">
                <div className="package-detail-table-col1">Room Details</div>
                <div className="package-detail-table-col2">
                {/*  */}
                  For {dayCalculate(codate, cidate)} Days
                </div>
                <div className="package-detail-table-col3"></div>
              </div>
              <div className="package-detail-table-body">
                <div className="package-detail-table-body-col1">
                  Semi Deluxe Room 2 Persons
                  <br />
                  Rs 15,000.00
                </div>
                <div className="package-detail-table-body-col2">
                  Rs {15000 * dayCalculate(codate, cidate)}.00
                </div>
                <div className="package-detail-table-body-col3">
                  <button
                    className="package-reserve-button"
                    onClick={() => {
                      setActive({ active2: false });
                      setActive({ active3: true });
                      setPName("Semi Deluxe Room 2 Persons");
                      setAmount(15000 * dayCalculate(codate, cidate));
                    }}
                  >
                    Reserve
                  </button>
                </div>
              </div>

              <div className="package-detail-table-body">
                <div className="package-detail-table-body-col1">
                  Deluxe Double Room 2 Persons
                  <br />
                  Rs 17,315.00
                </div>
                <div className="package-detail-table-body-col2">
                  Rs {17315 * dayCalculate(codate, cidate)}.00
                </div>
                <div className="package-detail-table-body-col3">
                  <button
                    className="package-reserve-button"
                    onClick={() => {
                      setActive({ active2: false });
                      setActive({ active3: true });
                      setPName("Deluxe Double Room 2 Persons");
                      setAmount(17315 * dayCalculate(codate, cidate));
                    }}
                  >
                    Reserve
                  </button>
                </div>
              </div>
              <div className="package-detail-table-body">
                <div className="package-detail-table-body-col1">
                  Family Suite 4 Persons
                  <br />
                  Rs 19,385.00
                </div>
                <div className="package-detail-table-body-col2">
                  Rs {19385 * dayCalculate(codate, cidate)}.00
                </div>
                <div className="package-detail-table-body-col3">
                  <button
                    className="package-reserve-button"
                    onClick={() => {
                      setActive({ active2: false });
                      setActive({ active3: true });
                      setPName("Family Suite 4 Persons");
                      setAmount(19385 * dayCalculate(codate, cidate));
                    }}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          )}
          {active.active3 && (
            <div className="payment-gateway-container">
              <div className="payment-billing-container">
                <label className="package-titles">Billing Details</label>
                <div className="package-details-date-action-wrapper">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    className="package-details-date-container-inputs"
                    placeholder="Customer Name"
                    onChange={(e) => {
                      setCName(e.target.value);
                    }}
                  />
                </div>
                <div className="package-details-date-action-wrapper">
                  <label>Customer Email Address</label>
                  <input
                    type="email"
                    className="package-details-date-container-inputs"
                    placeholder="Email Address"
                    value={email}
                  />
                </div>
                <div className="package-details-date-action-wrapper">
                  <label>Customer Contact</label>
                  <input
                    type="number"
                    className="package-details-date-container-inputs"
                    placeholder="Contact Number"
                    min={0}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="payment-card-container">
                <label className="package-titles">Payment Card Details</label>
                <br />
                <br />
                <div className="payment-details-input-container">
                  <input
                    type="text"
                    className="package-details-date-container-inputs"
                    placeholder="Card Holder Name"
                    onChange={(e) => {
                      setchname(e.target.value);
                    }}
                  />
                </div>
                <div className="payment-details-input-container">
                  <input
                    type="number"
                    className="package-details-date-container-inputs"
                    placeholder="Card Number"
                    min={0}
                    onChange={(e) => {
                      setcnumber(e.target.value);
                    }}
                  />
                </div>
                <div className="payment-details-input-container1">
                  <input
                    type="number"
                    className="package-details-date-container-inputs"
                    placeholder="Exp Month"
                    min={0}
                    onChange={(e) => {
                      setexpMonth(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    className="package-details-date-container-inputs"
                    placeholder="Exp Year"
                    min={0}
                    onChange={(e) => {
                      setexpYear(e.target.value);
                    }}
                  />
                </div>
                <div className="payment-details-input-container">
                  <input
                    type="number"
                    className="package-details-date-container-inputs"
                    placeholder="CVC Number"
                    min={0}
                    onChange={(e) => {
                      setcvc(e.target.value);
                    }}
                  />
                </div>
                <div className="package-details-apply-button-wrapper">
                  <button
                    className="package-details-apply-button"
                    onClick={bookingHandler}
                  >
                    Proceed
                  </button>
                </div>
                <div className="payment-details-icon-container">
                  <img src={payment} width="80px" height="50px" />
                  <img src={payment2} width="80px" height="38px" />
                  <img src={payment3} width="80px" height="50px" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
