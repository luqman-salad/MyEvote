import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DashboardInnerHeader = () => {

    const navigate = useNavigate();

    const navigateCreateElection = () => {
        navigate("/createElection");
    }

    return(
        <div className="DashboardInnerHeader">
            <h1>Account Dashboard</h1>
            <button onClick={navigateCreateElection}><BsFillPlusSquareFill className="plusIcon"/> &nbsp; New Election</button>
        </div>
    );
}
export default DashboardInnerHeader;