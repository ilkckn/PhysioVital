import "./HowIsItWork.css";
import { useTranslation } from "react-i18next";

const HowIsItWork = () => {
  const { t } = useTranslation();
  
  return (
    <section className="how-is-it-work">
      <div className="content">
        <div className="header">
          <span className="tag">{t("appointment.how-is-it-work.tag")}</span>
          <h1>{t("appointment.how-is-it-work.header")}</h1>
        </div>
        <div className="boxes">
          <div className="box">
            <span>01</span>
            <h3>{t("appointment.how-is-it-work.steps.step1.header")}</h3>
            <p>{t("appointment.how-is-it-work.steps.step1.desc")}</p>
          </div>
          <div className="box">
            <span>02</span>
            <h3>{t("appointment.how-is-it-work.steps.step2.header")}</h3>
            <p>{t("appointment.how-is-it-work.steps.step2.desc")}</p>
          </div>
          <div className="box">
            <span>03</span>
            <h3>{t("appointment.how-is-it-work.steps.step3.header")}</h3>
            <p>{ t("appointment.how-is-it-work.steps.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIsItWork;
