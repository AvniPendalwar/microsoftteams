import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function Cal()
{
    return(
         <>
         <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
            <div className="polaroid">
                <img id="img4"  src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/225186i663C8EFBEE5F64F2/image-size/large?v=v2&px=999"/>
                <div className="container">
                    <p>Calender tab</p>
                </div>
            </div>
            <br/><br/>
            <div style={{fontSize:"25px",paddingLeft:"25%",paddingRight:"25%"}}>The Microsoft Teams app has one main calendar that's assigned to your entire group or organization. Group members can add meetings or events to this calendar that automatically show up in the calendar for other members. Individuals can also be added to calendar events or meetings if they're required to attend. Now, you don't have to navigate to different channels to view/attend the meetings.</div>
            <br/><br/>
            <NavLink style={{fontSize:"18px",color:"black",paddingLeft:"44%"}} to="/">Go back to home page</NavLink><br/><br/>
        </div>
         </>
    );
}

export default Cal;