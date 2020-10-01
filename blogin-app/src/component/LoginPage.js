import React from 'react';
import './Login.css';
import { FcManager } from "react-icons/fc";


const myStyle ={
    backgroundColor: '#f1f1f1'
}

function LoginPage(props) {

    return (
        <div>
            <h2 className="text-center">Login Form</h2>
    
            <form>
                <div className="imgcontainer">
                    <FcManager size={100}/>
                </div>
                
                <div className="main">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    
                    <label htmlFor="pw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pw" required />
                    
                    <button className="btn btn-success p-2 sub" type="submit">Login</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                
                <div className="footer" style={myStyle}>
                    <button type="button" className="text-center btn-danger rounded p-2 mr-1 cbtn">Cancel</button>
                    <span className="d-flex "><b className="mr-2">Forgot</b> <a href="/">password?</a></span>
                </div>
            </form>
    
        </div>
    );
}
export default LoginPage;