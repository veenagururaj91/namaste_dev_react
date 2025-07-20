import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact, setBtnName] = useState("Login");
    
    return (
        <div className="header">
            <div className="logo">
                <img src= { LOGO_URL } alt="Namaste React"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=> {
                       btnNameReact === 'Login' ? 
                       setBtnName ("Logout"):
                       setBtnName ("Login") ;
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>

    );
};

export default Header;