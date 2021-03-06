import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInAndSignUpPage = () => (
    <div>
        <div className='sign-in-and-sign-up'>
            <SignIn /> 
        </div>
        <div className='sign-in-and-sign-up'>
            <SignUp />
        </div>
    </div>
);

export default SignInAndSignUpPage;