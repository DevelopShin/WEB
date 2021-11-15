import React,{Component} from "react";


class Customer extends React.Component{
    render() {
        const props = this.props
        return(
        <div>
            <CustomerProfile image={props.image} name={props.name} id={props.id} />
            <CustomerInfo job={props.job} gender={props.gender} age={props.age}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render() {
        const props = this.props
        return(
            <div>
                <div>
                    <img src={props.image} />
                </div>
                <h3>({props.id}) {props.name}</h3>

                
            </div>

        )
    }
}

class CustomerInfo extends React.Component{
    render() {
        const props = this.props
        return(
        <div>
            <p>{props.job}</p>
            <p>{props.gender}</p>
            <p>{props.age}</p>
        </div>
        )
    }
}




export default Customer;

    
