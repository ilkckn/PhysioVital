import "./SessionFlowNeedling.css"
import { useTranslation } from "react-i18next"

const SessionFlowNeedling = () => {
  const { t } = useTranslation()

  return (
    <section className="session-flow-needling">
      <div className="content">
        <div className="header">
          <span className="tag">{t("dry-needling.session-flow-needling.tag")}</span>
          <h2>{t("dry-needling.session-flow-needling.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("dry-needling.session-flow-needling.session.step1.header")}</h4>
            <p>{t("dry-needling.session-flow-needling.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("dry-needling.session-flow-needling.session.step2.header")}</h4>
            <p>{t("dry-needling.session-flow-needling.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("dry-needling.session-flow-needling.session.step3.header")}</h4>
            <p>{t("dry-needling.session-flow-needling.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionFlowNeedling