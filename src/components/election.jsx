import "../App.css"
const Election = ({election,index}) => {
    return(
        <>
            <div key={index} className="election">
                <div className="electionTitle">
                    <h2>{election.electionTitle}</h2>
                </div>
                <div className="electionDate">
                    <div className="startDate">
                        <h3>Start Date</h3>
                        <p>{election.electionStartDate}</p>
                    </div>
                    <div className="endDate">
                        <h3>End Date</h3>
                        <p>{election.electionEndDate}</p>
                    </div>
                    
                    
                </div>
                
                
                
            </div>
        </>
    );
}
export default Election;