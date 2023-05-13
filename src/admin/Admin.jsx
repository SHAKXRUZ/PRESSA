import "./Admin.css";
import AdminHeader from "./adminHeader/AdminHeader";
import AdminSidebar from "./adminSidebar/AdminSidebar";
import Kutilmoqda from "./kutilmoqda/Kutilmoqda";
import QabulQilingan from "./qabulQilingan/QabulQilingan";
import AdminLogin from "./adminLogin/AdminLogin";
import RadEtilganlar from "./radEtilganlar/RadEtilganlar";
import { Route } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <Route path="/admin/panel">
        <AdminHeader />
        <div className="admin_panel">
          <AdminSidebar />
          <Route exact path="/admin/panel">
            <Kutilmoqda />
          </Route>
          <Route path="/admin/panel/qabulqilingan">
            <QabulQilingan />
          </Route>
          <Route path="/admin/panel/radetilganlar">
            <RadEtilganlar />
          </Route>
        </div>
      </Route>
    </>
  );
};

export default Admin;
