import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ sidebarOpen, openSidebar }) => {



  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {

                borderBottom: '3px solid black',
                paddingBottom: '15px',
              }
              : {
                marginRight: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700',

              }
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid black',
                paddingBottom: '15px',

              }
              : {
                marginRight: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700',


              }
          }

          to="/importexcelsheet"
        >
          Import Excel Sheet
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid black',
                paddingBottom: '15px',

              }
              : {
                marginRight: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700',


              }
          }
          to="/sendmessages"
        >
          Send Message
        </NavLink>
        <NavLink
          to="existingmembers"
          style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid black',
                paddingBottom: '15px',
              }
              : {
                marginRight: '30px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700',
              }
          }

        >
          Existing Members
        </NavLink>
      </div>
      <div className="navbar__right">
        {/* <Link to="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link> */}
        <Link to="#!">
          <img width="30" src={avatar} alt="avatar" />
        </Link>
      </div>
    </nav >
  );
};

export default Navbar;
