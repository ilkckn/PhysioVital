import "./FirstStep.css";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";

const FirstStep = () => {
  const { t } = useTranslation();

  return (
    <section className="first-step">
      <div className="header">
        <h1>{t("contact.hero.contact-form.first-step.header")}</h1>
        <p>{t("contact.hero.contact-form.first-step.paragraph")}</p>
      </div>
      <div className="btns">
        <button>
          <FiPhone />
          {t("contact.hero.contact-form.first-step.btns.btn1")}
        </button>
        <button>
          {t("contact.hero.contact-form.first-step.btns.btn2")}
        </button>
      </div>
    </section>
  );
};

export default FirstStep;
