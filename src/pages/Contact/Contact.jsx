import "./Contact.css";
import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import WorkingHours from "./WorkingHours";
import FirstStep from "./FirstStep";
import ContactBgOrbs from "./ContactBgOrbs";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-bg-orbs">
          <ContactBgOrbs />
        </div>
        <div className="hero">
          <div className="small-header">
            <p>{t("contact.hero.small-header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("contact.hero.main-header.title1")}</h1>
            <h1>{t("contact.hero.main-header.title2")}</h1>
          </div>
          <p>{t("contact.hero.description")}</p>
        </div>
        <div className="contact-info">
          <ContactInfo />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="working-hours">
          <WorkingHours />
        </div>
        <div className="first-step">
          <FirstStep />
        </div>
      </div>
    </section>
  );
};

export default Contact;
