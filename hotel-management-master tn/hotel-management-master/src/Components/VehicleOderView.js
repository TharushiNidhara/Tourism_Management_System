/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import jsPDF from "jspdf";
import 'jspdf-autotable';

import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import VehicleOderTableRow from "./VehicleOderTableRow";

export default class VehicleOder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicleOder: [],
			search: "",
			email: this.props.match.params.id,
		};
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		axios
			.get(
				"http://localhost:4000/vehicle/alloder/" + this.props.match.params.id
			)
			.then((response) => {
				// alert('Pass una')

				this.setState({ vehicleOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.vehicleOder.map(function (object, i) {
			return <VehicleOderTableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Oder Report";
        const headers = [["email", "vehicle","Qty", "price","status"]];
    
        const data = this.state.vehicleOder.map(elt=> [elt.email, elt.vehicle,  elt.Qty,elt.price, elt.status]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }


	render() {
		return (
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>Vehicle Management</h3>
				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Email</th>
								<th>Vehicle</th>
								<th>Quntity</th>
								<th>Total</th>
								<th>Payment</th>

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				<Footer />
			</div>
		);
	}
}
