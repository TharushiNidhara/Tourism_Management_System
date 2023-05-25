import React from "react";
import "./admin_payment.css";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BlockIcon from "@mui/icons-material/Block";
import CachedIcon from "@mui/icons-material/Cached";
import { Link} from 'react-router-dom'

function AdminPayment() {
  const email = "test@gmail.com";
  const [details, setDetails] = React.useState([]);
  const [details2, setDetails2] = React.useState([]);
  const [search, setsearch] = React.useState("");
  const [search2, setsearch2] = React.useState("");
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/booking/detail")
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/booking/booking/refund/details")
      .then((res) => {
        setDetails2(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const approveHandler = (id) => {
    axios
      .put(`http://localhost:4000/booking/request/Approved/${id}`)
      .then((res) => {
        alert("Request Approved Successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refundHandler = (id) => {
    axios
      .put(`http://localhost:4000/booking/request/Refunded/${id}`)
      .then((res) => {
        alert("Booking Refund Successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectHandler = (id) => {
    axios
      .put(`http://localhost:4000/booking/request/Rejected/${id}`)
      .then((res) => {
        alert("Request Rejected Successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
/*Booking detail s*/
  const requests = details.filter((data) => {
    return (
      data.hotelName.toLowerCase().includes(search.toLowerCase()) ||
      data.customerContact.toLowerCase().includes(search.toLowerCase()) ||
      data.customerName.toLowerCase().includes(search.toLowerCase())
      // ||
      // data.packageName.toLowerCase().includes(search.toLowerCase())
    );
  });
    /*refund detail s*/
  const requests2 = details2.filter((data) => {
    return (
      data.hotelName.toLowerCase().includes(search2.toLowerCase()) ||
      data.customerContact.toLowerCase().includes(search2.toLowerCase()) ||
      data.customerName.toLowerCase().includes(search2.toLowerCase())
      // ||data.packageName.toLowerCase().includes(search2.toLowerCase())
    );
  });
  
  return (
    <div>
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
            <a href={"/appointmentHomepage/" + email}>Appointment</a>
          </li>
          <li>
            <a href={"/TourguideHomepage/" + email}>Guide</a>
          </li>
          <li>
            <a href="/Payment">Payment</a>
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
        </div>{" "}
      </nav>
      <div className="admin-payment-main-container">
        <div className="admin-payment-details-container">
          <div className="admin-payment-details-action-container">
            <div
              className="custom-btn1"
              id={active && "btn-select"}
              onClick={() => {
                setActive(true);
              }}
            >
              Booking History
            </div>
            <div
              className="custom-btn1"
              id={!active && "btn-select"}
              onClick={() => {
                setActive(false);
              }}
            >
              Refund History
            </div>
          </div>
          {active ? (
            <div>
              <div className="admin-payment-details-action-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="admin-search-inputs"
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <Link to="/report">
                  <button className="admin-report-button">
                    Export All
                  </button>
                </Link>
              </div>
              <div className="admin-booking-table-header">
                <div className="admin-booking-details-table-head-col1">
                  Hotel Name
                </div>
                <div className="admin-booking-details-table-head-col1">
                  Package Name
                </div>
                <div className="admin-booking-details-table-head-col2">
                  Customer Name
                </div>
                <div className="admin-booking-details-table-head-col2">
                  Customer Contact
                </div>
                <div className="admin-booking-details-table-head-col3">
                  Check In Date
                </div>
                <div className="admin-booking-details-table-head-col4">
                  Check Out Date
                </div>
                <div className="admin-booking-details-table-head-col5">
                  Paid Amount
                </div>
                <div className="admin-booking-details-table-head-col6"></div>
              </div>
              {requests.map((item) => (
                <div className="admin-booking-table-body">
                  <div className="admin-booking-details-table-body-col1">
                    {item.hotelName}
                  </div>
                  <div className="admin-booking-details-table-body-col1">
                    {item.packageName}
                  </div>
                  <div className="admin-booking-details-table-body-col2">
                    {item.customerName}
                  </div>
                  <div className="admin-booking-details-table-body-col2">
                    {item.customerContact}
                  </div>
                  <div className="admin-booking-details-table-body-col3">
                    {item.checkInDate}
                  </div>
                  <div className="admin-booking-details-table-body-col4">
                    {item.checkOutDate}
                  </div>
                  <div className="admin-booking-details-table-body-col5">
                    Rs {item.paidAmount}.00
                  </div>
                  <div className="admin-booking-details-table-body-col6">
                    {item.bookingStatus === "Pending" ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          color: "rgb(255, 144, 0)",
                          fontWeight: "500",
                        }}
                      >
                        {item.bookingStatus}
                        <CheckCircleOutlineIcon
                          style={{ cursor: "pointer", color: "green" }}
                          onClick={() => approveHandler(item._id)}
                        />
                        <BlockIcon
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => rejectHandler(item._id)}
                        />
                      </div>
                    ) : item.bookingStatus === "Approved" ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "28px",
                          color: "green",
                          fontWeight: "500",
                        }}
                      >
                        {item.bookingStatus}

                        <CachedIcon
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => refundHandler(item._id)}
                        />
                      </div>
                    ) : (
                      item.bookingStatus
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="admin-payment-details-action-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="admin-search-inputs"
                  onChange={(e) => {
                    setsearch2(e.target.value);
                  }}
                />
                <Link to="/report">
                  <button className="admin-report-button">
                    Download Report
                  </button>
                </Link>
              </div>
              <div className="admin-booking-table-header">
                <div className="admin-booking-details-table-head-col1">
                  Hotel Name
                </div>
                <div className="admin-booking-details-table-head-col1">
                  Package Name
                </div>
                <div className="admin-booking-details-table-head-col2">
                  Customer Name
                </div>
                <div className="admin-booking-details-table-head-col2">
                  Customer Contact
                </div>

                <div className="admin-booking-details-table-head-col5">
                  Paid Amount
                </div>
                <div className="admin-booking-details-table-head-col6"></div>
              </div>
              {requests2.map((item) => (
                <div className="admin-booking-table-body">
                  <div className="admin-booking-details-table-body-col1">
                    {item.hotelName}
                  </div>
                  <div className="admin-booking-details-table-body-col1">
                    {item.packageName}
                  </div>
                  <div className="admin-booking-details-table-body-col2">
                    {item.customerName}
                  </div>
                  <div className="admin-booking-details-table-body-col2">
                    {item.customerContact}
                  </div>

                  <div className="admin-booking-details-table-body-col5">
                    Rs {item.paidAmount}.00
                  </div>
                  <div
                    className="admin-booking-details-table-body-col6"
                    style={{
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    {item.bookingStatus}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPayment;
