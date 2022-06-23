import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    return (

        <div className="signPage" >
            <div className="header" >
                <div className="container">
                    <nav >
                        <NavLink to='/'>
                            <h2>TUNICALABS MEDIA</h2>
                        </NavLink>
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
                             <input type="checkbox"/>
                    <small> I agree to the Terms Of Services</small>
                   </div>

                    

                    
                    <input className='btn-submit' type="submit" value="Sign Up" />

                        <NavLink to ='signin'>
                            <p>Already have an account? <span>Sign In</span></p>
                        </NavLink>
                        </div>


                </form>
            </div>

            <div className="otherPages">
                 <div className="studentDpage">
                    <NavLink to='student-dashboard'>
                        <p>Go to dashboard page</p>
                </NavLink>
            </div>
            <div className="studentDpage">
                    ,<NavLink to ='employee'>
                        <p>Go to Employee page</p>
                    </NavLink>
            </div>
           </div>
        </div>
    );
};

export default SignUp;