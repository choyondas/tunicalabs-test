import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
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
                    <h3>Sign In Now</h3>
                        <div className="inputField">
                            <input type="email" name="" id="" placeholder="Your Email*" />
                            <br />
                            <input type="password" name="" id="" placeholder="Your Password*" />
                           
                    </div>
                        <div className="check">
                             <input type="checkbox"/>
                    <small> I agree to the Terms Of Services</small>
                   </div>

                    

                    
                    <input className='btn-submit' type="submit" value="Sign In" />

                        <NavLink to ='/'>
                            <p>Don't have an account? <a href=""><span>Sign Up</span></a></p>
                        </NavLink>
                        </div>


                </form>
            </div>

             <div className="otherPages">
                 <div className="studentDpage">
                <p>click to see the student dashboard page</p>
            </div>
            <div className="studentDpage">
                <p>click to see the Employee page</p>
            </div>
           </div>
        </div>
    );
};

export default SignIn;