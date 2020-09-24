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
import { AiOutlineTwitter, AiFillLinkedin, AiFillEye, AiFillLike } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function HomePage(props) {

  // const [count, setCount] = useState(0);
  
  // function increment(){
  //   setCount(count + 1);
  // }

  // function decrement(){
  //   setCount(count - 1);
  // }
    
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
                     <Link className="text-white" to="./LoginPage">Log In</Link>
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
                      <div className="card-child1"><strong>107</strong><AiFillLike size={25}/></div>
                      <div className="card-child2"><strong>40</strong><AiFillEye size={25}/></div>
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
                      <div className="card-child1"><strong>107</strong><AiFillLike size={25}/></div>
                      <div className="card-child2"><strong>90</strong><AiFillEye size={25}/></div>
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
                      <div className="card-child1"><strong>30</strong><AiFillLike size={25}/></div>
                      <div className="card-child2"><strong>50</strong><AiFillEye size={25}/></div>
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
                    <img src={ coronavirus } alt="Research looking throug" class="img-fluid"/>
                    <p><a href="/">Best Evidence Yet That Vitamin D Reduces Covid-19 Risk</a></p>
                  </div><br/>
                  <div><img src={ amazon } alt="Research looking throug" class="img-fluid" />
                  <p><a  href="https://rapidapi.com/?utm_source=google&utm_medium=cpc&utm_campaign=smart-display&utm_content=none&gclid=EAIaIQobChMIp-zcgrvr6wIVhqh7Ch1MMgZqEAEYASAAEgKVxvD_BwE">
                    World's Best API Marketplace</a></p></div><br/>
                  <div><img src={ Nasa } alt="Popular post" class="img-fluid"/>
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
                <div class="container">
                  <h2>Subscribe to our Newsletter</h2>
                  <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.</p>
                </div>

                <div className="container">
                  <input type="text" placeholder="Name" name="name" required />
                  <input type="text" placeholder="Email address" name="mail" required />
                  <label for="daily" className="chbox">
                    <input type="checkbox" id="daily" name="subscribe" /> Daily Newsletter
                  </label>
                </div>
                <div class="container">
                  <input  type="submit" value="Subscribe" />
                </div>
              </form>
              <div className="right"> @2020 All right reserved.</div>
            </div>
        </div>
    );
}

export default HomePage;