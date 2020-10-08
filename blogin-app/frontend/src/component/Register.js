import React from 'react';
import './Register.css'

const myStyle ={
  marginBottom: '15px'
}

function Register(props) {

  return (
    <div>
        <div>
          <form className="modal-content">
            <div className="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p><hr/>
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                  
              <label>
                <input type="checkbox" name="remember" style={myStyle} /> Remember me
              </label>

              <p>By creating an account you agree to our <a href="/" style={{color:"dodgerblue"}} >Terms &amp; Privacy</a>.</p>

              <div className="clearfix d-flex">
                <button type="button" className="btn btn-danger mr-3 p-2">Cancel</button>
                <button type="submit" className="btn btn-success">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
}

export default Register;