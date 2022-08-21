import login from "./pages/login";
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Login from "./pages/login";
import { createContext, useState } from "react";
import WelcomePage from "./pages/welcomePage";
import Dashbaord from "./pages/dashboard"
import CreateElection from "./pages/createElection";
import GeneralSettings from "./pages/generalSettings";



export const userContext = createContext()
const App = () => {

  const [user,setUser] = useState("luqman salad")
  const [elections,setElections] = useState([]);

  if(!user) return <Login setUser={setUser}/>

    return(
      <>
      <userContext.Provider value={user}>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/dashboard" element={<Dashbaord elections={elections}/>} />
          <Route path="/settings" element={<GeneralSettings />} />
          <Route path="/createElection" element={<CreateElection setElections={setElections}/>} />
          {/* <Route path="/generalSettings" element={<GeneralSettings />} /> */}
        </Routes>

      </userContext.Provider>

      
      </>
      

      

    );
}
export default App;