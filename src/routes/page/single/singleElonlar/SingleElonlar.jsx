import "./SingleElonlar.css";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineCalendar, HiOutlineStatusOnline } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiShare2, FiFacebook, FiYoutube } from "react-icons/fi";
import { SlSocialTumblr, SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";
import SinglePagesImages from "../../../../assets/images/single_pages_elon_images.png";
const SingleElonlar = () => {
  return (
    <div className="singleElonlar">
      <div className="single_elonlar_container">
        <div className="single_elonlar_content">
          <div className="single_elonlar_header">
            <BiHomeAlt className="single_home_icons" />
            <p className="single_home_text">Bizes</p>
            <IoIosArrowForward className="single_arrow_icons" />
            <p className="single_elon_person_name">Alisher Isaevdan...</p>
          </div>

          <div className="single_elonlar_info">
            <div className="single_elonlar_info_left">
              <p className="single_elonlar_left_title">
                Alisher Isaevdan biznes va IT bo’yicha master klass
              </p>
              <div className="single_elonlar_left_date_div">
                <p className="single_elonlar_left_date_text">
                  <HiOutlineCalendar className="single_elonlar_left_date_icon" />
                  17 / 01 / 2022
                </p>
                <p className="single_elonlar_left_date_text">
                  <AiOutlineClockCircle className="single_elonlar_left_date_icon" />
                  15:00
                </p>
              </div>

              <p className="single_elonlar_left_date_text">
                <HiOutlineStatusOnline className="single_elonlar_left_date_icon single_online_icons" />
                Online
              </p>
              <p className="single_pages_share_text">
                <FiShare2 className="single_pages_share_icons" />
                Ulashing
              </p>

              <div className="single_left_links_div">
                <a
                  className="single_left_icon_links"
                  href="https://www.facebook.com"
                >
                  <FiFacebook />
                </a>
                <a
                  className="single_left_icon_links"
                  href="https://www.tumblr.com"
                >
                  <SlSocialTumblr />
                </a>
                <a
                  className="single_left_icon_links"
                  href="https://www.instagram.com"
                >
                  <BsInstagram />
                </a>
                <a
                  className="single_left_icon_links"
                  href="https://twitter.com"
                >
                  <SlSocialTwitter />
                </a>
                <a
                  className="single_left_icon_links"
                  href="https://t.me/shakhruz_ismoilov"
                >
                  <TbBrandTelegram />
                </a>
              </div>
            </div>

            <div className="media_768_div">
              <div className="media_768_center_div">
                <p className="single_elonlar_left_date_text_media_768">
                  <HiOutlineCalendar className="single_elonlar_left_date_iconmedia_768" />
                  17 / 01 / 2022
                </p>
                <p className="single_elonlar_left_date_text_media_768">
                  <AiOutlineClockCircle className="single_elonlar_left_date_iconmedia_768" />
                  15:00
                </p>
                <p className="single_elonlar_left_date_text_media_768">
                  <HiOutlineStatusOnline className="single_elonlar_left_date_iconmedia_768" />
                  Online
                </p>
                <p className="single_elonlar_left_date_text_media_768">
                  <FiShare2 className="single_elonlar_left_date_iconmedia_768" />
                  Ulashing
                </p>
              </div>
            </div>

            <div className="single_elonlar_info_right">
              <h2 className="single_elonlar_right_title">
                Alisher Isaevdan biznes va IT bo’yicha master klass
              </h2>

              <p className="single_elonlar_right_text1">
                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
                musobaqalarni tashkil etishda davom etadi. Biz bu gal
                markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                frontend va backend dasturchilarni "bir dasturxon atrofida"
                to'plashga qaror qildik.
              </p>
              <img
                className="single_elonlar_right_images"
                src={SinglePagesImages}
                alt="single_pages_images"
              />
              <div className="single_elonlar_right_text_group">
                <p className="single_right_text_group_text">
                  Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
                  musobaqalarni tashkil etishda davom etadi. Biz bu gal
                  markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner,
                  frontend va backend dasturchilarni "bir dasturxon atrofida"
                  to'plashga qaror qildik.
                </p>
                <p className="single_right_text_group_text">
                  Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8
                  ta guruh tashkil qilinib, ularga ikki hafta muddat ichida
                  Toshkent shahridagi har qanday onlayn va oflayn tadbirlar
                  to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa
                  tayyorlash vazifasi topshirildi.
                </p>
                <p className="single_right_text_group_text">
                  Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan
                  ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
                  dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
                  taqdirlanadi. Biz barchaga omad tilab qolamiz.
                </p>
              </div>

              <div className="single_right_footer_div">
                <p className="single_right_footer_links">
                  <TfiLocationPin className="single_right_footer_link_icons" />
                  Google kartadan aniqlash
                </p>
                <a
                  className="single_right_footer_youtub_link"
                  href="https://www.youtube.com"
                >
                  <p className="single_right_footer_links">
                    <FiYoutube className="single_right_footer_link_icons" />
                    Youtubedan tomosha qilish
                  </p>
                </a>
                <p className="single_right_footer_texts">
                  <HiOutlineCalendar className="single_right_footer_icons" />
                  22 / 01 / 2022
                </p>
                <p className="single_right_footer_texts">
                  <AiOutlineClockCircle className="single_right_footer_icons" />
                  14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleElonlar;
