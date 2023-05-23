import "./Elon.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const Elon = () => {
  const [createElon, setCreateElon] = useState(false);

  if (createElon === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const date = new Date();
  const bugun =
    date.getFullYear() +
    "-" +
    "0" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate();
  const vaqtlar =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());

  const [sana, setSanaValue] = useState(bugun);
  const [vaqt, setVaqtValue] = useState(vaqtlar);
  const [yunalishValue, setBulimValue] = useState("Web dasturlash");
  const [ichki_yunalishValue, setIchkiBulimValue] = useState("Java developer");
  const [tadbir_turiValue, setRadioValue] = useState("online");
  const [img_url, setElon_img_url] = useState("");

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

  const uploadImagesElon = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtiuszgwz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const data2 = await res.json();
    setElon_img_url(data2.secure_url);
  };

  const elon = async (e) => {
    e.preventDefault();
    let {
      url,
      ismsharif,
      professiya,
      telifon1,
      telifon2,
      elon_description,
      mavzumatni,
      file,
    } = e.target;

    await fetch("https://magnificent-turkey.cyclic.app/elon/elon_create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sana,
        vaqt,
        yunalishValue,
        ichki_yunalishValue,
        tadbir_turiValue,
        link: url.value,
        ismsharifValue: ismsharif.value,
        professiyasi: professiya.value,
        telifon1: telifon1.value,
        telifon2: telifon2.value,
        elon_description: elon_description.value,
        mavzumatni: mavzumatni.value,
        img_url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Create elon!") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setCreateElon(true);
          url.value = "";
          ismsharif.value = "";
          professiya.value = "";
          telifon1.value = "";
          telifon2.value = "";
          elon_description.value = "";
          mavzumatni.value = "";
          file.value = "";
        }
      });
  };
  return (
    <div className="elon">
      <div className="elon_container">
        <div className="elon_header">
          <BiHomeAlt className="elon_home_icons" />
          <p className="elon_home_header_text">E’lon berish</p>
        </div>
        <form onSubmit={(e) => elon(e)} className="elon_content_form">
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
                  defaultValue={sana}
                  className="elon_sana_input"
                  type="date"
                  name="date"
                  onChange={sanaFunction}
                  required
                />
                <input
                  defaultValue={vaqt}
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
                    Ichki yoэnalish
                  </p>
                  <select
                    onChange={ichkiBulimFunction}
                    className="elon_yunalish_select_value"
                  >
                    <option value="Java developer">Java developer</option>
                    <option value="Python developer">Python developer</option>
                    <option value="Frontent developer">
                      Frontent developer
                    </option>
                    <option value="Backend developer">Backend developer</option>
                    <option value="Grafik dizayner">Grafik dizayner</option>
                    <option value="Moushn grafika">Moushn grafika</option>
                    <option value="Menejment">Menejment</option>
                    <option value="SMM">SMM</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fizika">Fizika</option>
                    <option value="Biznesmen">Biznesmen</option>
                    <option value="Tadbirkor">Tadbirkor</option>
                    <option value="UI/UX dizayner">UI/UX dizayner</option>
                    <option value="O'quv markaz">O'quv markaz</option>
                    <option value="Marketing">Marketing</option>
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
                      minLength="20"
                      maxLength="100"
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
                    minLength="10"
                    maxLength="30"
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
                    minLength="3"
                    maxLength="30"
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
                    minLength="9"
                    maxLength="20"
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
                    minLength="9"
                    maxLength="20"
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
              name="elon_description"
              id="description"
              placeholder="Description..."
              required
              minLength="10"
              maxLength="100"
            />

            <p className="post_images_input_title">Rasm yuklash</p>
            <div className="post_images_upload_input_div">
              <label form="file" required>
                <p className="post_upload_images_btn">
                  <BsCloudUpload className="post_upload_images_btn_icons" />
                  Upload img
                </p>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="post_images_upload_input"
                  required
                  onChange={(e) => uploadImagesElon(e)}
                />
              </label>
            </div>
            <p className="post_images_upload_warning_text">
              Yuklanyotgan rasm o'lchami 1080x1080 hajmi 2 mb dan oshmasin
            </p>
            <p className="post_mavzu_matni_title_text">Mavzu matni</p>
            <textarea
              className="post_mavzu_matni_textarea"
              name="mavzumatni"
              id="mavzumatni"
              placeholder="Mavzu matni"
              required
              minLength="20"
              maxLength="1000"
            ></textarea>
            <div className="elon_footer_btn_div">
              <Link to="/" className="elon_bekor_qilish_btn">
                Bekor qilish
              </Link>
              <button className="elon_submit_btn" type="submit">
                E'lonni yuborish
              </button>
            </div>
          </div>
        </form>
      </div>

      {createElon && (
        <div className="create_elon">
          <div
            onClick={() => setCreateElon(false)}
            className="create_elon_overflow"
          ></div>

          <div className="create_elon_container">
            <span
              onClick={() => setCreateElon(false)}
              className="create_elon_modal_exit"
            >
              <FiX className="create_elon_modal_exit_icons" />
            </span>

            <div className="create_elon_content">
              <p className="create_elon_content_title">
                Sizning e'loningiz yuborildi
              </p>
              <p className="create_elon_content_text">
                Yaqin soatlar ichda admin tomonidan tekshirib chiqladi va saytda
                e'lon qilinadi!
              </p>
              <button
                onClick={() => setCreateElon(false)}
                className="create_elon_content_btn"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Elon;
