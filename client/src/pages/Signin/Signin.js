import React, { Component } from 'react';
import axios from "axios";
import './Signin.css';
import { Redirect } from "react-router-dom";
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            authenticated: false
        };
    
      }
    
      handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    
      handleSubmit = (event) => {
          event.preventDefault();

          axios({
              url: "/signin",
              method: "POST",
              data: this.state
          })
          .then((response) => {              
              this.setState({ authenticated: true });
              console.log("Response: ", response.data);
              
          })
          .catch((err) => {
              this.setState({ authenticated: false });
              console.log("Error: ", err.response.data);
              
          });
        
      };
    
    render() {

        console.log("State: ", this.state);
        

        if(this.state.authenticated){
            return <Redirect to = "/about"/>;
        } else{ 
            // (<Redirect to = "/"/>)
            console.log(" Not yet authenticated");
            
        }
        return (
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                  <form className="form-signin" onSubmit={this.handleSubmit}>

                    <label htmlFor="username" className="sr-only">username:</label>
                        <input 
                            type="text" 
                            placeholder="username"  
                            className="form-control" 
                            name="username"
                            value={this.state.value} 
                            onChange={this.handleChange} />

                    <label htmlFor="password" className="sr-only"> Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password"  
                            className="form-control" 
                            name="password"
                            value={this.state.value} 
                            onChange={this.handleChange} />               

                  <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login Now" />
            </form>
        </div>
        );
    }
}


export default Signin;