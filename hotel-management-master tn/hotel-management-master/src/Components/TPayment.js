import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from 'axios';



	export default  class TreatementPayments extends  Component{


    constructor(props) {
        super(props);
        this.onChangeOName = this.onChangeOName.bind(this);
        this.onChangenic = this.onChangenic.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangetretement = this.onChangetretement.bind(this);
      //  this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
       // this.onChangestatus = this.onChangestatus.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            OName: '',
            nic: '',
            email:'',
            tretement:'',
            price:'',
            Qty:'',
            status:''
            
        
        }
        this.state.email = this.props.match.params.id;
       
    } 
	
    componentDidMount() {
        //alert('Payment id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/ayurvedic/tedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    tretement: res.data.tretement,
                    email: res.data.email,
                    price: res.data.price,
                    Qty: res.data.Qty,
                    status: res.data.status,
                    
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

       
        

    onChangeOName(e){
        this.setState( {
            OName: e.target.value
        });
    }
    onChangenic(e){
        this.setState( {
            nic: e.target.value
        });
    }
    onChangeemail(e){
        this.setState( {
            email: e.target.value,
        });
    }
    onChangetretement(e){
        this.setState( {
            tretement: e.target.value
        });
    }
      
    onChangeQty(e){
        this.setState( {
            Qty: e.target.value
        });
    }


  
    onChangetretement(e){
        this.setState( {
            tretement: e.target.value
        });
   }
   
    
    
    
    onSubmit(e){

        
       
        
       
        this.state.status = 'Completed';


        e.preventDefault();
        const obj = {
            OName : this.state.OName,
            nic : this.state.nic,
            email : this.state.email,
            tretement : this.state.tretement,
            price : this.state.price,
            Qty : this.state.Qty,
            status : this.state.status,
           
        };

		axios.post('http://localhost:4000/ayurvedic/oderupdate/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
                                        OName: '',
                                        nic: '',
                                        email:'',
                                        tretement:'',
                                        price:'',
                                        Qty:'',
                                        status:''
                            
                                    })
                                    console.log(res.data)});
                             this.props.history.push('/TreatmentOderView/'+this.props.match.params.id);
                         //   window.location.replace('/myorder/'+this.props.match.params.id);
                        
                   
        
    }



    render() {
	return (
		<div className='AddVehiclePage'>
		<h1 >Payment</h1>
            <br/>   <br/>   <br/>
			
			<div className='content'>
				<form onSubmit={this.onSubmit}>

				
				<div className='detail'>
                    <label htmlFor='Qty'>treatement</label>
                    <input type='text' id='Qty' name='Qty' required  readOnly value={this.state.tretement} onChange = {this.onChangetretement}/>
                </div>


                

                    <div className='detail'>
						<label htmlFor=''> Email</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.email} onChange = {this.onChangeemail}/>
					</div>

                    <div className='detail'>
						<label htmlFor=''> Treatements qty</label>
						<input type='text' id='vehicleName' name='vehicleName' required readOnly  value={this.state.Qty} onChange = {this.onChangeQty}/>
					</div>


			
                      
					
                
				<div className='detail'>
                    <label htmlFor='Qty'>Total</label>
                    <input type='number' id='Qty' name='Qty' required readOnly  value={this.state.price} />
                </div>

				<div className='detail'>
                    <label htmlFor='Qty'>Bankcard</label>
                    <input type='text' id='Qty' name='Qty' required />
                </div>

                <a href={"/BankCard/" + this.props.match.params.id}>
                add card
									</a>  
				

                <a href={"/Refund/" + this.props.match.params.id}>
									Refund policy
									</a>  
               
               

					<button type='submit'>Pay</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}
	}
