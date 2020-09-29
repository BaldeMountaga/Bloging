import React, { useState } from 'react';
import  Nasa from  './Images/Nasa.jpg';
import coronavirus from './Images/coronavirus.jpg';
import amazon from './Images/amazon.png';
import logo from './Images/logo.jpg'


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillLinkedin, AiFillLike, AiFillDislike} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function HomePage(props) {

  const [count, setCount] = useState(0);
  
  const increment = () =>{
    setCount(count + 1);
  }
    
  const decrement = () =>{
    setCount(count - 1);
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <div>
            <Navbar  color="dark" dark expand="md" >
              <NavbarBrand className="brand" src={logo}>Scientist Blog</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="mr-4 ">
                     <Link className=" text-white " to="./LoginPage">Log In</Link>
                    </NavItem>
                    <NavItem className="mr-2 text-white">
                      <Link className="text-white" to="./Register">Register</Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div> <br/>

            <div className="row">
              <div className="leftcolumn">
                <div className="card">
                  <div className="card-body">
                    <h3>Best Evidence Yet That Vitamin D Reduces Covid-19 Risk</h3>
                    <p>Vitamin D deficiency has been proposed as a risk factor for Covid-19 almost since the pandemic's start. 
                      Since vitamin D supplements are cheap and widely available, and sunlight is free, it would be fabulous news 
                      if this was true. However, despite many suggestive pieces of evidence, confirmation has been hard to find.
                    </p>
                    <div className="card-footer">
                      <div><button className="btn1-style" onClick={increment}><strong>0</strong><AiFillLike size={25}/></button></div>
                      <div><button className="btn2-style" onClick={decrement}><strong>0</strong><AiFillDislike size={25}/></button></div>
                    </div>
                    <div>
                        <h6>Comment</h6>
                        <textarea className="comment" rows="4" cols="65" type="textarea"  placeholder="Add your comment" name="name" required />
                        <div className="buttons">
                          
                          <button  type="button" className="button1">Post</button>
                          <button  type="button" className="button2">Edit</button>
                          <button  type="button" className="button3">Delete</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h3>Incredible High-Res Images Of The Sun Snapped By Upgraded European Telescope</h3>
                    <p>The year 2020 will certainly have plenty of negative memories associated with it but if we are looking for positives, 
                      these first nine months have delivered us some incredible observations of the Sun, 
                      from Earth and from Space. The newly upgraded GREGOR telescope has just added to these with a fantastic contribution.
                    </p>
                    <div className="card-footer">
                      <div><button className="btn1-style" onClick={increment}><strong>0</strong><AiFillLike size={25}/></button></div>
                      <div><button className="btn2-style" onClick={decrement}><strong>0</strong><AiFillDislike size={25}/></button></div>
                    </div>
                    <div>
                        <h6>Comment</h6>
                        <textarea className="comment" rows="4" cols="65" type="textarea"  placeholder="Add your comment" name="name" required />
                        <div className="buttons">
                          
                          <button  type="button" className="button1">Post</button>
                          <button  type="button" className="button2">Edit</button>
                          <button  type="button" className="button3">Delete</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h3>Organized Planing-Crystallizing Desire into Action</h3>
                    <p>You have learned that everything man creates or acquires, begins in the form of DESIRE, that desire is taken
                      on the first lap of its journey, form the abstract to the concrete, into the workshop of the IMAGINATION,
                      where PLANS for its transition are created and organized.
                    </p>
                    <div className="card-footer">
                      <div><button className="btn1-style" onClick={increment}><strong>0</strong><AiFillLike size={25}/></button></div>
                      <div><button className="btn2-style" onClick={decrement}><strong>0</strong><AiFillDislike size={25}/></button></div>
                    </div>
                    <div>
                        <h6>Comment</h6>
                        <textarea className="comment" rows="4" cols="65" type="textarea"  placeholder="Add your comment" name="name" required />
                        <div className="buttons">
                          
                          <button  type="button" className="button1">Post</button>
                          <button  type="button" className="button2">Edit</button>
                          <button  type="button" className="button3">Delete</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightcolumn">
                <div className="card">
                  <h3>Popular Post</h3>
                  <div>
                    <img src={ coronavirus } alt="Research looking throug" className="img-fluid"/>
                    <p><a href="/">Best Evidence Yet That Vitamin D Reduces Covid-19 Risk</a></p>
                  </div><br/>
                  <div><img src={ amazon } alt="Research looking throug" className="img-fluid" />
                  <p><a  href="https://rapidapi.com/?utm_source=google&utm_medium=cpc&utm_campaign=smart-display&utm_content=none&gclid=EAIaIQobChMIp-zcgrvr6wIVhqh7Ch1MMgZqEAEYASAAEgKVxvD_BwE">
                    World's Best API Marketplace</a></p></div><br/>
                  <div><img src={ Nasa } alt="Popular post" className="img-fluid"/>
                  <p><a href="https://edition.cnn.com/2020/09/14/politics/terry-branstad-china-intl-hnk/index.html">US ambassador in Beigin resign due to tension between China and US</a></p>
                  </div>
                </div>
                <div className="card">
                  <h4>Social Media</h4>
                  <div className="media">
                      <Link to="https://www.linkedin.com/feed/"><AiFillLinkedin style={{float: "right"}} size={40}/></Link>
                      <Link to="https://twitter.com/home?lang=en"><AiOutlineTwitter style={{float: "right"}} size={40}/></Link>
                       <Link to="https://web.facebook.com/mountagha.balde.3"><FaFacebook style={{float: "right"}} size={40}/> </Link>
                  </div>
                </div> 
              </div>
            </div>

            <div className="footer" >
              <form className="form-subscription">
                <div className="container">
                  <h2>Subscribe to our Newsletter</h2>
                  <p>Get the latest news from scientist blog in your imbox each week</p>
                </div>

                <div className="container">
                  <input type="text" placeholder="Name" name="name" required />
                  <input type="text" placeholder="Email address" name="mail" required />
                  <label htmlFor="daily" className="chbox">
                    <input type="checkbox" id="daily" name="subscribe" /> Daily Newsletter
                  </label>
                </div>
                <div className="container">
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>
            <div className="right"> @2020 All right reserved.</div>
        </div>
    );
}

export default HomePage;