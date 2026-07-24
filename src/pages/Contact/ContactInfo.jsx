import "./ContactInfo.css"
import { useTranslation } from "react-i18next"
import { BsTelephone } from "react-icons/bs"
import { IoLocationOutline } from "react-icons/io5"
import { MdAlternateEmail } from "react-icons/md"

const ContactInfo = () => {
  const { t } = useTranslation()
  
  return (
    <section className="contact-info">
        <div className="cards">
          <div className="tel">
            <div className="icon">
              <BsTelephone />
            </div>
            <h3>{t("contact.hero.contact-info.phone.tool")}</h3>
            <p>01701234567</p>
            <span>{t("contact.hero.contact-info.phone.description")}</span>
          </div>
          <div className="address">
            <div className="icon">
              <IoLocationOutline />
            </div>
            <h3>{t("contact.hero.contact-info.location.tool")}</h3>
            <p>{t("contact.hero.contact-info.location.label")}</p>
            <span>{t("contact.hero.contact-info.location.description")}</span>
          </div>
          <div className="email">
            <div className="icon">
              <MdAlternateEmail />
            </div>
            <h3>{t("contact.hero.contact-info.email.tool")}</h3>
            <p>{t("contact.hero.contact-info.email.label")}</p>
            <span>{t("contact.hero.contact-info.email.description")}</span>
          </div>
        </div>
    </section>
  )
}

export default ContactInfo