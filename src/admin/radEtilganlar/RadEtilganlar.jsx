import "./RadEtilganlar.css";
import { useState, useEffect } from "react";

const RadEtilganlar = ({ adminData }) => {
  const [elon, setElon] = useState([]);

  if (
    window.location.pathname === "/admin/panel/radetilganlar" &&
    !localStorage.getItem("token")
  ) {
    window.location = "/admin";
  }
  useEffect(() => {
    fetch("http://localhost:5000/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((respons) => setElon(respons));
  }, []);

  return (
    <div className="radetilgan">
      {adminData.length !== 0
        ? adminData.map((e, idx) =>
            e.tasdiqlangan === "false" ? (
              <div key={idx} className="qabulqilingan_card">
                <div className="qabulqilingan_card_top">
                  <p className="qabulqilingan_elon_description">
                    {e.elon_description}
                  </p>
                </div>

                <div className="qabulqilingan_card_bottom">
                  <p className="qabulqilingan_card_bottom_text_ismsharif">
                    {e.ismsharif}
                  </p>

                  <a
                    className="qabulqilingan_card_bottom_text_telifon1"
                    href="tel:998992613577"
                  >
                    +998{e.telifon1}
                  </a>

                  <p className="qabulqilingan_card_bottom_text_sana">
                    {e.sana}
                  </p>
                  <p className="qabulqilingan_card_bottom_text_vaqt">
                    {e.vaqt}
                  </p>
                  <p className="qabulqilingan_card_bottom_text_yunalish">
                    {e.yunalish}
                  </p>
                </div>
              </div>
            ) : null
          )
        : elon.map((e, idx) =>
            e.tasdiqlangan === "false" ? (
              <div key={idx} className="qabulqilingan_card">
                <div className="qabulqilingan_card_top">
                  <p className="qabulqilingan_elon_description">
                    {e.elon_description}
                  </p>
                </div>

                <div className="qabulqilingan_card_bottom">
                  <p className="qabulqilingan_card_bottom_text_ismsharif">
                    {e.ismsharif}
                  </p>

                  <a
                    className="qabulqilingan_card_bottom_text_telifon1"
                    href="tel:998992613577"
                  >
                    +998{e.telifon1}
                  </a>

                  <p className="qabulqilingan_card_bottom_text_sana">
                    {e.sana}
                  </p>
                  <p className="qabulqilingan_card_bottom_text_vaqt">
                    {e.vaqt}
                  </p>
                  <p className="qabulqilingan_card_bottom_text_yunalish">
                    {e.yunalish}
                  </p>
                </div>
              </div>
            ) : null
          )}
    </div>
  );
};

export default RadEtilganlar;
