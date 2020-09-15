import React, { useState } from 'react';
import  popular from  './Images/popular post1.jpg';
import vitamin from './Images/vitamin.jpg';
import api from'./Images/api.jpg'

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

function HomePage(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <div>
              <Navbar  color="dark" dark expand="md" >
                <NavbarBrand href="/">Scientist Blog</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="links">
                     <Link to="./LoginPage">Log In</Link>
                    </NavItem>
                    <NavItem className="links">
                      <Link to="./Register">Register</Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div> <br/>

            <div className="row">
              <div className="leftcolumn">
                <div className="card">
                  <h3>Best Evidence Yet That Vitamin D Reduces Covid-19 Risk</h3>
                  <p>Vitamin D deficiency has been proposed as a risk factor for Covid-19 almost since the pandemic's start. 
                    Since vitamin D supplements are cheap and widely available, and sunlight is free, it would be fabulous news 
                    if this was true. However, despite many suggestive pieces of evidence, confirmation has been hard to find. 
                    A new study offers probably the best evidence yet that people with vitamin D deficiency are more likely to become 
                    infected, although it's still not as conclusive as scientists would like.
                  </p>
                  <div className="card-footer">
                    <div className="card-child1"><strong>107</strong><AiFillLike size={25}/></div>
                    <div className="card-child2"><strong>40</strong><AiFillEye size={25}/></div>
                  </div>
                </div>
                <div className="card">
                  <h3>Incredible High-Res Images Of The Sun Snapped By Upgraded European Telescope</h3>
                  <p>The year 2020 will certainly have plenty of negative memories associated with it but if we are looking for positives, 
                    these first nine months have delivered us some incredible observations of the Sun, 
                    from Earth and from Space. The newly upgraded GREGOR telescope has just added to these with a fantastic contribution.
                  </p>
                  <div className="card-footer">
                    <div className="card-child1"><strong>107</strong><AiFillLike size={25}/></div>
                    <div className="card-child2"><strong>90</strong><AiFillEye size={25}/></div>
                  </div>
                </div>
                <div className="card">
                  <h3>Orca That Carried Her Dead Calf For 17 Days Has Given Birth To A Healthy Baby</h3>
                  <p>You may remember J35, the orca more affectionately known as Tahlequah, from the tragic headlines in 2018 when she carried her 
                    stillborn calf for 17 days on a "Tour of Grief". The world’s hearts collective broke for Tahlequah.
                  </p>
                  <div className="card-footer">
                    <div className="card-child1"><strong>30</strong><AiFillLike size={25}/></div>
                    <div className="card-child2"><strong>50</strong><AiFillEye size={25}/></div>
                  </div>
                </div>
              </div>
              <div className="rightcolumn">
                {/* <div className="card">
                  <h2>Software Developer</h2>
                  <div class="fakeimg"><img src= { Picture } alt="Profile" height='200px' width='inherit' /></div>
                  <p>I am a motivated Software Engineer I publish about Web Devlopement in Java, C#, .NET, React, NodeJs</p>
                </div> */}
                <div className="card">
                  <h3>Popular Post</h3>
                  <div className="fakeimg">
                    <img src={ vitamin } alt="Research looking throug" />
                    <p><a href="Best Evidence Yet That Vitamin D Reduces Covid-19 Risk">Best Evidence Yet That Vitamin D Reduces Covid-19 Risk</a></p>
                  </div><br/>
                  <div className="fakeimg"><img src={ api } alt="Research looking throug" />
                  <p><a  href="https://rapidapi.com/?utm_source=google&utm_medium=cpc&utm_campaign=smart-display&utm_content=none&gclid=EAIaIQobChMIp-zcgrvr6wIVhqh7Ch1MMgZqEAEYASAAEgKVxvD_BwE">
                    World's Best API Marketplace</a></p></div><br/>
                  <div className="fakeimg"><img src={ popular } alt="Popular post" />
                  <p><a href="https://edition.cnn.com/2020/09/14/politics/terry-branstad-china-intl-hnk/index.html">US ambassador in Beigin resign due to tension between China and US</a></p>
                  </div>
                </div>
                <div className="card">
                  <h4>Social Media</h4>
                  <div className="media">
                      <Link to="https://www.linkedin.com/feed/"><AiFillLinkedin style={{float: "right"}} size={40}/></Link>
                      <Link to="https://twitter.com/home?lang=en"><AiOutlineTwitter style={{float: "right"}} size={40}/></Link>
                  </div>
                </div> 
              </div>
            </div>

            <div className="footer" >
              @2020 All right reserved.
            </div>
        </div>
    );
}

export default HomePage;