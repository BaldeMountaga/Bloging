import { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function HomePage(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div>

              <Navbar color="dark" dark expand="md" >
                <NavbarBrand href="/">Scientist Blog</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/Login">Log In</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="Register">Register</Link>
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
                    <div className="card-child1"><strong>107</strong> Likes</div>
                    <div className="card-child2"><strong>40</strong> Vue</div>
                  </div>
                </div>
                <div className="card">
                  <h3>Incredible High-Res Images Of The Sun Snapped By Upgraded European Telescope</h3>
                  <p>The year 2020 will certainly have plenty of negative memories associated with it but if we are looking for positives, 
                    these first nine months have delivered us some incredible observations of the Sun, 
                    from Earth and from Space. The newly upgraded GREGOR telescope has just added to these with a fantastic contribution.
                  </p>
                  <div className="card-footer">
                    <div className="card-child1"><strong>107</strong> Likes</div>
                    <div className="card-child2"><strong>90</strong> Vue</div>
                  </div>
                </div>
                <div className="card">
                  <h3>Orca That Carried Her Dead Calf For 17 Days Has Given Birth To A Healthy Baby</h3>
                  <p>You may remember J35, the orca more affectionately known as Tahlequah, from the tragic headlines in 2018 when she carried her 
                    stillborn calf for 17 days on a "Tour of Grief". The world’s hearts collective broke for Tahlequah.
                  </p>
                  <div className="card-footer">
                    <div className="card-child1"><strong>30</strong> Likes</div>
                    <div className="card-child2"><strong>50</strong> Vue</div>
                  </div>
                </div>
              </div>
              <div className="rightcolumn">
                <div className="card">
                  <h2>Software Developer</h2>
                  <div class="fakeimg">Image</div>
                  <p>I am a motivated Software Engineer I publish about Web Devlopement in Java, C#, .NET, React, NodeJs</p>
                </div>
                <div className="card">
                  <h3>Popular Post</h3>
                  <div className="fakeimg"><img src="./Images/popular post1.jpg" alt="Popular post" /></div><br/>
                  <div className="fakeimg">Image</div><br/>
                  <div className="fakeimg">Image</div>
                </div>
                <div className="card">
                  <h3>Follow Me</h3>
                  <p>Follow me <a href="https://twitter.com/home?lang=en">On Tweeter</a></p>
                </div>
              </div>
            </div>

          <div className="footer">
            All right reserved.
          </div>
      </div>
    );
}

export default HomePage;