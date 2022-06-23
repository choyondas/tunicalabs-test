import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import Table from 'react-bootstrap/Table';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import { IoIosNotifications } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import user from '../../../images/user.jpeg'

import './Employee.css';
import { NavLink } from 'react-router-dom';


const Employee = () => {
    return (
         <div>
            <div className="header" >
                <div className="container">
                    <nav className="navlogo">
                        <NavLink to='/'>
                            <h2>TUNICALABS MEDIA</h2>
                        </NavLink>
                        <div className="info">
                            <span>
                                <IoIosNotifications style={{ color:'white', fontSize:'24px'}} />

                            </span>
                            <div className="img">
                                <img src={user}alt="" />
                            </div>
                            <p>Choyon</p>
                            
                                <IoIosArrowDown/>
                            

                        </div>
                    </nav>
                </div>
            </div>


            <div className="studentContent">
                <div className="left">
                    <div className="leftHead">
                        <h4>Employee</h4>
                    <MdKeyboardArrowDown/>
                    </div>
                    <br />
                    <div className="viewS">
                    <FaUsers/>
                        <h4>View Student</h4>
                    </div>
                    <br />
                    <div className="addS" style={{color:'red', }}>
                    <HiUserAdd/>
                        <h4 >Add Student</h4>
                    </div>
                </div>

                <div className="right">
                    <p style={{color:'red', fontWeight:'600'}}>Add Student</p>
                    <div className="inputE">
                        <Table  size="sm">
 
  <tbody>
    <tr>
      
      <td>Full Name</td>
                                    <td><input type="text" placeholder="Name" style={{padding:'0.3rem 0.5rem'}} /></td>
                                </tr>
                                <br />
    <tr>
      
      <td>Date Of Birth</td>
      <td><input type="date" placeholder="DD/MM/YY"/></td>
                                </tr>
                                <br />
    <tr>
      <td><label for="class">School</label></td>
                                    <td>
  <select name="class" id="class">
    <option value="volvo" disabled>Select</option>
    <option value="saab">School</option>
    <option value="opel">School</option>
    <option value="audi">School</option>
    </select>
    </td>
    </tr><br />


   <tr>
      <td><label for="class">Class</label></td>
                                    <td>
  <select name="class" id="class">
    <option value="volvo" disabled>Select</option>
    <option value="saab">Class 2</option>
    <option value="opel">Class 3</option>
    <option value="audi">Class 4</option>
    </select>
    </td>
    </tr><br />


    <tr>
        <td><label for="division">Division</label></td>
                                    <td>
  <select name="division" id="division">
    <option value="volvo" disabled>Select</option>
    <option value="saab">Sylhet</option>
    <option value="opel">Dhaka</option>
    <option value="audi">Khulna</option>
                                        </select>
                                        </td>
     
                            </tr>
                                <br />


    <tr>
      
      <td>Status</td>
      <td>
        <input style={{margin:'0 10px'}} type="radio" id="age1" name="age" value="30"/>
  <label for="age1">Active</label>
        <input style={{margin:'0 10px'}} type="radio" id="age1" name="age" value="30"/>
  <label for="age1">Invoice</label>
        
      </td>
      
                                </tr>
                                <br />
                                <br />
                                <tr>
                                    <td>{""}</td>
                                <td>
                                    <input type="submit" value="Save" style={{ border: 'none', backgroundColor: '#901e1e', color: 'white', padding:'6px 5rem', borderRadius: '5px'}} />
                                    </td>
                                    </tr>
                               
                                <br />
   
                            </tbody>
  
                           
                        </Table>
                        

                    </div>
                </div>
                
            </div>


             <div className="studentDpage">
                    ,<NavLink to ='/signin'>
                        <p>Go sign in page</p>
                    </NavLink>
            </div>
        </div>
    );
};

export default Employee;