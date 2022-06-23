import React from 'react';
import './Student.css';
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
import { NavLink } from 'react-router-dom';



const Student = () => {
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
                        <h4>Student</h4>
                    <MdKeyboardArrowDown/>
                    </div>
                    <br />
                    <div className="viewS">
                    <FaUsers/>
                        <h4>View Student</h4>
                    </div>
                    <br />
                    <div className="addS">
                    <HiUserAdd/>
                        <h4>Add Student</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>View Student</h4>
                <br />
                    <div className="sInput">
                        <div className="sfield">
                            <p>Name</p>
                        </div>
                        <div className="sfield">
                            <p>Age</p>
                        </div>
                        <div className="sfield">
                            <p>School</p>
                            <MdKeyboardArrowDown className="arrow"/>

                        </div>
                        <div className="sfield">
                            <p>Class</p>
                            <MdKeyboardArrowDown className="arrow"/>
                        </div>
                        <div className="sfield">
                            <p>Division</p>
                            <MdKeyboardArrowDown className="arrow"/>
                        </div>


                       <input type="submit" value="Search" className='btn-search' />
                    </div>
                    <br />

                    {/* //table section */}

                       <Table striped>
      <thead>
                            <tr style={{ backgroundColor: '#901e1e', color: 'white', border:'none'}}>
          <th>ID'V</th>
          <th>Name</th>
          <th>Age</th>
          <th>School</th>
          <th>Class</th>
          <th>Division</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{backgroundColor:'white'}}>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Student name</td>
          <td>10</td>
          <td>Model School</td>
          <td>3</td>
          <td>A</td>
          <td>Active</td>
                                <td className='modify'>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                    
          </td>
        </tr>
        
      </tbody>
                    </Table>
                    
                    <div className="pagination">
                        <MdKeyboardArrowLeft/>

                        <div className="pageItem1">
                            <p>1</p>
                        </div>
                        <div className="pageItem">
                            <p>2</p>
                        </div>
                        <div className="pageItem">
                            <p>3</p>
                        </div>
                        <MdKeyboardArrowRight/>
                    </div>

                    <div className="download">
                        <span>
                            
                            Download Excel
                            <HiDownload  style ={{marginLeft:'5px'}} />
                       
                        </span>
                        
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Student;