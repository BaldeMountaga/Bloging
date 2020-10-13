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


function HomePage() {

  // const [count, setCount] = useState(0);
  // const [likes, setLikes] = useState(0);
  // const [diskLikes, setDisLikes] = useState(0);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const likePost = (e) => {
  //   setLikes(likes + 1);
  // }

  // const disLikePosts = (e) => {
  //   if (disLike >= 0) {
      
  //   }
  // }

// function decrement(e){
//   // count >= 0 ? setCount(count - 1) : {};
//   if (count >= 0) {
//     setCount(count - 1);
//   }
// }

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
                    <div className="card-content">
                      <h1>Vitamin D: A rapid review of the evidence for treatment or prevention in COVID-19</h1>
                      <h4>VERDICT</h4>
                      <p>We found no clinical evidence on vitamin D in COVID-19. There was no evidence related to vitamin D 
                        deficiency predisposing to COVID-19, nor were there studies of supplementation for preventing or 
                        treating COVID-19 (Search date upto 4th of April 2020, clinicaltrials.gov searched upto on 23rd April)..
                      </p>
                      <p>
                        There is some evidence that daily vitamin D3 supplementation over weeks to months may prevent other acute 
                        respiratory infections, particularly in people with low or very low vitamin D status. This evidence 
                        has limitations, including heterogeneity in study populations, interventions, and definitions of respiratory 
                        infections that include upper and lower respiratory tract involvement.
                      </p>
                      <p>The current advice is that the whole population of the UK should take vitamin D supplements to prevent vitamin D
                        deficiency. This advice applies irrespective of any possible link with respiratory infection.
                      </p>
                      <p>
                      Clinicians should treat patients with vitamin D deficiency irrespective of any link with respiratory infection.
                      </p>
                      <p>
                      Policymakers should attend to public health measures to ensure the population has adequate vitamin D intake.
                      </p>
                      <h4>Sources of vitamin D</h4>
                      <p>
                        We get vitamin D predominantly by synthesizing D3 in our skin using ultraviolet B (UVB) light, with small quantities 
                        obtained from food sources. In countries at high latitudes, the UVB in winter isn’t sufficient to synthesize enough 
                        vitamin D, so oral intake becomes more important. Dietary sources include animal products like oily fish, red meat, 
                        liver, and egg yolks, and fortified foods like infant formula milk, breakfast cereals and margarines (Box 2). 
                        Some mushrooms can provide vitamin D if grown under ultraviolet light.[3] The UK government’s Scientific Advisory 
                        Committee on Nutrition (SACN) advises a daily intake of 10 µg (micrograms) (400 International Units/day)* 
                        for everyone over the age of four years living in the UK in order to ensure musculoskeletal health.[4] 
                        They estimate that this will meet the needs of 97.5% of the population, but note that it is difficult to achieve this 
                        intake with diet alone and recommend supplements.[4] In adults the standard dose for prevention of vitamin D 
                        deficiency is 10 µg (400 IU) daily.[5] For young children SACN defined safe intake levels rather than reference intake 
                        values; for those less than one year of age 8.5 to 10 µg (340 to 400 IU) per day, and for children aged one to four 10
                        µg (400 IU) daily.[4]
                      </p>
                      <h4>Vitamin D deficiency</h4>
                      <p>Vitamin D is usually measured in blood serum in the relatively stable 25-hydroxycholecaliferol form (25(OH)D3). 
                        In the UK, 25 nmol/L (10ng/ml) is used as the cut off for deficiency, but there is no universally agreed definition so 
                        clinical studies have used different values to define vitamin D deficiency.[4]
                      </p>
                      <p>
                        Vitamin D deficiency is very common, particularly in winter. In January to March in the UK,
                      30% of people aged 65 years and over and 40% of people aged 19–64 years had serum vitamin D 
                      concentrations below 25 nmol/L.[6]
                      </p>
                      <h4>
                      The UK government’s SACN report identifies people at high risk of deficiency [4]:
                      </h4>
                      <li>Infants and children aged under four years old;</li>
                      <li>Pregnant and breastfeeding women, particularly teenagers and young women;</li>
                      <li>People over 65;</li>
                      <li>People who have low or no exposure to the sun, for example those who cover their skin for 
                        cultural reasons and those who are housebound or confined indoors for long periods;
                      </li>
                      <li>People with darker skin, for example people of African, African-Caribbean, or South Asian family origin.</li>
                      <br/>
                      <h4>In vitro evidence for vitamin D’s role in immunity and infection</h4>
                      <p>There is in vitro evidence that vitamin D is involved in immune cell responses to some viral and bacterial respiratory pathogens.
                        Vitamin D appears to upregulate genes involved in responses in immune cells that are exposed to Streptococcus pneumoniae.
                        [7] There are laboratory studies showing that respiratory epithelial cells can convert vitamin D to its active form, 
                        and that vitamin D metabolites increase cytokines involved in immunity in response to respiratory viruses.
                          However, vitamin D metabolites do not seem to prevent viral replication in cell cultures.[2, 8]
                      </p>
                    </div>
                    {/* <div className="card-footer">
                      <div><button className="btn1-style" onClick={likePost}><strong>{like}</strong><AiFillLike size={25}/></button></div>
                      <div><button className="btn2-style" onClick={disLikePost}><strong>{disLike}</strong><AiFillDislike size={25}/></button></div>
                    </div> */}
                    <br/><br/><br/><br/>
                    <div>
                      <form className="comment-form">
                        <h3>Leave a Reply</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <h6>Comment</h6>
                        <textarea className="comment" rows="4" cols="65" type="textarea"  placeholder="Add your comment" name="name" required />
                        <label htmlFor="name" className="name-input">Name *</label>
                        <input type="text" id="name" required/>

                        <label htmlFor="name" className="name-input">Email * </label>
                        <input type="text" id="name" required/>

                        <label htmlFor="daily" className="chbox">
                          <input type="checkbox" id="daily" name="subscribe" /> Notify me of follow-up comments by email.
                        </label>
                        <br/>
                        <label htmlFor="daily" className="chbox">
                          <input type="checkbox" id="daily" name="subscribe" /> Notify me for new post.
                        </label>
                        <br/><br/><br/>
                        <div className="buttons">
                          <button  type="button" className="button1">Post</button>
                          <button  type="button" className="button2">Edit</button>
                          <button  type="button" className="button3">Delete</button>
                        </div>
                      </form>
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
                  <h4>Follow me</h4>
                  <div className="media">
                      <Link to="https://www.linkedin.com/feed/"><AiFillLinkedin style={{float: "right"}} size={40}/></Link>
                      <Link to="https://twitter.com/home?lang=en"><AiOutlineTwitter style={{float: "right"}} size={40}/></Link>
                       <Link to="https://web.facebook.com/mountagha.balde.3"><FaFacebook style={{float: "right"}} size={40}/> </Link>
                  </div>
                </div> 
              </div>
            </div>

            <div>
              <div className="right"> @2020 All right reserved.</div>
            </div>
        </div>
    );
}

export default HomePage;