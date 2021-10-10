import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
function Heading1()
{
    return(
        <React.Fragment>
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

           <br/><br/><br/>



           <h3 style={{paddingLeft:"1%"}}>What is Microsoft Teams?</h3>
           <div style={{paddingLeft:"1%",fontSize:"17px"}}>
           Microsoft Teams is a proprietary business communication platform developed by Microsoft, as part of the Microsoft 365 family of products. Teams primarily competes with the similar service Slack, offering workspace chat and videoconferencing, file storage, and application integration. Teams is replacing other Microsoft-operated business messaging and collaboration platforms, including Skype for Business and Microsoft Classroom. Throughout the COVID-19 pandemic, Teams, and other software such as Zoom and Google Meet, gained much interest as many meetings have moved to a virtual environment. As of 2021, it has about 145 million users.
           </div>

           <br/><br/><br/>


            <div id="demo" className="carousel slide" data-ride="carousel">

              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
              </ul>

              

              <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/220350iAB12F9D09E4FB916/image-size/large?v=v2&px=999" height="600" width="100%"/>
                        <div className="carousel-caption">
                            <h3>Attend/Host meetings!</h3>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://cdn.vox-cdn.com/thumbor/ntxg24tSmh3RAS-ZQMhKuudGaeU=/0x0:2640x1760/1200x800/filters:focal(1109x669:1531x1091)/cdn.vox-cdn.com/uploads/chorus_image/image/66965855/microsoftteams.0.jpg" height="600" width="100%"/>
                        <div className="carousel-caption">
                            <h3 className="text-dark">Chat with people!</h3>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/85043i6A7BE275AD744D06?v=v2" height="600" width="100%"/>
                        <div className="carousel-caption">
                            <h3 className="text-dark">Plan it out!</h3>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://www.crayon.com/globalassets/global-graphical-assets/images/everyday-people/teams-1200x652.jpg" height="600" width="100%"/>
                        <div className="carousel-caption">
                            <h3>Apply backgroung effects!</h3>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://spikesite-17132.kxcdn.com/wp-content/uploads/MS-Teams.png?format=webp" height="600" width="100%"/>
                        <div className="carousel-caption">
                            <h3 className="text-dark">Mobile app available!</h3>
                        </div>
                    </div>
              </div>


              <a className="carousel-control-prev" href="#demo" data-toggle="tooltip" title="previous" data-slide="prev">
                  <img src="https://static.thenounproject.com/png/869745-200.png" height="10%"/>
              </a>

              <a className="carousel-control-next" href="#demo" data-toggle="tooltip" title="next" data-slide="next">
              <img src="https://static.thenounproject.com/png/3134211-200.png" height="10%"/>
              </a>

            </div>
        </React.Fragment>
    );
}

export default Heading1;    