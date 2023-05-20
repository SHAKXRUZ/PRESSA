import "./Kutilmoqda.css";
import { useState, useEffect } from "react";
const Kutilmoqda = ({ adminData }) => {
  const [elon, setElon] = useState([]);

  if (!localStorage.getItem("token")) {
    window.location = "/admin";
  }

  useEffect(() => {
    fetch("http://localhost:5000/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((respons) => setElon(respons));
  }, []);

  const elonQabulQilinganlar = async (e) => {
    fetch(`http://localhost:5000/admin/elon_kutilmoqda/${e.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        if (data.msg === "Elon qabul qilindi!") {
          window.location.reload();
        }
      });
  };

  const elonRadEtilganElonlar = async (e) => {
    fetch(`http://localhost:5000/admin/elon_bekor/${e.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        if (data.msg === "Elon bekor qilindi!") {
          window.location.reload();
        }
      });
  };

  return (
    <div className="admin_panel_kutilmoqda">
      {adminData.length !== 0
        ? adminData.map((e, idx) =>
            e.tasdiqlangan === "" ? (
              <div key={idx} className="kutilmoqda_card">
                <div className="kutilmoqda_card_top">
                  <p className="kutilmoqda_elon_description">
                    {e.elon_description}
                  </p>
                  <div className="kutilmoqda_elon_btn_div">
                    <button
                      onClick={() => elonRadEtilganElonlar(e)}
                      className="kutilmoqda_elon_bekor_qilish_btn"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={() => elonQabulQilinganlar(e)}
                      className="kutilmoqda_elon_tasdiqlash_btn"
                    >
                      Tasdiqlash
                    </button>
                  </div>
                </div>

                <div className="kutilmoqda_card_bottom">
                  <p className="kutilmoqda_card_bottom_text_ismsharif">
                    {e.ismsharif}
                  </p>

                  <a
                    className="kutilmoqda_card_bottom_text_telifon1"
                    href="tel:998992613577"
                  >
                    +998{e.telifon1}
                  </a>

                  <p className="kutilmoqda_card_bottom_text_sana">{e.sana}</p>
                  <p className="kutilmoqda_card_bottom_text_vaqt">{e.vaqt}</p>
                  <p className="kutilmoqda_card_bottom_text_yunalish">
                    {e.yunalish}
                  </p>
                </div>
              </div>
            ) : null
          )
        : elon.map((e, idx) =>
            e.tasdiqlangan === "" ? (
              <div key={idx} className="kutilmoqda_card">
                <div className="kutilmoqda_card_top">
                  <p className="kutilmoqda_elon_description">
                    {e.elon_description}
                  </p>
                  <div className="kutilmoqda_elon_btn_div">
                    <button
                      onClick={() => elonRadEtilganElonlar(e)}
                      className="kutilmoqda_elon_bekor_qilish_btn"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={() => elonQabulQilinganlar(e)}
                      className="kutilmoqda_elon_tasdiqlash_btn"
                    >
                      Tasdiqlash
                    </button>
                  </div>
                </div>

                <div className="kutilmoqda_card_bottom">
                  <p className="kutilmoqda_card_bottom_text_ismsharif">
                    {e.ismsharif}
                  </p>

                  <a
                    className="kutilmoqda_card_bottom_text_telifon1"
                    href="tel:998992613577"
                  >
                    +998{e.telifon1}
                  </a>

                  <p className="kutilmoqda_card_bottom_text_sana">{e.sana}</p>
                  <p className="kutilmoqda_card_bottom_text_vaqt">{e.vaqt}</p>
                  <p className="kutilmoqda_card_bottom_text_yunalish">
                    {e.yunalish}
                  </p>
                </div>
              </div>
            ) : null
          )}
    </div>
  );
};

export default Kutilmoqda;
