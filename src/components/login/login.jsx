import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className='login-column'>
                <div>
                    <h1 className='customer-login'>Customer</h1>
                    <h1 className='customer-login'>Login</h1>
                    <h1 className='customer-login'>_</h1>
                </div>
            </div>
            <div className='inputs login-column'>
                <div className='login-container'>
                    <input type='email' id='email' name='email' className='email' placeholder='Email'/>
                    <input type='password' id='password' name='password' className='password' placeholder ='Password' />
                    <div className='sign-in-container'>
                        <button className='sign-in font-light'>SIGN IN</button>
                        <div className='sign-up-forgot-container'>
                            <a className='forgot-password link'>Forgot your password?</a>
                            <div className='new-customer-container'><p className='new-customer'>New Customer?</p><a className='sign-up link'>Sign Up</a></div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Login;