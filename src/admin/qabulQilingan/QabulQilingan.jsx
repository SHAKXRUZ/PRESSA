import "./QabulQilingan.css";
import { useState, useEffect } from "react";

const QabulQilingan = ({ adminData }) => {
  const [elon, setElon] = useState([]);

  if (
    window.location.pathname === "/admin/panel/qabulqilingan" &&
    !localStorage.getItem("token")
  ) {
    window.location = "/admin";
  }
  useEffect(() => {
    fetch("https://calm-ruby-perch-ring.cyclic.app/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((respons) => setElon(respons));
  }, []);

  const elonQabulQilingan = async (e) => {
    fetch(`https://calm-ruby-perch-ring.cyclic.app/admin/elon_bekor/${e.id}`, {
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
    <div className="admin_panel_qabulqilingan">
      {adminData.length !== 0
        ? adminData.map((e, idx) =>
            e.tasdiqlangan === "true" ? (
              <div key={idx} className="qabulqilingan_card">
                <div className="qabulqilingan_card_top">
                  <p className="qabulqilingan_elon_description">
                    {e.elon_description}
                  </p>

                  <button
                    onClick={() => elonQabulQilingan(e)}
                    className="qabulqilingan_elon_bekor_qilish_btn"
                  >
                    Bekor qilish
                  </button>
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
            e.tasdiqlangan === "true" ? (
              <div key={idx} className="qabulqilingan_card">
                <div className="qabulqilingan_card_top">
                  <p className="qabulqilingan_elon_description">
                    {e.elon_description}
                  </p>

                  <button
                    onClick={() => elonQabulQilingan(e)}
                    className="qabulqilingan_elon_bekor_qilish_btn"
                  >
                    Bekor qilish
                  </button>
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

export default QabulQilingan;
