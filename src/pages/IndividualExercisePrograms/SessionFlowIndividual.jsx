import "./SessionFlowIndividual.css";
import { useTranslation } from "react-i18next";

const SessionFlowIndividual = () => {
  const { t } = useTranslation();

  return (
    <section className="session-flow-individual">
      <div className="content">
        <div className="header">
          <span className="tag">{t("individual-exercise-programs.session-flow-individual.tag")}</span>
          <h2>{t("individual-exercise-programs.session-flow-individual.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("individual-exercise-programs.session-flow-individual.session.step1.header")}</h4>
            <p>{t("individual-exercise-programs.session-flow-individual.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("individual-exercise-programs.session-flow-individual.session.step2.header")}</h4>
            <p>{t("individual-exercise-programs.session-flow-individual.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("individual-exercise-programs.session-flow-individual.session.step3.header")}</h4>
            <p>{t("individual-exercise-programs.session-flow-individual.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionFlowIndividual;
