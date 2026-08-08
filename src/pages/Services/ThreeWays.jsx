import "./ThreeWays.css";
import { useTranslation } from "react-i18next";

const ThreeWays = () => {
  const { t } = useTranslation();
  
  return (
    <section className="three-ways">
      <div className="three-ways-content">
        <div className="header">
          <span className="tag">{t("services.three-ways.tag")}</span>
          <h2>{t("services.three-ways.header")}</h2>
        </div>
        <div className="ways">
          <div className="way">
            <span>01</span>
            <h4>{t("services.three-ways.ways.way1.header")}</h4>
            <p>{t("services.three-ways.ways.way1.desc")}</p>
          </div>
          <div className="way">
            <span>02</span>
            <h4>{t("services.three-ways.ways.way2.header")}</h4>
            <p>{t("services.three-ways.ways.way2.desc")}</p>
          </div>
          <div className="way">
            <span>03</span>
            <h4>{t("services.three-ways.ways.way3.header")}</h4>
            <p>{t("services.three-ways.ways.way3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeWays;
