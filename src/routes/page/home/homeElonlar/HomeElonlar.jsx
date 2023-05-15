import "./HomeElonlar.css";
import { useState, useEffect } from "react";
import { RxPerson } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const HomeElonlar = () => {
  const [elon, setElon] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setElon(data));
  }, []);
  console.log(elon);
  return (
    <div className="home_elonlar">
      <div className="home_elonlar_container">
        <div className="home_elonlar_content">
          <p className="home_elonlar_title">Oxirgi e’lonlar</p>
          <div className="home_elonlar_card_group">
            {elon &&
              elon.map((e, idx) =>
                e.tasdiqlangan === "true" ? (
                  <div key={idx} className="elon_card">
                    <img
                      className="elon_card_images"
                      src={e.img_url}
                      alt="elon_card_images"
                    />
                    <div>
                      <div className="elon_card_footer_div">
                        <p className="elon_card_description">
                          {e.elon_description}
                        </p>

                        <div className="elon_card_elon_malumot_div">
                          <div className="elon_card_text_div">
                            <p className="elon_card_text_div_icon_and_text">
                              <RxPerson className="elon_card_icons" />
                              {e.ismsharif}
                            </p>
                            <p className="elon_card_text_div_icon_and_text">
                              <CiCalendar className="elon_card_icons" />
                              {e.sana}
                            </p>
                            <p className="elon_card_text_div_icon_and_text">
                              {e.tadbir_turi === "online" ? (
                                <HiOutlineStatusOnline className="elon_card_icons" />
                              ) : (
                                <HiOutlineStatusOffline className="elon_card_icons" />
                              )}
                              {e.tadbir_turi}
                            </p>
                          </div>

                          <div className="elon_card_text_div">
                            <p className="elon_card_text_div_icon_and_text">
                              <TbBuildingSkyscraper className="elon_card_icons" />
                              {e.professiya}
                            </p>
                            <p className="elon_card_text_div_icon_and_text">
                              <AiOutlineClockCircle className="elon_card_icons" />
                              {e.vaqt}
                            </p>
                            <p className="elon_card_text_div_icon_and_text">
                              <AiOutlineEye className="elon_card_icons" />
                              2550
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeElonlar;
