import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

class SignInAndSignUpPage extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>SIGN UP FORM</h1>
                <SignUpForm />
                <h1>SIGN IN FORM</h1>
                <SignInForm />
            </div>
            
        )
    }
}

export default SignInAndSignUpPage;