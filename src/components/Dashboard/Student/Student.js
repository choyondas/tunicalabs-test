import React from 'react';
import './Student.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';

const Student = () => {
    return (
        <div>
            <div className="header" >
                <div className="container">
                    <nav >
                        <h2>TUNICALABS MEDIA</h2>
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
                    <div className="sInput">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Age" />
                        <input type="text" placeholder="School" />
                        <input type="text" placeholder="Class" />
                        <input type="text" placeholder="Division" />
                       <input type="submit" value="Search" className='btn-search' />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Student;