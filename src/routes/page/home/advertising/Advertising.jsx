import "./Advertising.css";
import person1 from "../../../../assets/images/person1.png";
import person2 from "../../../../assets/images/person2.png";
import person3 from "../../../../assets/images/media_person3.png";

const Advertising = () => {
  return (
    <div className="reklama">
      <div className="reklama_container">
        <div className="reklama_content">
          <div className="reklama_card">
            <h2 className="reklama_card_title">
              E’LONLARINGIZNI BIZNI SAYTDA BERING
            </h2>
            <img
              className="reklama_card_images"
              src={person1}
              alt="reklama_card_images"
            />
          </div>
          <div className="reklama_card">
            <img
              className="reklama_card_images_media"
              src={person3}
              alt="media_person_images"
            />
            <h2 className="reklama_card_title">
              ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA
            </h2>
            <img
              className="reklama_card_images media_person_none_images"
              src={person2}
              alt="reklama_card_images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
