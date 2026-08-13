import "./SessionFlowSports.css"
import { useTranslation } from "react-i18next"

const SessionFlowSports = () => {
  const { t } = useTranslation()
  
  return (
    <section className="session-flow-sports">
      <div className="content">
        <div className="header">
          <span className="tag">{t("sports-therapy.session-flow-sports.tag")}</span>
          <h2>{t("sports-therapy.session-flow-sports.header")}</h2>
        </div>
        <div className="sessions">
          <div className="session">
            <span>01</span>
            <h4>{t("sports-therapy.session-flow-sports.session.step1.header")}</h4>
            <p>{t("sports-therapy.session-flow-sports.session.step1.desc")}</p>
          </div>
          <div className="session">
            <span>02</span>
            <h4>{t("sports-therapy.session-flow-sports.session.step2.header")}</h4>
            <p>{t("sports-therapy.session-flow-sports.session.step2.desc")}</p>
          </div>
          <div className="session">
            <span>03</span>
            <h4>{t("sports-therapy.session-flow-sports.session.step3.header")}</h4>
            <p>{t("sports-therapy.session-flow-sports.session.step3.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionFlowSports