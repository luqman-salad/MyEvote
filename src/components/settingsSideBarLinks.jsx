import {Link} from "react-router-dom"
import { AiTwotoneSetting } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { BsFillBrushFill,BsCreditCard2Back } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { FaKey } from "react-icons/fa";
import "../App.css";
const settingsSidebarLinks = () => {
    return(
        <div className="settingsSidebarLinks">
            <Link to="/generalSettings"><AiTwotoneSetting/>&nbsp;General</Link>
            <Link to="/organizationSettings"><CgOrganisation/>&nbsp;Organization</Link>
            <Link to="/appearenceSettings"><BsFillBrushFill/>&nbsp;Appearence</Link>
            <Link to="/mobileSettings"><ImMobile/>&nbsp;Mobile</Link>
            <Link to="/billingSettings"><BsCreditCard2Back/>&nbsp;Billing</Link>
            <Link to="/SecuritySettings"><FaKey/>&nbsp;Security</Link>
        </div>
    );
}
export default settingsSidebarLinks;