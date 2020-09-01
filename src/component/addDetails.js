import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AddDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            bedroom: '',
            bathroom: '',
            isError: {
                address: '',
                bedroom: '',
                bathroom: ''
            },
            isDisable:true,
        }
    }


    // onSubmit = e => {
    //     e.preventDefault();
    //     if (formValid(this.state)) {
    //         console.log(this.state)
    //     } else {
    //         console.log("Form is invalid!");
    //     }
    // };

    formValid = () => {
        const { isError, ...rest } =this.state
        let isValid = true;
    
        Object.values(isError).forEach(val => {
            if (val.length === 0 && isValid) {
                isValid = true
            } else {
                isValid = false
            }
        });
        console.log('rest',rest)
        Object.values(rest).forEach(val => {
            if (val !== null && val !=='' && isValid) {
                isValid = true
            } else {
                isValid = false
            }
        });
        this.setState({isDisable: !isValid })
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "address":
                isError.address =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "bedroom":
                isError.bedroom =value>=1 && value<=10
                    ? ""
                    : "bedroom value is invalid";
                break;
            case "bathroom":
                isError.bathroom =
                value>=1 && value<=10 ? "" : "bathroom value is invalid";
                break;
            default:
                break;
        }
        this.setState({ isError, [name]: value}, this.formValid)
    };

    render() {
        const { isError,isDisable } = this.state;

        return (
        <div className="container">
         <div className="row">
          <div className="col col-md-4">
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label>address</label>
                    <input
                        type="text"
                        className={isError.address.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="address"
                        onChange={this.formValChange}
                    />
                    {isError.address.length > 0 && (
                        <span className="invalid-feedback">{isError.address}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Bedroom</label>
                    <input
                        type="text"
                        className={isError.bedroom.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="bedroom"
                        onChange={this.formValChange}
                    />
                    {isError.bedroom.length > 0 && (
                        <span className="invalid-feedback">{isError.bedroom}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Bathroom</label>
                    <input
                        type="text"
                        className={isError.bathroom.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="bathroom"
                        onChange={this.formValChange}
                    />
                    {isError.bathroom.length > 0 && (
                        <span className="invalid-feedback">{isError.bathroom}</span>
                    )}
                </div>

                <button type="button" className="btn btn-block btn-danger" disabled={isDisable}>
                        <Link to="/imageUpload">Add details</Link>
                </button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}


export default AddDetails;