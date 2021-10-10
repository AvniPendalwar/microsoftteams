import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function Para1()
{
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
            <div className="polaroid">
                <img id="img1" src="https://oneminuteofficemagic.files.wordpress.com/2019/02/teams-activity-20190226-4.jpg?w=1140"/>
                <div className="container">
                    <p>Activity tab</p>
                </div>
            </div>
            <br/><br/>
            <div style={{fontSize:"25px",paddingLeft:"25%",paddingRight:"25%"}}>The activity tab shows you the number of Microsoft Teams activities by activity type. The activity types are number of team chat messages, private chat messages, calls, meetings and reactions. In a nutshell, activity tab is a record of all the Microsoft Teams activity.</div>
            <br/><br/>
            <NavLink style={{fontSize:"18px",color:"black",paddingLeft:"44%"}} to="/">Go back to home page</NavLink><br/><br/>
        </div>
        </>
    );
}

export default Para1;