/* eslint-disable no-unused-vars */
import { Component } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

class AuthSwitcher extends Component {
  constructor() {
    super();
    this.state = {
      showSignIn: false,
      rememberMe: false,
    };
  }

  handleSignInClick = () => {
    this.setState({ showSignIn: true });
  };
  handleSignUpClick = () => {
    this.setState({ showSignIn: false });
  };

  render() {
    const { showSignIn } = this.state;
    return (
      <div className="App">
        <h1>Welcome to our Application</h1>
        <div>
          <button onClick={this.handleSignInClick}>Sign In</button>
          <button onClick={this.handleSignUpClick}>Sign Up</button>
        </div>
        {showSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    );
  }
}

export default AuthSwitcher;
