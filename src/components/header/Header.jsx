import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/images/header_logo.svg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
const Header = ({ setData }) => {
  const [sidebar, setSidebar] = useState(false);
  if (sidebar === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const searchFunction = async (e) => {
    e.preventDefault();
    let { search } = e.target;

    await fetch("http://localhost:5000/elon/header_search", {
      method: "GET",
      headers: { search: search.value },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    search.value = "";
  };

  const [elon, setElon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((respons) => setElon(respons));
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header_container">
          <div className="header_top_content">
            <div className="header_content">
              <Link to="/">
                <img
                  className="header_logo_images"
                  src={logo}
                  alt="header_logo_images"
                />
              </Link>
              <div className="header_right_div">
                <form
                  onSubmit={(e) => searchFunction(e)}
                  className="header_search_form"
                >
                  <div className="search_div">
                    <button className="submit_btn" type="submit">
                      <FiSearch />
                    </button>
                    <input
                      className="search_input_header"
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Izlash"
                      required
                      list="ismsharif"
                    />

                    <datalist id="ismsharif">
                      {elon.map((e, idx) =>
                        e.tasdiqlangan === "true" ? (
                          <option key={idx} value={e.ismsharif}></option>
                        ) : null
                      )}
                    </datalist>
                  </div>
                </form>
                <Link className="header_about_text" to="/about">
                  Biz haqimizda
                </Link>
                <Link className="header_single_text" to="/single">
                  Savol va javoblar
                </Link>
                <Link className="header_elon_btn" to="/elon">
                  <AiOutlinePlus />
                  E’lon berish
                </Link>

                <FiMenu
                  onClick={() => setSidebar(true)}
                  className="media_btn_menu"
                />
              </div>
            </div>

            <div className="header_search_media_div">
              <form className="header_media_form">
                <button className="header_media_submit_btn" type="submit">
                  <FiSearch />
                </button>
                <input
                  className="search_input_header_media"
                  type="text"
                  placeholder="Izlash"
                  required
                />
              </form>
              <button className="header_search_media_setting_icons">
                <GoSettings />
              </button>
            </div>
          </div>
        </div>
      </header>

      {sidebar && (
        <div className="sidebar">
          <div onClick={() => setSidebar(false)} className="overflow"></div>

          <div className="sidebar_container">
            <FiX className="sidebar_exit" onClick={() => setSidebar(false)} />

            <div className="sidebar_pages_link_div">
              <Link className="sidebar_pages_link_text" to="/single">
                Savol va javoblar
              </Link>
              <Link className="sidebar_pages_link_text" to="/about">
                Biz haqimizda
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
