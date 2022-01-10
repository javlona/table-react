import React, { Component } from "react";
import './modal.css'

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                img: "",
                name: "",
                email: "",
                address: {
                    city: "",
                },
                phone: "",
                website: "",
            }
        }
    }   

    componentDidMount() {
        this.setState({ data: {...this.state.data, ...this.props.data}})
    }
    
    changeHandler = (e) =>  {
        const {value, name} = e.target;
        this.setState({ data: {...this.state.data, [name]: value} })
    }

    submitHandler = (e) => {
        
    }

    render() {
        console.log(this.state);
        const { editHandler, closeModal } = this.props;
        const { img, name, email, address,  phone, website} = this.state.data;
        return (
            <form className="modal">
                <input 
                    onChange={ this.changeHandler } 
                    name="img" 
                    type="text" 
                    placeholder="Image link" 
                    defaultValue={ img }
                />
                <input 
                    onChange={ this.changeHandler } 
                    name="name" 
                    type="name" 
                    placeholder="Enter name" 
                    defaultValue={ name }
                />
                <input onChange={ this.changeHandler } name="email" type="email" placeholder="Enter email" defaultValue={ email }/>
                <input onChange={ this.changeHandler } name="city" type="text" placeholder="Enter address" defaultValue={ address.city }/>
                <input onChange={ this.changeHandler } name="phone" type="tel" placeholder="Enter phone number" defaultValue={ phone }/>
                <input onChange={ this.changeHandler } name="website" type="text" placeholder="Enter website" defaultValue={ website }/>
                <button type="sumbit" onClick={ editHandler }>Update</button>
                <button type="button" onClick={ closeModal }>Close</button>
            </form>
        )
    }
}