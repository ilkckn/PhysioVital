import "./SessionFlowNeuro.css";
import { useTranslation } from "react-i18next";

const SessionFlowNeuro = () => {
  const { t } = useTranslation();

  return (
    <section className="session-flow-neuro">
      <div className="content">
        <div className="header">
          <span className="tag">{t("neuro-therapy.session-flow-neuro.tag")}</span>
          <h2>{t("neuro-therapy.session-flow-neuro.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("neuro-therapy.session-flow-neuro.session.step1.header")}</h4>
            <p>{t("neuro-therapy.session-flow-neuro.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("neuro-therapy.session-flow-neuro.session.step2.header")}</h4>
            <p>{t("neuro-therapy.session-flow-neuro.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("neuro-therapy.session-flow-neuro.session.step3.header")}</h4>
            <p>{t("neuro-therapy.session-flow-neuro.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionFlowNeuro;