import "./Footer.css";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/header_logo.svg";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <Link to="/">
            <img className="footer_logo" src={FooterLogo} alt="footer_logo" />
          </Link>
          <div className="footer_right_content">
            <Link className="footer_pages_link" to="/about">
              Biz haqimizda
            </Link>
            <Link className="footer_pages_link" to="/single">
              Savol va Javoblar
            </Link>
            <a className="footer_phone_link" href="tel:+712001102">
              <BsTelephone /> +71 200-11-02
            </a>
            <div className="networks">
              <a className="footer_network_link" href="http://www.facebook.com">
                <FiFacebook />
              </a>
              <a
                className="footer_network_link"
                href="https://www.instagram.com"
              >
                <BsInstagram />
              </a>
              <a
                className="footer_network_link"
                href="https://www.telegram.com/"
              >
                <TbBrandTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
