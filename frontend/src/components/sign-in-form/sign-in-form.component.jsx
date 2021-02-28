import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import React, { Component } from "react";
import { signInStart } from "../../redux/user/user.actions";
import { selectSignInSignUpMessage } from "../../redux/user/user.selectors";

 class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      resp: {
        email: "",
        password: "",
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
   
      let response = this.state.resp;
      response[name] = value;

      this.setState({ resp: response }, () => console.log(this.state));
    
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
      this.props.signInStart(this.state.resp);
      this.setState({
        resp: {
          email: "",
          password: "",
        },
      });
  };

  render() {
      const {message} = this.props
    return (
      <div style={{ margin: "10px" }}>
          {
          message ? <div>{message}</div> : null
        }
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleOnSubmit}
        >
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
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    message: selectSignInSignUpMessage
});

const mapDispatchToProps = (dispatch) => ({
    signInStart: (data) => dispatch(signInStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
