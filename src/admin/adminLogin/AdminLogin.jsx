import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import LoginLogo from "../../assets/images/login_logo.png";
const AdminLogin = () => {
  return (
    <div className="login">
      <div className="login_container">
        <Link to="/">
          <img className="login_logo" src={LoginLogo} alt="login_logo" />
        </Link>
        <div className="login_form_div">
          <form className="login_form">
            <h2 className="login_form_title">Tizimga kirish</h2>
            <div className="login_form_input_div">
              <span className="login_input_icons">
                <AiOutlineUser className="login_input_icons" />
              </span>
              <input
                autocomplete="off"
                className="login_form_input"
                type="email"
                name="email"
                placeholder="Login"
                required
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
