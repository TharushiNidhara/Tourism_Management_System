/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import jsPDF from "jspdf";
import 'jspdf-autotable';

import BankCardrow from "./BankCardrow";

export default class Bank extends Component {
	constructor(props) {
		super(props);
		this.state = { bank: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/payment/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ bank: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.bank.map(function (object, i) {
			return <BankCardrow obj={object} key={i} />;
		});
		
	}

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Card Details";
        const headers = [["bName", "cNumber","exMonth", "expYear","cvv"]];
    
        const data = this.state.bank.map(elt=> [elt.bName, elt.cNumber,  elt.exMonth,elt.expYear, elt.cvv]);
    
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
			
				<br /> <h3 align='center'>Bank Card Details</h3>
				<div className='row-frm'>
				<button><Link to={"/BankCard"} className="btn btn-success">Add card</Link></button>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Bank Name</th>
								<th>Card Number</th>
								<th>Expire Month</th>
								<th>Expire Year</th>
								<th>CVV</th>
                                

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
