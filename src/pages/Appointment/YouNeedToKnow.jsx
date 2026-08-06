import "./YouNeedToKnow.css";
import { useTranslation } from "react-i18next";
import { SlLocationPin } from "react-icons/sl";
import { TbClockHour4 } from "react-icons/tb";
import { FiShield } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const YouNeedToKnow = () => {
  const { t } = useTranslation();

  return ( 
    <section className="you-need-to-know">
      <div className="content">
        <div className="header">
          <span className="tag">{t("appointment.you-need-to-know.tag")}</span>
          <h1>{t("appointment.you-need-to-know.header")}</h1>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <SlLocationPin />
            </div>
            <h3>{t("appointment.you-need-to-know.boxes.box1.header")}</h3>
            <p>{t("appointment.you-need-to-know.boxes.box1.desc")}</p>
            <span>
              {t("appointment.you-need-to-know.boxes.box1.location")}{" "}
              <TiArrowRight />{" "}
            </span>
            <h4></h4>
            <p></p>
          </div>
          <div className="box">
            <div className="icon">
              <TbClockHour4 />
            </div>
            <h3>{t("appointment.you-need-to-know.boxes.box2.header")}</h3>
            <p>{t("appointment.you-need-to-know.boxes.box2.desc")}</p>
            <span>{t("appointment.you-need-to-know.boxes.box2.day")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <FiShield />
            </div>
            <h3>{t("appointment.you-need-to-know.boxes.box3.header")}</h3>
            <p>{t("appointment.you-need-to-know.boxes.box3.desc")}</p>
            <span>{t("appointment.you-need-to-know.boxes.box3.insurance")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouNeedToKnow;
