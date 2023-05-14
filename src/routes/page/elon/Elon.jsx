import "./Elon.css";
import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
const Elon = () => {
  // date sana vaqt bugungu
  const date = new Date();
  const bugun =
    date.getFullYear() +
    "-" +
    "0" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate();
  const vaqt =
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());

  const [sanaValue, setSanaValue] = useState(bugun);
  const [vaqtValue, setVaqtValue] = useState(vaqt);
  const [bulimValue, setBulimValue] = useState("Web dasturlash");
  const [ichkiBulimValue, setIchkiBulimValue] = useState("Java developer");
  const [radioValue, setRadioValue] = useState("online");

  function sanaFunction(e) {
    setSanaValue(e.target.value);
  }
  function vaqtFunction(e) {
    setVaqtValue(e.target.value);
  }
  function bulimFunction(e) {
    setBulimValue(e.target.value);
  }
  function ichkiBulimFunction(e) {
    setIchkiBulimValue(e.target.value);
  }
  const onlineOfflineFunction = (e) => {
    setRadioValue(e.target.value);
  };

  console.log(sanaValue);
  console.log(vaqtValue);
  console.log(bulimValue);
  console.log(ichkiBulimValue);
  console.log(radioValue);

  return (
    <div className="elon">
      <div className="elon_container">
        <div className="elon_header">
          <BiHomeAlt className="elon_home_icons" />
          <p className="elon_home_header_text">E’lon berish</p>
        </div>
        <form className="elon_content_form">
          <div className="elon_berish">
            <p className="elon_berish_title">E’lon berish</p>
            <div className="elon_berish_content">
              <p className="elon_berish_content_title">
                Vaqt va yo’nalishni tanlang
              </p>
              <p className="elon_berish_content_text_sana">
                O’tkaziladigan sanani kiriting
              </p>
              <div className="elon_sana_input_group">
                <input
                  defaultValue={sanaValue}
                  className="elon_sana_input"
                  type="date"
                  name="date"
                  onChange={sanaFunction}
                  required
                />
                <input
                  defaultValue={vaqtValue}
                  className="elon_sana_input"
                  type="time"
                  name="time"
                  onChange={vaqtFunction}
                  required
                />
              </div>
              <div className="elon_yunalish_input_group">
                <div className="elon_yunalish_input_div">
                  <p className="elon_yunalish_select_title_text">
                    Yo’nalishni belgilang
                  </p>
                  <select
                    onChange={bulimFunction}
                    className="elon_yunalish_select_value"
                  >
                    <option value="Web dasturlash">Web dasturlash</option>
                    <option value="Mobile dasturlash">Mobile dasturlash</option>
                    <option value="UI/UX dizayn">UI/UX dizayn</option>
                    <option value="Grafik dizayn">Grafik dizayn</option>
                    <option value="Menejment">Menejment</option>
                    <option value="Kredit va audit">Kredit va audit</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fizika">Fizika</option>
                  </select>
                </div>
                <div className="elon_yunalish_input_div">
                  <p className="elon_yunalish_select_title_text">
                    Ichki yo’nalish
                  </p>
                  <select
                    onChange={ichkiBulimFunction}
                    className="elon_yunalish_select_value"
                  >
                    <option value="Java developer">Java developer</option>
                    <option value="Frontent developer">
                      Frontent developer
                    </option>
                    <option value="Grafik dizayner">Grafik dizayner</option>
                    <option value="Moushn grafika">Moushn grafika</option>
                    <option value="Menejment">Menejment</option>
                    <option value="SMM">SMM</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fizika">Fizika</option>
                  </select>
                </div>
              </div>

              <div className="elon_tadbir_turi_input_group">
                <div className="elon_tadbir_turi_input_div">
                  <p className="elon_tadbir_turi_input_title_text">
                    Tadbir turi
                  </p>
                  <div className="elon_tadbir_turi_div">
                    <div className="elon_tadbirturi_input_radio_div">
                      <label
                        className="elon_tadbirturi_radi_input_label"
                        form="online"
                      >
                        <input
                          className="elon_pages_radio_inputs"
                          type="radio"
                          name="tanga"
                          value="online"
                          id="online"
                          defaultChecked
                          onChange={onlineOfflineFunction}
                        />
                        Online
                      </label>

                      <label
                        className="elon_tadbirturi_radi_input_label"
                        form="offline"
                      >
                        <input
                          className="elon_pages_radio_inputs"
                          type="radio"
                          name="tanga"
                          value="offline"
                          id="offline"
                          onChange={onlineOfflineFunction}
                        />
                        Offline
                      </label>
                    </div>
                  </div>
                </div>
                <div className="elon_tadbir_turi_input_div">
                  <p className="elon_tadbir_turi_input_title_text">
                    Link kiriting
                  </p>
                  <div className="elon_tadbir_turi_div">
                    <input
                      className="elon_tadbirturi_input_link"
                      name="url"
                      type="url"
                      required
                      placeholder="Link kiriting..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tashkilotchi">
            <p className="elon_tashkilotchi_title">Tashkilotchi</p>
            <div className="elon_tashkilotchi_content">
              <div className="elon_tashkilotchi_text_input_group">
                <div className="elon_tashkilotchi_text_input_div">
                  <p className="elon_tashkilotchi_text_input_title">
                    Ismi sharifi
                  </p>
                  <input
                    name="ismsharif"
                    className="elon_tashkilotchi_text_input"
                    type="text"
                    required
                    placeholder="Ismi sharifi..."
                  />
                </div>

                <div className="elon_tashkilotchi_text_input_div">
                  <p className="elon_tashkilotchi_text_input_title">
                    Professiya
                  </p>
                  <input
                    name="professiya"
                    className="elon_tashkilotchi_text_input"
                    type="text"
                    required
                    placeholder="Professiya..."
                  />
                </div>
              </div>

              <div className="elon_tashkilotchi_number_input_group">
                <div className="elon_tashkilotchi_number_input_div">
                  <p className="elon_tashkilotchi_number_input_title">
                    Telefon raqami
                  </p>
                  <input
                    name="telifon1"
                    className="elon_tashkilotchi_number_input"
                    type="tel"
                    required
                    placeholder="+998"
                  />
                </div>

                <div className="elon_tashkilotchi_number_input_div">
                  <p className="elon_tashkilotchi_number_input_title">
                    Qo’shimcha tel raqam
                  </p>
                  <input
                    name="telifon2"
                    className="elon_tashkilotchi_number_input"
                    type="tel"
                    required
                    placeholder="+998"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <p className="post_title">Post</p>

            <h2 className="post_header_title_text">MAVZUNI SARLAVHASI</h2>

            <p className="post_description_input_title">Description</p>
            <input
              className="post_description_input"
              type="text"
              placeholder="Description..."
            />

            <p className="post_images_input_title">Rasm yuklash</p>
            <div className="post_images_upload_input_div">
              <label>
                <button>Upload img</button>
                <input type="text" className="post_images_upload_input" />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Elon;
