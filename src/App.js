import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    firstErr: "",
    lastErr: "",
    emailErr: "",
    phoneErr: "",
  };

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value, 
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  onForm = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber } = this.state;

    let firstErr = "";
    let lastErr = "";
    let emailErr = "";
    let phoneErr = "";

    if (firstName.length < 2) {
      firstErr = "Please enter a proper first name.";
    }

    if (lastName.length < 1) {
      lastErr = "Please enter a proper last name.";
    }

    if (!email.includes("@")) { 
      emailErr = "Please enter a valid email.";
    }

    if (phoneNumber.length < 10) {
      phoneErr = "Please enter a valid phone number.";
    }

    
    this.setState({
      firstErr,
      lastErr,
      emailErr,
      phoneErr,
      
    });
  };

  render() {
    const { firstName, lastName, email, phoneNumber, firstErr, lastErr, emailErr, phoneErr } = this.state;

    return (
      <div className="form-container">
        <form className="form-container1" onSubmit={this.onForm}>
          <div className="card-container">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleFirstName} value={firstName} />
            <p className="error">{firstErr}</p>
          </div>

          <div className="card-container">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleLastName} value={lastName} />
            <p className="error">{lastErr}</p>
          </div>

          <div className="card-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={this.handleEmail} value={email} />
            <p className="error">{emailErr}</p>
          </div>

          <div className="card-container">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" onChange={this.handlePhoneNumber} value={phoneNumber} />
            <p className="error">{phoneErr}</p>
          </div>

          <div className="btn-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;