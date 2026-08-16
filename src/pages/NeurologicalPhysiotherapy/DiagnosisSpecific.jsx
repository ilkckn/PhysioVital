import "./DiagnosisSpecific.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TbBrain, TbActivityHeartbeat, TbBolt, TbWheelchair,TbClockHour5 } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { RiHeart2Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const DiagnosisSpecific = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="diagnosis-specific">
      <div className="content">
        <div className="header">
          <span className="tag">
            {t("neuro-therapy.diagnosis-specific.tag")}
          </span>
          <h2>{t("neuro-therapy.diagnosis-specific.header")}</h2>
          <p>{t("neuro-therapy.diagnosis-specific.desc")}</p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <TbClockHour5 />
            </div>
            <h4>{t("neuro-therapy.diagnosis-specific.boxes.box1.header")}</h4>
            <p>{t("neuro-therapy.diagnosis-specific.boxes.box1.desc")}</p>
            <div className="tags">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box1.tags.tag1")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box1.tags.tag2")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box1.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box1.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("neuro-therapy.diagnosis-specific.boxes.box1.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiLayers />
            </div>
            <h4>{t("neuro-therapy.diagnosis-specific.boxes.box2.header")}</h4>
            <p>{t("neuro-therapy.diagnosis-specific.boxes.box2.desc")}</p>
            <div className="tags">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box2.tags.tag1")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box2.tags.tag2")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box2.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box2.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("neuro-therapy.diagnosis-specific.boxes.box2.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <RiHeart2Line />
            </div>
            <h4>{t("neuro-therapy.diagnosis-specific.boxes.box3.header")}</h4>
            <p>{t("neuro-therapy.diagnosis-specific.boxes.box3.desc")}</p>
            <div className="tags">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box3.tags.tag1")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box3.tags.tag2")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box3.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box3.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("neuro-therapy.diagnosis-specific.boxes.box3.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <GoPerson />
            </div>
            <h4>{t("neuro-therapy.diagnosis-specific.boxes.box4.header")}</h4>
            <p>{t("neuro-therapy.diagnosis-specific.boxes.box4.desc")}</p>
            <div className="tags">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box4.tags.tag1")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box4.tags.tag2")}
              </span>
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box4.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("neuro-therapy.diagnosis-specific.boxes.box4.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("neuro-therapy.diagnosis-specific.boxes.box4.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSpecific;