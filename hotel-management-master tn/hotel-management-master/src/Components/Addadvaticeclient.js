import React, { Component } from "react";
// // import "../Styles/AddVehicle.css";
import "../Styles/advaticeoder.css";
//advaticeoder.css
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import "../Styles/NavBar_home.css";

	export default  class Addadvatice extends  Component{



    constructor(props) {
        super(props);
        this.onChangename = this.onChangename.bind(this);
        this.onChangephone = this.onChangephone.bind(this);
        this.onChangecity = this.onChangecity.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangeinfo = this.onChangeinfo.bind(this);
        this.onChangepackage = this.onChangepackage.bind(this);
    
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: '',
            city:'',
            email:'',
            category:'',
            info:'',
            package:'',
        
        }
    }
    onChangename(e){
        this.setState( {
            name: e.target.value
        });
    }
    onChangephone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangecity(e){
        this.setState( {
            city: e.target.value,
        });
    }
    onChangeemail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangecategory(e){
        this.setState( {
            category: e.target.value
        });
    }
    
    onChangeinfo(e){
        this.setState( {
            info: e.target.value
        });
    }
    
    onChangepackage(e){
        this.setState( {
            package: e.target.value
        });
    }
    
    
    
    
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            phone : this.state.phone,
            city : this.state.city,
            email : this.state.email,
            category : this.state.category,
            info : this.state.info,
            package : this.state.package,
           
           
           
        };

                    // if(this.state.description.length > 4){
                      
                            axios.post('http://localhost:4000/advaticement/add',obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({

										   name: '',
                                            phone: '',
                                            city:'',
                                            email:'',
                                            category:'',
                                            info:'',
                                            package:'',
                                       
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/MyAdvaticementOders'+ this.props.match.params.id);
                      
					  window.location.replace('/MyAdvaticementOders'+ this.props.match.params.id);
                        
                    // } 
                    // else {
                    //     alert('Pleace enter more than 4 digit.');
                    // }
          
        
    }



    render() {
	return (
		<div className='AddVehiclePage'>
				<nav>
					<div className='logo'>
						<a href='/'>
							<img src={logo} alt='' srcset='' />
						</a>
					</div>
					<ul className='nav-links'>
						<li>
							<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
						</li>
						<li>
							<a href={"/appointmentHomepage/" + this.props.match.params.id}>
								Appointment
							</a>
						</li>
						<li>
							<a href={"/TourguideHomepage/" + this.props.match.params.id}>
								Guide
							</a>
						</li>
						<li>
							<a href='/Payment'>Payment</a>
						</li>
						<li>
							<a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
						</li>
						<li>
							<a href={"/VehicleHomePage/" + this.props.match.params.id}>
								Vehicle
							</a>
						</li>
						<li>
							<a
								href={
									"/AyurvedicTreatmentHomePage/" + this.props.match.params.id
								}>
								Treatement
							</a>
						</li>
						<li>
							<a href='/AdminRegisterViewTable'>Tourist</a>
						</li>
						<li>
							<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
								Experience
							</a>
						</li>
					</ul>
					<div className='profile'>
						<img src={image} alt='' srcset='' />
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
			<div className='content'>
				<form onSubmit={this.onSubmit}>
					<div className='detail'>
						<label htmlFor=''>Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.name} onChange = {this.onChangename}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>phone</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.phone} onChange = {this.onChangephone}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>city</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.city} onChange = {this.onChangecity}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''>email</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.email} onChange = {this.onChangeemail}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''>category</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.category} onChange = {this.onChangecategory}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''>info</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.info} onChange = {this.onChangeinfo}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''>package</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.package} onChange = {this.onChangepackage}/>
					</div>

			
			

                    {/* <div className='detail'>
						<label htmlFor=''>image</label>
						<input type='file' />
					</div> */}


					<button type='submit'>save</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
