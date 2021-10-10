import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
function Assign()
{
    return(
         <>
         <div className="container-fluid" style={{backgroundColor:"lightblue"}}>
            <div className="polaroid">
                <img id="img3"  src="https://www.technipages.com/wp-content/uploads/2021/01/microsoft-teams-assignments.png"/>
                <div className="container">
                    <p>Assignment tab</p>
                </div>
            </div>
            <br/><br/>
            <div style={{fontSize:"25px",paddingLeft:"25%",paddingRight:"25%"}}>The Assignments and Grades features in Teams for Education allow educators to assign tasks, work, or quizzes to their students. Educators can manage assignment timelines, instructions, add resources to turn in, grade with rubrics, and more. They can also track class and individual student progress in the Grades tab.</div>
            <br/><br/>
            <NavLink style={{fontSize:"18px",color:"black",paddingLeft:"44%"}} to="/">Go back to home page</NavLink><br/><br/>
        </div>
         </>
    );
}

export default Assign;