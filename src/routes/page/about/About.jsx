import "./About.css";
import { BiHomeAlt } from "react-icons/bi";
const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_content">
          <p className="about_header">
            <BiHomeAlt className="about_pages_home_icons" />
            <span className="about_pages_header_title">Biz haqimizda</span>
          </p>
          <h2 className="about_pages_title">Biz haqimizda</h2>
          <p className="about_pages_text1">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>
          <p className="about_pages_text">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>
          <p className="about_pages_text3">
            Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
            guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
            shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
            ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi
            topshirildi.
          </p>
          <p className="about_pages_text">
            Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari
            chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta
            o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga
            omad tilab qolamiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
