import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { Link } from 'react-router-dom'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const path = window.location.pathname;
  console.log(path);
  const splitLocation = path.split("/");
  console.log(splitLocation);

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <Link
          className={splitLocation[1] === "dashboard" ? "active_link" : ""}
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={splitLocation[1] === "importexcelsheet" ? "active_link" : ""}
          to="/importexcelsheet"
        >
          Import Excel Sheet
        </Link>
        <Link
          className={splitLocation[1] === "sendmessages" ? "active_link" : ""}
          to="/sendmessages"
        >
          Send Message
        </Link>
        <Link
          className={splitLocation[1] === "existingmembers" ? "active_link" : ""}
          to="/existingmembers"
        >
          Existing Members
        </Link>
      </div>
      <div clLinkssName="navbar__right">
        {/* <Link to="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link> */}
        <Link to="#!">
          <img width="30" src={avatar} alt="avatar" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
