import "./Kutilmoqda.css";
const Kutilmoqda = () => {
  if (!localStorage.getItem("token")) {
    alert("Token mavjud emas?");
    window.location = "/admin";
  }
  return <div className="admin_panel_kutilmoqda">Kutilmoqda</div>;
};

export default Kutilmoqda;
