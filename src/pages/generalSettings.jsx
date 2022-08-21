import Header from "../components/Header";
import SettingsSideBar from "../components/settingsSideBarLinks";
import SettingsInnerHeader from "../components/SettingsInnerHeader";
import { FaUserAlt } from "react-icons/fa";

const generalSettings = () => {
    return(
        <div className="generalSettings">
            <Header/>
            <SettingsInnerHeader/>
            <div className="generalSettingsBody">
                <SettingsSideBar />
                <div className="generalSettingsBodyContent">
                    <h1><FaUserAlt/>&nbsp;Profile Settings</h1>
                    <h3>Name</h3>
                    <p>Your name or the name of the primary contact of the account. Visit the organization settings to change the name of the organization.</p>
                    
                    <input type="text"/>
                    
                    
                </div>

            </div>
            
        </div>
    );
}
export default generalSettings;