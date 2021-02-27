import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

class SignInAndSignUpPage extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>SIGN UP PAGE</h1>
                <SignUpForm/>
            </div>
            
        )
    }
}

export default SignInAndSignUpPage;