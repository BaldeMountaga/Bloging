import React from 'react'

function Login(props) {
    // Get the modal
    var modal = document.getElementById('id01');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    //handling event
    // handleEmailChange(e){
    //     this.setState({email:e.target.value})
    // }
    // handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    // }
    
    // Login(){
    //     alert('Email address is ' + this.state.email + 'Pasword is ' +this.state.password);
    // }
    return (
        <div>
            <button onclick="document.getElementById('id01').style.display='block'">Login</button>
            <div id="id01" className="modal">
                <span onclick="document.getElementById('id01').style.display='none'"
                className="close" title="Close Modal">&times;</span>
                
                <form className="modal-content animate" action="/action_page.php">
                    <div className="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label for="email"><b>Email</b></label>
                        <input type="email" onChange={this.handleEmailChange} placeholder="Enter Username or email" name="uname" required />
                        
                        <label for="psw"><b>Pasword</b></label>
                        <input type="password" onChange={this.handlePasswordChange} placeholder="Enter Password" name="psw" required />

                        <button type="submit" onClick={this.Login}>Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"> Remember</input>
                        </label>
                    </div>
                    <div className="container" style={"background-color:#f1f1f1"}>
                        <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot<a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;