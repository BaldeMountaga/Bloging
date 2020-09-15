import React from 'react';

const myStyle ={
  marginBottom: '15px'
}
function Register(props) {
  
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
    return (
        <div>
               
            <h2>Registration Form</h2>

            <button onclick="document.getElementById('id01').style.display='block'" style={{width:"auto"}}>Sign Up</button>

            <div id="id01" class="modal">
              <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
              <form class="modal-content" action="/action_page.php">
                <div class="container">
                  <h1>Sign Up</h1>
                  <p>Please fill in this form to create an account.</p>
                  <hr/>
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <label for="psw-repeat"><b>Repeat Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                  
                  <label>
                    <input type="checkbox" checked="checked" name="remember" style={myStyle} /> Remember me
                  </label>

                  <p>By creating an account you agree to our <a href="/" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

                  <div class="clearfix">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    );
}

export default Register;