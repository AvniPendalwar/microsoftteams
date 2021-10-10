import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function Image()
{
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
            <div className="polaroid">
                <img id="img2"  src="https://www.techadvisor.com/cmsdata/features/3794671/how-to-create-teams-in-teams-1.png"/>
                <div className="container">
                    <p>Teams tab</p>
                </div>
            </div>
            <br/><br/>
            <div style={{fontSize:"25px",paddingLeft:"25%",paddingRight:"25%"}}>Teams tab consists of a group of people brought together for work, projects, or common interests. Teams are made up of two types of channels — standard (available and visible to everyone) and private (focused, private conversations with a specific audience).</div>
            <br/><br/>
            <NavLink style={{fontSize:"18px",color:"black",paddingLeft:"44%"}} to="/">Go back to home page</NavLink><br/><br/>
        </div>
        </>
    );
}

export default Image;