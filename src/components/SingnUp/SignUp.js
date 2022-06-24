import React, { useState } from 'react';

import './SignUp.css';
const SignUp = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password not matched");
            return
        } else {
            alert('successfuly logged in')
        }
        e.preventDefault();
        
}

    return (

        <div className="signPage" >
            <div className="header" >
                <div className="container">
                    <nav >
                        
                            <h2>TUNICALABS MEDIA</h2>
                        
                    </nav>
                </div>
            </div>
            <div className="content">
                <form onSubmit={handleLoginSubmit}>
                    <div className="contentCard">
                    <h3>Sign Up Now</h3>
                        <div className="inputField">
                            <input type="email" name="email" id="" placeholder="Your Email*"
                            onChange={handleOnChange}
                            />
                            <br />
                            <input type="password" name="password" id="" placeholder="Your Password*"
                            onChange={handleOnChange}
                            />
                            <br />
                            <input type="password" name="password2" id="" placeholder="Confirm Password*"
                            onChange={handleOnChange}
                            />
                    </div>
                        <div className="check">
                             <input type="checkbox"/>
                    <small> I agree to the Terms Of Services</small>
                   </div>

                    

                    
                    <input className='btn-submit' type="submit" value="Sign Up" />

                      
                            <p>Already have an account? <span>Sign In</span></p>
                    
                        </div>


                </form>
            </div>

          
        </div>
    );
};

export default SignUp;