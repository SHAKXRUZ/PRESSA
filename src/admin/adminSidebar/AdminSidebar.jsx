import "./AdminSidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosStats, IoMdExit } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import adminPanelLogo from "../../assets/images/header_logo.svg";
const AdminSidebar = () => {
  const localStorageClearSidebar = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }
  };

  return (
    <div className="admin_panel_sidebar">
      <div className="admin_panel_sidebar_content">
        <Link onClick={() => localStorageClearSidebar()} to="/">
          <img
            className="admin_panel_logo"
            src={adminPanelLogo}
            alt="adminPanelLogo"
          />
        </Link>

        <div className="admin_panel_sidebar_pages_div">
          <Link className="admin_panel_sidebar_pages_link" to="/">
            <AiOutlineHome className="admin_panel_sidebar_icons"/>
            Bosh sahifa
          </Link>
          <Link className="admin_panel_sidebar_pages_link">
            <IoIosStats className="admin_panel_sidebar_icons"/>
            Statistika
          </Link>
          <Link className="admin_panel_sidebar_pages_link">
            <RiDeleteBin6Line className="admin_panel_sidebar_icons"/>
            O'chirilganlar
          </Link>
          <Link className="admin_panel_sidebar_pages_link">
            <FiSettings className="admin_panel_sidebar_icons"/>
            Sozlamalar
          </Link>
          <Link to='/admin' className="admin_panel_sidebar_pages_link">
            <IoMdExit className="admin_panel_sidebar_icons"/>
            Chiqish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
