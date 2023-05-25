/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/AdminAppointmentViewTable.css"
import { Link } from "react-router-dom";
import Tablerow from "./advaticeRow";

export default class Advatice extends Component {
	constructor(props) {
		super(props);
		this.state = { advatice: [], search: "" };
		this.state.station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		axios
			.get("http://localhost:4000/advaticement/getall")
			.then((response) => {
				this.setState({ advatice: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.advatice.map(function (object, i) {
			return <Tablerow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div className="adminAppointmentProfile">
				<NavBar_home />
				
				<br />
				<h3 align="center">Advatice Management</h3>
				
				<div className="row-frm">
				<button><Link to={"/addAdvatice"} className="btn btn-success">Add advatice</Link></button>
					<table className="table table-striped" style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Phone</th>
								<th>City</th>
								<th>Email</th>
                                <th>category</th>
                                <th>info</th>
                                <th>package</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className="shadow-lg card-footer" />
				</div>
				<Footer />
			</div>
		);
	}
}
