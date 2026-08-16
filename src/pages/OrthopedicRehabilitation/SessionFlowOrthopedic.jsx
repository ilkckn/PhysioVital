import "./SessionFlowOrthopedic.css"
import { useTranslation } from "react-i18next"

const SessionFlowOrthopedic = () => {
  const { t } = useTranslation()
  
  return (
    <section className="session-flow-orthopedic">
      <div className="content">
        <div className="header">
          <span className="tag">{t("orthopedic-therapy.session-flow-orthopedic.tag")}</span>
          <h2>{t("orthopedic-therapy.session-flow-orthopedic.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("orthopedic-therapy.session-flow-orthopedic.session.step1.header")}</h4>
            <p>{t("orthopedic-therapy.session-flow-orthopedic.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("orthopedic-therapy.session-flow-orthopedic.session.step2.header")}</h4>
            <p>{t("orthopedic-therapy.session-flow-orthopedic.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("orthopedic-therapy.session-flow-orthopedic.session.step3.header")}</h4>
            <p>{t("orthopedic-therapy.session-flow-orthopedic.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionFlowOrthopedic