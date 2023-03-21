import React from "react";
import './Projects.css';
import { Link } from "react-router-dom";
export default function Projects(){
    return(
    <container className='projects'>
        <span>Projects</span>
        <span id="toggle-home"><Link to='/' className="home-link"><i className="fa fa-home"></i></Link></span>

        <div id="project-case">

            <div id="Project">
                <img src="https://via.placeholder.com/400x250" alt="unavailable"></img>
                <h2>Project Name</h2>
                <p>Project Description</p>
                <a href="#">Visit</a>
            </div>

            <div id="Project">
                <img src="https://via.placeholder.com/400x250" alt="unavailable"></img>
                <h2>Project Name</h2>
                <p>Project Description</p>
                <a href="#">Visit</a>
            </div>

            
            

        </div>


    </container>
    )
}