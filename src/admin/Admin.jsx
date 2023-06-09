import "./Admin.css";
import AdminHeader from "./adminHeader/AdminHeader";
import AdminSidebar from "./adminSidebar/AdminSidebar";
import Kutilmoqda from "./kutilmoqda/Kutilmoqda";
import QabulQilingan from "./qabulQilingan/QabulQilingan";
import AdminLogin from "./adminLogin/AdminLogin";
import RadEtilganlar from "./radEtilganlar/RadEtilganlar";
import { useState } from "react";
import { Route } from "react-router-dom";
const Admin = () => {
  const [adminData, setAdminData] = useState([]);

  if (
    window.location.pathname === "/admin/panel" &&
    !localStorage.getItem("token")
  ) {
    window.location = "/admin";
  }

  if (window.location.pathname === "/admin" && localStorage.getItem("token")) {
    localStorage.clear();
  }

  return (
    <>
      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <div className="admin">
        <div className="admin_container">
          <Route path="/admin/panel">
            <div className="admin_panel_flex">
              <AdminSidebar />
              <div className="admin_panel_routerlar">
                <AdminHeader setAdminData={setAdminData} />
                <Route exact path="/admin/panel">
                  <Kutilmoqda adminData={adminData} />
                </Route>
                <Route path="/admin/panel/qabulqilingan">
                  <QabulQilingan adminData={adminData} />
                </Route>
                <Route path="/admin/panel/radetilganlar">
                  <RadEtilganlar adminData={adminData} />
                </Route>
              </div>
            </div>
          </Route>
        </div>
      </div>
    </>
  );
};

export default Admin;
