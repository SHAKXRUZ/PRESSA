import "./Search.css";
import { useState, useEffect } from "react";
import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
const Search = ({ setData }) => {
  const [elon, setElon] = useState([]);

  useEffect(() => {
    fetch("https://magnificent-turkey.cyclic.app/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setElon(data));
  }, []);

  const searchHero = async (e) => {
    e.preventDefault();
    const { date, bulim, radio, ismsharif } = e.target;

    await fetch("https://magnificent-turkey.cyclic.app/elon/header_search", {
      method: "GET",
      headers: {
        search: date.value || bulim.value || radio.value || ismsharif.value,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    date.value = "";
    bulim.value = "";
    radio.value = "";
    ismsharif.value = "";
  };

  return (
    <div className="search">
      <div className="search_container">
        <form className="search_form" onSubmit={(e) => searchHero(e)}>
          <div className="search_form_input_div border_class">
            <input className="search_date_input" type="date" name="date" />
          </div>

          <div className="search_bulim_modal_container border_class">
            <p className="bulim_modal_header">
              <TbCategory2 className="bulim_modal_header_menu_icons" />
              Bo'lim tanlang
              <IoIosArrowDown className="bulim_modal_header_arrow_icons" />
            </p>
            <div className="bulim_modal">
              <p className="bulim_modal_title">IT</p>

              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Web dasturlash" />
                Web dasturlash
              </label>

              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Mobile dasturlash" />
                Mobile dasturlash
              </label>

              <p className="bulim_modal_title">Dizayn</p>

              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="UI/UX dizayn" />
                UI/UX dizayn
              </label>
              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Grafik dizayn" />
                Grafik dizayn
              </label>

              <p className="bulim_modal_title">Biznes</p>

              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Menejment" />
                Menejment
              </label>

              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Kredit va audit" />
                Kredit va audit
              </label>
              <p className="bulim_modal_title">Ta'lim</p>
              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Matematika" />
                Matematika
              </label>
              <label className="bulim_input_label">
                <input type="radio" name="bulim" value="Fizika" />
                Fizika
              </label>
            </div>
          </div>

          <div className="search_form_input_div border_class">
            <label className="search_radio_input" form="radio">
              <input
                className="search_radio_input"
                type="radio"
                name="radio"
                value="online"
              />
              Online
            </label>

            <label className="search_radio_input" form="radio">
              <input
                className="search_radio_input"
                type="radio"
                name="radio"
                value="offline"
              />
              Offline
            </label>
          </div>

          <div className="ism_familya_modal_container">
            <p className="bulim_modal_header">
              <BiUserCircle className="bulim_modal_header_menu_icons" />
              Ism familya
              <IoIosArrowDown className="ismsharif_modal_arrow_icons" />
            </p>
            <div className="ism_sharif_modal">
              {elon &&
                elon.map((e, idx) =>
                  e.tasdiqlangan === "true" ? (
                    <label key={idx} className="bulim_input_label">
                      <input
                        type="radio"
                        name="ismsharif"
                        value={e.ismsharif}
                      />
                      {e.ismsharif}
                    </label>
                  ) : null
                )}
            </div>
          </div>

          <button className="search_form_btn" type="submit">
            Izlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
