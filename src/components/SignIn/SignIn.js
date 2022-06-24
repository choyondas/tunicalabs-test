import React, { useState } from 'react';

import './SignIn.css';

const SignIn = () => {

 const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
        
    }

    const handleLoginSubmit = e => {
        alert('hello')
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
                <form onSubmit ={handleLoginSubmit}>
                    <div className="contentCard">
                    <h3>Sign In Now</h3>
                        <div className="inputField">
                            <input type="email" name="email" id="" placeholder="Your Email*" onChange={handleOnChange} />
                            <br />
                            <input type="password" name="password" id="" placeholder="Your Password*" onChange={handleOnChange} />
                           
                    </div>
                        <div className="check">
                             <input type="checkbox"/>
                    <small> I agree to the Terms Of Services</small>
                   </div>

                    

                    
                    <input className='btn-submit' type="submit" value="Sign In" />

                        
                            <p>Don't have an account? <a href=""><span>Sign Up</span></a></p>
                      
                        </div>


                </form>
            </div>

             
        </div>
    );
};

export default SignIn;