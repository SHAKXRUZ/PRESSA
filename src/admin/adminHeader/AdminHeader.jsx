import "./AdminHeader.css";
import { Link } from "react-router-dom";
import { BiSearch, BiBell } from "react-icons/bi";
import { useState } from "react";
import adminImages from "../../assets/images/admin.jpg";
const AdminHeader = ({ setAdminData }) => {
  const [kutilmoqda, setKutilmoqda] = useState(true);
  const [qabulqilingan, setQabulqilingan] = useState(false);
  const [radetilganlar, setRadetilganlar] = useState(false);

  const kutilmoqdaFunction = () => {
    setKutilmoqda(true);
    setQabulqilingan(false);
    setRadetilganlar(false);
  };

  const qabulqilinganFunction = () => {
    setKutilmoqda(false);
    setQabulqilingan(true);
    setRadetilganlar(false);
  };
  const radetilganlarFunction = () => {
    setKutilmoqda(false);
    setQabulqilingan(false);
    setRadetilganlar(true);
  };

  const adminSearch = async (e) => {
    e.preventDefault();
    let { adminSearch } = e.target;

    await fetch("https://magnificent-turkey.cyclic.app/admin/admin_search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminSearch: adminSearch.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setAdminData(data));
  };

  return (
    <div className="admin_panel_header">
      <div className="admin_panel_header_top_content">
        <form
          onSubmit={(e) => adminSearch(e)}
          className="admin_panel_header_top_left_div"
        >
          <button type="submit" className="admin_panel_search_btn">
            <BiSearch />
          </button>
          <input
            className="admin_panel_search_input"
            type="text"
            name="adminSearch"
            placeholder="search"
            required
          />
        </form>
        <div className="admin_panel_header_top_right_div">
          <BiBell className="admin_bell_icons" />
          <div className="admin_panel_admin_name_images">
            <img
              className="admin_panel_admin_images"
              src={adminImages}
              alt="admin_images"
            />
            <div className="admin_name_and_id_div">
              <p className="admin_name">Shakhruz Ismoilov</p>
              <p className="admin_id">id:2003</p>
            </div>
          </div>
        </div>
      </div>
      <div className="admin_panel_header_bottom_content">
        <div className="admin_panel_pages_link_div">
          <Link
            onClick={() => kutilmoqdaFunction()}
            className={kutilmoqda === true ? `activ` : `admin_panel_pages_link`}
            to="/admin/panel"
          >
            Kutilmoqda
          </Link>
          <Link
            onClick={() => qabulqilinganFunction()}
            className={
              qabulqilingan === true ? `activ` : `admin_panel_pages_link`
            }
            to="/admin/panel/qabulqilingan"
          >
            Qabul qiligan
          </Link>
          <Link
            onClick={() => radetilganlarFunction()}
            className={
              radetilganlar === true ? `activ` : `admin_panel_pages_link`
            }
            to="/admin/panel/radetilganlar"
          >
            Rad etilgan
          </Link>
        </div>
        <div className="admin_panel_header_sort_input_div">
          <label className="admin_panel_sort_input_label">
            Oxirgilari
            <input type="radio" name="admin_sort" value="Oxirgilari" />
          </label>
          <label className="admin_panel_sort_input_label">
            Eng so'ngilari
            <input type="radio" name="admin_sort" value="Eng so'ngilari" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
