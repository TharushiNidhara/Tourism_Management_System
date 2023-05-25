import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class sumGOtableRow extends Component {
    constructor(props) {
        super(props);
       
    }
   
    render() {
        return (
           <tr>
             
                <td>
                   {this.props.obj.price}
               </td>
               
              
           </tr>
        );
    }
}

export default sumGOtableRow;