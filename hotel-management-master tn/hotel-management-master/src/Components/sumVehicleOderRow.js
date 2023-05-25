import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class vSumtableRow extends Component {
    constructor(props) {
        super(props);
      
    }
   
    render() {
        return (
           <tr>
             
           
               <td>
                   {this.props.obj.price}
               </td>
         
               {/* <td className='profile-actions'>

                   <button><Link to={"/EditOderRoom/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
               &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
                   <br/><br/>
<button type='submit' className='pay'><Link to={"/RPayment/"+this.props.obj._id} className="btn btn-info">Pay</Link></button>
               </td> */}
           </tr>
        );
    }
}

export default vSumtableRow;