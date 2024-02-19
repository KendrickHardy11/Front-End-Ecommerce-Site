import react from "react"
import "./Navbar.css"
import logo from "../../assets/textile.png"
import logoLarge from "../../assets/textile Large.png"
import cart_icon from "../../assets/shopping-bag.png"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className = "navbar">
            <div className = "nav-logo">
                <img src = {logoLarge} alt = "Clothify Logo"/>
                <h2>Clothify</h2>
            </div>
            <ul className = "nav-menu">
                <Link to="/" className="links">New & Featured</Link>
                <Link to="/mens" className="links">Men</Link>
                <Link to="/womens" className="links">Women</Link>
                <Link to="/kids" className="links">Kids</Link>
            </ul>
            <div className="Login">
                <Link to="/signin" className="login-Button">Sign in/Sign Up</Link>
                <img src={cart_icon} alt="cart icon"></img>
                <div className="item-Counter">0</div>
                <Link to="/cart" className="links"><b>Cart</b></Link>
            </div>
        </div>
    );
}

export default Navbar