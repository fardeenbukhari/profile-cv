import React from "react";
import { Link } from "react-router-dom";
const FirstName = 'Fardeen';
const SecondName = 'Bukhari';
const AboutFirstWord = "Hey People! ";
const AboutInfo = 'i am Creative UI/UX Designer from Kashmir, India, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way';
export default function Home(){
    return(
        <container className='container'>
        <div className='profile'>
          <img src='https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg'></img>
          <span id='animator'></span>
          <span id='name'>{FirstName} <em> {SecondName}</em></span>
          <span id='info'>{AboutFirstWord} <em> {AboutInfo}</em></span>
          <div id='social'>
          <span>Follow Me</span>
            <div id='links'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            </div>
          </div>
          </div>
<div id="pages">
<span>Contact</span>
  <Link to='contact' className="contact-link"><i className="fa fa-address-card"></i></Link>
  <span>Projects</span>
  <Link to='projects' className="projects-link"><i className="fa fa-code"></i></Link>
  

  </div>  
       </container>
    )
}