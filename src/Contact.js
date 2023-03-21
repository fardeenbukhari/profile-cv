import React from "react";
import './Contact.css';
import { Link } from "react-router-dom";
export default function Contact(){
    return(
        <>
      <form className="form">
        <span>Contact</span>
        <h2>Feel free to share your queries with us</h2>
        <input type='text' placeholder="name" required></input>
        <input type='email' placeholder="email" required></input>
        <textarea placeholder="Message!"></textarea>
        <input type='submit'></input>
        <span className="toggle-home"><Link to='/' className="home-link"><i className='fa fa-home'></i></Link></span>
      </form>


</>
    )
}