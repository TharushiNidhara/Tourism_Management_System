import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class destinationRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/advaticement/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminDestinationView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.phone}
               </td>
               <td>
                   {this.props.obj.city}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.category}
               </td>
               <td>
                   {this.props.obj.info}
               </td>
               <td>
                   {this.props.obj.package}
               </td>
               {/* <td>
                   {this.props.obj.image}
               </td> */}
              
               
           </tr>
        );
    }
}

export default destinationRow;