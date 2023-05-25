/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import RoomOderTableTrow from "./sumRoomRow";
 import GuideOderThow from "./sumGuideRow";
 import VehicleOderTableRow from "./sumVehicleOderRow";
 import TreatmentOderThrow from "./sumTretementOderRow";
 import AdvaticementRow from "./sumAdvaticeOdersRow";
  import HotelOderTableTrow from "./sumHotelOderRow";
  import SpecialOderRow from "./sumSpecialOderRow";

export default class RoomOder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roomOder: [],
            guideOder: [],
            vehicleOder: [],
            treatementOder: [],
            ActivityOder: [],
            advaticeOder: [],
            hotelOder: [],
            specialOder: [],
		
			// email: this.props.match.params.id,
		};
		// this.state.Station = this.props.match.params.id;

		
	}

    componentDidMount() {
        axios
          .get(
            "http://localhost:4000/room/alloder/" + this.props.match.params.id
          )
          .then((response) => {
            this.setState({ roomOder: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
    
        axios
          .get("http://localhost:4000/guide/alloder/" + this.props.match.params.id)
          .then((response) => {
            this.setState({ guideOder: response.data });
          })
          .catch((error) => {
            console.log(error);
          });


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

            axios
			.get('http://localhost:4000/ayurvedic/alloder/'+this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')
				
				this.setState({ treatementOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});


            axios
			.get("http://localhost:4000/appointment/aalloder/" + this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')

				this.setState({ ActivityOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});

            axios
			.get(
				"http://localhost:4000/tourist/aalloder/" + this.props.match.params.id
			)
			.then((response) => {
			// alert('Pass una')

				this.setState({ advaticeOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});


            axios
			.get("http://localhost:4000/hotel/alloder/" + this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')

				this.setState({ hotelOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});

            axios
			.get('http://localhost:4000/appointment/salloder/'+this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')
				
				this.setState({ specialOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});

      }

   
 
    tabRow = () => {
        let totalSum = 0;
        const rows = this.state.roomOder.map((object, i) => {
          totalSum += parseInt(object.price);
          return <RoomOderTableTrow obj={object} key={i} />;
        });
        return { totalSum, rows };
      }

     

    tabRow1 = () => {
        let totalSumguide = 0;
        const rows = this.state.guideOder.map((object, i) => {
          totalSumguide += parseInt(object.price);
          return <GuideOderThow obj={object} key={i} />;
        });
        return { totalSumguide };
      }

      tabRow2 = () => {
        let totalVehicle = 0;
        const rows = this.state.vehicleOder.map((object, i) => {
            totalVehicle += parseInt(object.price);
          return <VehicleOderTableRow obj={object} key={i} />;
        });
        return { totalVehicle };
      }

      tabRow3 = () => {
        let totalTretement = 0;
        const rows = this.state.treatementOder.map((object, i) => {
            totalTretement += parseInt(object.price);
          return <TreatmentOderThrow obj={object} key={i} />;
        });
        return { totalTretement };
      }

      tabRow4 = () => {
        let totalactivity = 0;
        const rows = this.state.ActivityOder.map((object, i) => {
            totalactivity += parseInt(object.price);
          return <TreatmentOderThrow obj={object} key={i} />;
        });
        return { totalactivity };
      }
      tabRow5 = () => {
        let totaladvatice = 0;
        const rows = this.state.advaticeOder.map((object, i) => {
            totaladvatice += parseInt(object.price);
          return <AdvaticementRow obj={object} key={i} />;
        });
        return { totaladvatice };
      }

      tabRow6 = () => {
        let totalHotel = 0;
        const rows = this.state.hotelOder.map((object, i) => {
            totalHotel += parseInt(object.price);
          return <HotelOderTableTrow obj={object} key={i} />;
        });
        return { totalHotel };
      }

      tabRow7 = () => {
        let totalspeacil = 0;
        const rows = this.state.specialOder.map((object, i) => {
            totalspeacil += parseInt(object.price);
          return <SpecialOderRow obj={object} key={i} />;
        });
        return { totalspeacil };
      }


 
  

      

	

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Oder Report";
        const headers = [["email", "room","Qty", "price","status"]];
    
        const data = this.state.roomOder.map(elt=> [elt.email, elt.room,  elt.Qty,elt.price, elt.status]);
    
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
        
        
        // const totalSum=  this.state.roomOder.reduce((sum, object) => (object.price === "price" ? sum + object.price : sum), 0)

        const {  totalSum } = this.tabRow();
        const {  totalSumguide } = this.tabRow1();
        const {  totalVehicle } = this.tabRow2();
        const {  totalTretement } = this.tabRow3();
        const {  totalactivity } = this.tabRow4();
        const {  totaladvatice } = this.tabRow5();
        const {  totalHotel } = this.tabRow6();
        const {  totalspeacil } = this.tabRow7();
        const Tot = totalSum + totalSumguide + totalVehicle + totalTretement + totalactivity + totaladvatice + totalHotel + totalspeacil;
        //   const totalSum = this.state.roomOder.reduce((sum, object) => sum + object.price,0);
		return (
			<div className='adminVehicleProfile'>
				
				<br /> <h3 align='center'>Payment Summery</h3>
            

				<div className='row-frm'>
                
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>expences</th>
								<th>Total</th>

							</tr>
                            
						</thead>
                        <tr>
                        <td>Room</td>
							<td>{totalSum}</td>

                        </tr>
                        <tr>
                        <td>Guide</td>
							<td>{totalSumguide}</td>

                        </tr>
                        <tr>
                        <td>Vehicle</td>
							<td>{totalVehicle}</td>

                        </tr>

                        <tr>
                        <td>Tretement</td>
							<td>{totalTretement}</td>

                        </tr>
                        <tr>
                        <td>Activity</td>
							<td>{totalactivity}</td>

                        </tr>
                        <tr>
                        <td>Advatice</td>
							<td>{totaladvatice}</td>

                        </tr>
                        <tr>
                        <td>Hotel</td>
							<td>{totalHotel}</td>

                        </tr>
                        <tr>
                        <td>Special Packages</td>
							<td>{totalspeacil}</td>

                        </tr>
<br/>
                         <tr>
                        <td ><span >Total</span></td>
							<td>{Tot}</td>

                        </tr> 
 
   
                        
					
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
                <br/>
                <br/>
				<Footer />
			</div>
		);
	}
}
