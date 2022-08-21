import { useContext } from "react";
import { userContext } from "../App";
import { BsFillChatLeftTextFill,BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css"

import WelcomePage from "../pages/welcomePage";

const Header = () => {

    const user = useContext(userContext);

    return(
        <div className="header">
            <div className="leftHeader">
                <div className="logo">
                    <Link to="/"><h1>MyEvote</h1></Link>
                </div>
                <div className="links">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
            <div className="rightHeader">
                <BsFillChatLeftTextFill className="chatIcon"/>
                <div className="activeUserName">
                    <BsFillPersonFill className="userIcon"/>
                    <p>Welcome <span className="highlight">{user}</span></p>
                </div>
                
            </div>
        </div>
        
    );
}
export default Header;