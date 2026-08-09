import "./SessionFlow.css"
import { useTranslation } from "react-i18next"

const SessionFlow = () => {
  const { t } = useTranslation()
  
  return (
    <section className="session-flow">
      <div className="content">
        <div className="header">
          <span className="tag">{t("manual-therapy.session-flow.tag")}</span>
          <h2>{t("manual-therapy.session-flow.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("manual-therapy.session-flow.session.step1.header")}</h4>
            <p>{t("manual-therapy.session-flow.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("manual-therapy.session-flow.session.step2.header")}</h4>
            <p>{t("manual-therapy.session-flow.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("manual-therapy.session-flow.session.step3.header")}</h4>
            <p>{t("manual-therapy.session-flow.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionFlow