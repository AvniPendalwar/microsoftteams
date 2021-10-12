import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar()
{
    return(
        <>
        <nav style={{height:"80px",backgroundColor:"black"}} className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink id="nav1" style={{paddingLeft:"40px",fontSize:"30px"}} className="text-white" to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink id="nav2" style={{paddingLeft:"40px",fontSize:"30px"}} className="text-white" to="/activity">Activity</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink id="nav3" style={{paddingLeft:"40px",fontSize:"30px"}}  className="text-white" to="/teams">Teams</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink id="nav4" style={{paddingLeft:"40px",fontSize:"30px"}}  className="text-white" to="/assignments">Assignments</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink id="nav5" style={{paddingLeft:"40px",fontSize:"30px"}}  className="text-white" to="/calender">Calender</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Navbar