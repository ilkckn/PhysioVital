import "./Metrics.css";
import { useTranslation } from "react-i18next";

const Metrics = () => {
  const { t } = useTranslation();

  return (
    <section className="metrics">
      <div className="content">
        <div className="box">
          <p>12+</p>
          <span>{t("treatments.metrics.desc1")}</span>
        </div>
        <div className="box">
          <p>8.500+</p>
          <span>{t("treatments.metrics.desc2")}</span>
        </div>
        <div className="box">
          <p>96%</p>
          <span>{t("treatments.metrics.desc3")}</span>
        </div>
        <div className="box">
          <p>15+</p>
          <span>{t("treatments.metrics.desc4")}</span>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
