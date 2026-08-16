import "./RegionSpecific.css"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FiFlag, FiTarget } from "react-icons/fi"
import { PiBasketball, PiTennisBall } from "react-icons/pi"
import { BsArrowRightShort } from "react-icons/bs"

const RegionSpecific = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="region-specific">
      <div className="content">
        <div className="header">
          <span className="tag">
            {t("dry-needling.region-specific.tag")}
          </span>
          <h2>{t("dry-needling.region-specific.header")}</h2>
          <p>{t("dry-needling.region-specific.desc")}</p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <FiFlag />
            </div>
            <h4>{t("dry-needling.region-specific.boxes.box1.header")}</h4>
            <p>{t("dry-needling.region-specific.boxes.box1.desc")}</p>
            <div className="tags">
              <span>
                {t("dry-needling.region-specific.boxes.box1.tags.tag1")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box1.tags.tag2")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box1.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("dry-needling.region-specific.boxes.box1.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("dry-needling.region-specific.boxes.box1.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiTarget />
            </div>
            <h4>{t("dry-needling.region-specific.boxes.box2.header")}</h4>
            <p>{t("dry-needling.region-specific.boxes.box2.desc")}</p>
            <div className="tags">
              <span>
                {t("dry-needling.region-specific.boxes.box2.tags.tag1")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box2.tags.tag2")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box2.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("dry-needling.region-specific.boxes.box2.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("dry-needling.region-specific.boxes.box2.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PiBasketball />
            </div>
            <h4>{t("dry-needling.region-specific.boxes.box3.header")}</h4>
            <p>{t("dry-needling.region-specific.boxes.box3.desc")}</p>
            <div className="tags">
              <span>
                {t("dry-needling.region-specific.boxes.box3.tags.tag1")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box3.tags.tag2")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box3.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("dry-needling.region-specific.boxes.box3.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("dry-needling.region-specific.boxes.box3.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PiTennisBall />
            </div>
            <h4>{t("dry-needling.region-specific.boxes.box4.header")}</h4>
            <p>{t("dry-needling.region-specific.boxes.box4.desc")}</p>
            <div className="tags">
              <span>
                {t("dry-needling.region-specific.boxes.box4.tags.tag1")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box4.tags.tag2")}
              </span>
              <span>
                {t("dry-needling.region-specific.boxes.box4.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("dry-needling.region-specific.boxes.box4.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("dry-needling.region-specific.boxes.box4.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegionSpecific