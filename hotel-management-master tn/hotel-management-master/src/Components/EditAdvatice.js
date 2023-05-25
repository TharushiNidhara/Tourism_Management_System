import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


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

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/advaticement/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    city: res.data.city,
                    email: res.data.email,
                    category: res.data.category,
                    info: res.data.info,
                    package: res.data.package,
                    
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
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
                      
        axios.post('http://localhost:4000/advaticement/update/'+this.props.match.params.id,obj)
                       
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
                            this.props.history.push('/adminadvaticeView');
                      
					  window.location.replace('/adminadvaticeView');
                        
                   // } 
                    // else {
                    //     alert('Pleace enter more than 4 digit.');
                    // }
          
        
    }



    render() {
	return (
		<div className='AddVehiclePage'>
			<NavbarHome />
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
