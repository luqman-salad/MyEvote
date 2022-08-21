import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userName.length < 5 || password.length < 5) return;
        setUser(userName);
    }

    const navigate = useNavigate();

        const navigateWelcomePage = () => {
        navigate("/");
    }

    return(

        


        <>
        <div className="createAcount">
            <div className="createAcountContainer">
                <h2>MyEvote</h2>
                <h1>Sign Up for Free</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="formControl">
                        <label>userName</label>
                        <input type="text" id="username" placeholder="Enter your username"
                        onChange={(event) => setUserName(event.target.value)}/>
                    </div>
                    <div className="formControl">
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    <button type="submit" className="btn" onClick={navigateWelcomePage}>Submit</button>
                </form>
            </div>
            
        </div>
        </>
    );
}
export default Login;