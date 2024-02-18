import react from "react"
import "./Navbar.css"
import logo from "../../assets/textile.png"
import logoLarge from "../../assets/textile Large.png"
import cart_icon from "../../assets/shopping-bag.png"

function Navbar(){
    return(
        <div className = "navbar">
            <div className = "nav-logo">
                <img src = {logoLarge} alt = "Clothify Logo"/>
            </div>
            <ul className = "nav-menu">
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="Login">
                <button className="login-Button">Sign in/Sign Up</button>
                <img src={cart_icon} alt="cart icon"></img>
                <div className="item-Counter">0</div>
            </div>
        </div>
    );
}

export default Navbar