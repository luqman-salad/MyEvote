import Header from "../components/Header";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const WelcomePage = () => {

    const navigate = useNavigate();

    const navigateCreateElection = () => {
        navigate("/createElection");
    }

    return(
        <>

            <Header/>
            <div className="welcomePage">
                <div className="welcomePageBody">
                    <h1>Welcome to MyEvote</h1>
                    <p>Get started by creating your first election.</p>
                    <button onClick={navigateCreateElection}><BsFillPlusSquareFill className="plusIcon"/> &nbsp; New Election</button>
                </div>
            </div>
        </>
    );
}
export default WelcomePage;