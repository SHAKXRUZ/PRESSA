import "./ReklamaElon.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { RxPerson } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

const ReklamaElon = () => {
  const [elon, setElon] = useState([]);

  useEffect(() => {
    fetch("https://calm-ruby-perch-ring.cyclic.app/elon/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setElon(data));
  }, []);

  return (
    <div className="reklama_elonlar">
      <div className="reklama_elonlar_container">
        <div className="reklama_elonlar_content">
          <p className="reklama_elon_title">Tavsiya etamiz</p>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              250: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              701: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {elon.map((e, idx) =>
              e.tasdiqlangan === "true" ? (
                <SwiperSlide key={idx}>
                  <div key={idx} className="reklamalar_elon_card">
                    <img
                      className="reklamalar_elon_card_images"
                      src={e.img_url}
                      alt="reklamalar_elon_card_images"
                    />

                    <div>
                      <div className="reklamalar_elon_card_footer">
                        <p className="reklamalar_elon_card_footer_description">
                          {e.elon_description}
                        </p>

                        <div className="reklamalar_elon_card_malumot_div">
                          <div className="reklamalar_elon_card_text_div">
                            <p className="reklamalar_elon_card_text_and_icon">
                              <RxPerson className="reklamalar_elon_card_footer_icons" />
                              {e.ismsharif}
                            </p>
                            <p className="reklamalar_elon_card_text_and_icon">
                              <CiCalendar className="reklamalar_elon_card_footer_icons" />
                              {e.sana}
                            </p>
                            <p className="reklamalar_elon_card_text_and_icon">
                              {e.tadbir_turi === "online" ? (
                                <HiOutlineStatusOnline className="reklamalar_elon_card_footer_icons" />
                              ) : (
                                <HiOutlineStatusOffline className="reklamalar_elon_card_footer_icons" />
                              )}
                              {e.tadbir_turi}
                            </p>
                          </div>

                          <div className="reklamalar_elon_card_text_div">
                            <p className="reklamalar_elon_card_text_and_icon">
                              <TbBuildingSkyscraper className="reklamalar_elon_card_footer_icons" />
                              {e.ichki_yunalish}
                            </p>
                            <p className="reklamalar_elon_card_text_and_icon">
                              <AiOutlineClockCircle className="reklamalar_elon_card_footer_icons" />
                              {e.vaqt}
                            </p>
                            <p className="reklamalar_elon_card_text_and_icon">
                              <AiOutlineEye className="reklamalar_elon_card_footer_icons" />
                              2550
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReklamaElon;
