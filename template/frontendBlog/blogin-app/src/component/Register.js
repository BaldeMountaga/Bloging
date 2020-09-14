import React from 'react';

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
            <button onClick="document.getElementById('id01').style.display='block'">SingUp</button>
              <div id="id01" className="modal">
                  <span onClick="document.getElementById('id01').style.display='none'" className="close"
                  title="Close Modal">times;</span>
                  
                  <form class="modal-content" action="/">
                      <div className="container">
                        <p>please fill in this form to create an account.</p>
                        <hr/>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="baldemtag@gmail.com" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter password" name="psw" required />
                        
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Confirm password" name="psw-repeat" required />

                        <label>
                          <input type="checkbox" checked="cheched" name="remenmber" style="margin-bottom: 15px"> Remember me</input>
                        </label>
                        <p>By creating an account you agre to our <a href="/">Terms and Privacy</a></p>
                        <div className="clearfix">
                          <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                          <button type="submit" className="signup">SinUp</button>
                        </div>
                      </div>
                  </form>
              </div>
        </div>
    );
}

export default Register;