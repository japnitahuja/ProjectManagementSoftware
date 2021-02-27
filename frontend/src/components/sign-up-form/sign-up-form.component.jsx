import React from "react";
import {signUpStart} from "../../redux/user/user.actions";
import {selectSignUpFail, selectSignUpStart, selectSignUpSuccessful} from "../../redux/user/user.selectors";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        role: "",
        username: "",
      },
      confirmPassword: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      this.setState({ confirmPassword: value });
    } 
    else {
      let response = this.state.resp;
      response[name] = value;

      this.setState({resp: response});
    }
  };

  handleOnSubmit = (e) => {
      e.preventDefault()

      if (this.state.resp.password !== this.state.confirmPassword){
        alert('Password and Confirm Password don\'t match!')
      }
      else{
        this.props.signUpStart(this.state.resp)
        this.setState({
          resp: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            username: '',
            email: '',
            password: '',
            role: 'STUDENT',
          },
          confirmPassword: '',
        });
      }

      

  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="firstName"> First Name: </label>
            <input
              type="text"
              value={this.state.resp.firstName}
              name="firstName"
              id="firstName"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName"> Last Name: </label>
            <input
              type="text"
              value={this.state.resp.lastName}
              name="lastName"
              id="lastName"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              value={this.state.resp.email}
              name="email"
              id="email"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber"> Phone Number: </label>
            <input
              type="number"
              value={this.state.resp.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="role"> Role: </label>
            <select 
                value={this.state.resp.role} 
                name="role" 
                id="role"
                onChange={(e) => this.handleOnChange(e)}
                required>
              <option value="">Please choose an option</option>
              <option value="PROJECT_OWNER">Project Owner</option>
              <option value="TRADE_PARTNER">Trade Partner</option>
              <option value="TASK_OWNER">Task Owner</option>
            </select>
          </div>

          <div>
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              value={this.state.resp.username}
              name="username"
              id="username"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              value={this.state.resp.password}
              name="password"
              id="password"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword"> Confirm Password: </label>
            <input
              type="password"
              value={this.state.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => this.handleOnChange(e)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Submit"/>
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpStart: selectSignUpStart,
  signUpSuccessful: selectSignUpSuccessful,
  signUpFail: selectSignUpFail
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

