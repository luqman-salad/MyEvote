import DashboardInnerHeader from "../components/DashboardInnerHeader";
import Election from "../components/election";
import Header from "../components/Header";

const Dashbaord = ({elections}) => {
    return(
        <div className="dashboard">
            <div className="dashboardHeader">
                <Header />
                <DashboardInnerHeader/>
            </div>
            <div className="dashboardBody">
                <div>
                    {elections.length > 0 && 
                    elections.map((election,index) => (
                    <Election key={index} election={election}/>))}
                </div>
                
            </div>
            
            
        </div>
        
    );
}
export default Dashbaord;