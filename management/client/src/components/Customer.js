import React,{Component} from "react";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

class Customer extends Component{
    render() {
        const props = this.props
        return(
            <TableRow>
                <TableCell> {props.id} </TableCell>         
                <TableCell> <img src={props.image} /></TableCell>
                <TableCell> {props.name} </TableCell>
                <TableCell> {props.age} </TableCell> 
                <TableCell> {props.gender} </TableCell>         
                <TableCell> {props.job} </TableCell>         
            </TableRow>
        )
    }
}



// class CustomerProfile extends React.Component{
//     render() {
//         const props = this.props
//         return(
//             <div>
//                 <div>
//                     <img src={props.image} />
//                 </div>
//                 <h3>({props.id}) {props.name}</h3>

                
//             </div>

//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render() {
//         const props = this.props
//         return(
//         <div>
//             <p>{props.job}</p>
//             <p>{props.gender}</p>
//             <p>{props.age}</p>
//         </div>
//         )
//     }
// }




export default Customer;

    
