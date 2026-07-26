import "./Process.css";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();

  return (
    <section className="process">
      <div className="content">
        <div className="header">
          <span className="tag">{t("treatments.process.tag")}</span>
          <h2>{t("treatments.process.header")}</h2>
          <p>{t("treatments.process.desc")}</p>
        </div>
        <div className="process-steps">
          <div className="box">
            <span>01</span>
            <h4>{t("treatments.process.process.header1")}</h4>
            <p>{t("treatments.process.process.desc1")}</p>
          </div>
          <div className="box">
            <span>02</span>
            <h4>{t("treatments.process.process.header2")}</h4>
            <p>{t("treatments.process.process.desc2")}</p>
          </div>
          <div className="box">
            <span>03</span>
            <h4>{t("treatments.process.process.header3")}</h4>
            <p>{t("treatments.process.process.desc3")}</p>
          </div>
          <div className="box">
            <span>04</span>
            <h4>{t("treatments.process.process.header4")}</h4>
            <p>{t("treatments.process.process.desc4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
