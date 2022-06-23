import React from 'react';
import './SignUp.css';
const SignUp = () => {
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
                <form action="">
                    <div className="contentCard">
                    <h3>Sign Up Now</h3>
                        <div className="inputField">
                            <input type="email" name="" id="" placeholder="Your Email*" />
                            <br />
                            <input type="password" name="" id="" placeholder="Your Password*" />
                            <br />
                    <input type="password" name="" id="" placeholder="Confirm Password*" />
                    </div>
                        <div className="check">
                             <input type="checkbox" name="" id="" />
                    <small>I agree to the Terms Of Services</small>
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