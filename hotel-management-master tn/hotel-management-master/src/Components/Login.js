import  React, {Component} from 'react';
import '../Styles/Login.css'
import NavbarLogin from './NavBar_login';
import Footer from './Footer';
import axios from 'axios';


  export default  class Login extends  Component{

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email:'',
        password:''
    }
}
onChangeEmail(e){
    this.setState( {
        email: e.target.value
    });
}
onChangePassword(e){
    this.setState( {
        password: e.target.value
    });
}

onSubmit(e) {
  e.preventDefault();

  const { email, password } = this.state;

  if (email === "admin@gmail.com" && password === "admin123") {
    this.props.history.push('/HomepageAdmin/'+email);
  } else {
    axios.post('http://localhost:4000/tourist/login', { email, password })
      .then(res => {
        if (res.data.message === "Successful Login") {
          this.props.history.push('/Homepage/'+email);
        } else {
          alert("Username or password mismatch");
        }
      })
      .catch(err => {
        alert("Error occurred while logging in");
      });
  }
}


  render() {
    return (
        
      <div className="login-page">
        
        < NavbarLogin />
        <div className="content">
            <form onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <input type="email" id="email" name="email" placeholder="Enter your email" required value={this.state.email} onChange = {this.onChangeEmail}/>

                <input type="password" id="password" name="password" placeholder="Enter your password" required value={this.state.password} onChange = {this.onChangePassword}/>

                <button type="submit">Login</button>
            
            <p>
                <a href="/Register">Still don't have an <span>Account?</span> </a>
            </p>
            </form>
            
        </div>
<br/>
        < Footer /> 
       
      </div>
    );
  }
}


