import { useState } from "react";

const createElection = ({setElections}) => {


    const [electionTitle,setElectionTitle] = useState("");
    const [electionStartDate,setElectionStartDate] = useState("");
    const [electionEndDate,setElectionEndDate] = useState("");
    const [electionTimeZone,setElectionTimeZone] = useState("");


    const handlesubmit = (event) => {
        event.preventDefault();
        const newElection = {electionTitle,electionStartDate,electionEndDate,electionTimeZone}
        setElections((prev)=> [...prev,newElection]);

    }


    return(
        <div className="createElection">
            <div className="createElectionContainer">
                <div className="createElectionContainerHeader">
                    <h1>MyEvote</h1>
                    <h2>Create an Election</h2>
                </div>
                
                <form id="form" onSubmit={handlesubmit}>
                    <div className="formControl">
                        <label>Title</label>
                        <input type="text" id="title" placeholder="Enter election Title"
                        onChange={(event)=> setElectionTitle(event.target.value)}/>
                    </div>
                    <div className="formControl">
                        <label>Start Date</label>
                        <input type="date" id="startDate"
                        onChange={(event)=> setElectionStartDate(event.target.value)}/>
                    </div>
                    <div className="formControl">
                        <label>End Date</label>
                        <input type="date" id="endDate"
                        onChange={(event)=> setElectionEndDate(event.target.value)}/>
                    </div>
                    <div className="formControl">
                        <label>Time Zone</label>
                        <input type="text" id="timeZone" placeholder="TimeZone"
                        onChange={(event)=> setElectionTimeZone(event.target.value)}/>
                    </div>

                    <button type="submit" className="btn">Continue</button>
                </form>
            </div>
            
        </div>
    );
}
export default createElection;