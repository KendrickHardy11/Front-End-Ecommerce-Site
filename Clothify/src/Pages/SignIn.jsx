import Navbar from "../Components/Navbar/Navbar";
import React, { useState } from "react";
import User from "../assets/person.png";
import Email from "../assets/email.png";
import Password from "../assets/password.png";
import "./SignIn.css";

const SignIn = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={User} alt=""/>
                        <input type="text" placeholder="Name"/>
                    </div>}
                    <div className="input">
                        <img src={Email} alt=""/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={Password} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default SignIn