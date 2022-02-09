import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Ammar Ahmed</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/dashboard">Dashboard</a>
        </div>
        <h2>OPTIONS</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/importexcelsheet">Import Excel Sheet</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-o"></i>
          <a href="/sendmessages">Send Message</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a onClick={() => localStorage.removeItem("user")} href="/">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
