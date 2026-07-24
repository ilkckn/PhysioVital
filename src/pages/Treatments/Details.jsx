import "./Details.css"
import { useTranslation } from "react-i18next"

const Details = () => {
  const { t } = useTranslation();
  
  return (
    <section className="details">
      <div className="header">
        <span>{t("treatments.details.tag")}</span>
        <h2>{t("treatments.details.header")}</h2>
        <p>{t("treatments.details.desc")}</p>
      </div>
    </section>
  )
}

export default Details