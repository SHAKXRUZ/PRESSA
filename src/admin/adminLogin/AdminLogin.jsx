import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import LoginLogo from "../../assets/images/login_logo.png";

const AdminLogin = () => {
  const adminLogin = async (e) => {
    e.preventDefault();
    let { adminname, password } = e.target;

    await fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminname: adminname.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        if (data.msg === "Success!" && data.token) {
          if (localStorage.getItem("token")) {
            localStorage.clear();
            window.location = "/admin/panel";
            localStorage.setItem("token", data.token);
          } else {
            window.location = "/admin/panel";
            localStorage.setItem("token", data.token);
          }
        }
      });
    adminname.value = "";
    password.value = "";
  };

  const localStorageClear = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        <Link to="/">
          <img
            onClick={() => localStorageClear()}
            className="login_logo"
            src={LoginLogo}
            alt="login_logo"
          />
        </Link>
        <div className="login_form_div">
          <form className="login_form" onSubmit={(e) => adminLogin(e)}>
            <h2 className="login_form_title">Tizimga kirish</h2>
            <div className="login_form_input_div">
              <span className="login_input_icons">
                <AiOutlineUser className="login_input_icons" />
              </span>
              <input
                className="login_form_input"
                type="text"
                name="adminname"
                placeholder="Login"
                required
                minLength="8"
                maxLength="8"
              />
            </div>
            <div className="login_form_input_div">
              <span className="login_input_icons">
                <BiLockAlt className="login_input_icons" />
              </span>
              <input
                className="login_form_input"
                type="password"
                name="password"
                placeholder="Parol"
                required
                minLength="8"
                maxLength="8"
              />
            </div>
            <p className="login_resit_password_text">Parolni unutdingizmi?</p>
            <div className="login_btn_div">
              <button type="submit" className="login_btn">
                Kirish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
