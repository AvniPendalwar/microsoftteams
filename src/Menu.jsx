import React from 'react';
import { NavLink } from 'react-router-dom';
function Menu()
{
  return(
    <>
    <NavLink className="bg-dark text-white" to="/">Home</NavLink>
    <NavLink className="bg-dark text-white" to="/activity">Activity</NavLink>
    <NavLink className="bg-dark text-white" to="/teams">Teams</NavLink>
    <NavLink className="bg-dark text-white" to="/assignments">Assignments</NavLink>
    <NavLink className="bg-dark text-white" to="/calender">Calender</NavLink>
    </>
  );
}

export default Menu;