import React from 'react';
//import HomePage from './HomePage';
import './Login.css';

const myStyle ={
    backgroundColor: '#f1f1f1'
}
function LoginPage(props) {

    return (
        <div>
            <h2>Login Form</h2>
    
            <form>
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" class="avatar" />
                </div>
                
                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>
                
                <div className="container" style={myStyle}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="/">password?</a></span>
                </div>
            </form>
    
        </div>
    );
}
export default LoginPage;