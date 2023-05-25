import React, { useRef } from "react";
import "./report.css";
import ReactToPrint from "react-to-print";
import Logo from "../images/logo (2).png"
import axios from "axios";
import { Chart } from "react-google-charts";

function Report() {
  const [details, setDetails] = React.useState({})
  
  const data = [
    ["Description", "Amount"],
    ["Pending", details.pending],
    ["Approved", details.approved],
    ["Refund", details.refund],

  ];

  const options = {
    title: "Payment Summery",
    pieHole: 0.4,
    is3D: false,
    slices: {
      0: { color: "orange" },
      1: { color: "green" },
      2: { color: "red" },
    },
  };

  let componentRef = useRef();

  let currentDate = new Date();
  let dateTime =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " at " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/booking/hotel/summery/details")
      .then((res) => {
        setDetails(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  
  return (
    <div>
      <div ref={(el) => (componentRef = el)} className="report-container">
        <div className="report-wrapper">
          <div className="report-header">
            <img src={Logo} width="75px" />
            <h3>Hotels Summery Report</h3>
            <h5>{dateTime}</h5>
          </div>
          <div className="report-body">
            <div className="report-body-heder">
              <h4>Summery Description</h4>
              <h4>Total Amount (Rs.)</h4>
            </div>
            <div className="report-body-body">
              <h5>Total Pending Amount</h5>
              <h5>Rs {details.pending}.00</h5>
            </div>
            <div className="report-body-body">
              <h5>Total Approved Amount</h5>
              <h5>Rs {details.approved}.00</h5>
            </div>
            <div className="report-body-body">
              <h5>Total Refund Amount</h5>
              <h5>Rs {details.refund}.00</h5>
            </div>
          </div>
          <div className="report-body">
            <div className="report-body-chart">
              <Chart
                chartType="PieChart"
                width="90%"
                height="400px"
                data={data}
                options={options}
                 
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReactToPrint
          trigger={() => <button className="print-btn">print</button>}
          content={() => componentRef}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Report;
