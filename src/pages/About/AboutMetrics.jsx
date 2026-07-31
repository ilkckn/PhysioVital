import "./AboutMetrics.css";
import { useTranslation } from "react-i18next";

const AboutMetrics = () => {
  const { t } = useTranslation();
  
  return (
    <section className="about-metrics">
        <div className="content">
          <div className="metric">
            <span>12+</span>
            <p>{t("about.metrics.desc1")}</p>
          </div>
          <div className="metric">
            <span>8.500+</span>
            <p>{t("about.metrics.desc2")}</p>
          </div>
          <div className="metric">
            <span>%96</span>
            <p>{t("about.metrics.desc3")}</p>
          </div>
          <div className="metric">
            <span>15</span>
            <p>{t("about.metrics.desc4")}</p>
          </div>
        </div>
    </section>
  );
};

export default AboutMetrics;
