import "./RegainYourHealth.css";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const RegainYourHealth = () => {
  const { t } = useTranslation();

  return (
    <section className="regain-your-health">
      <div className="content">
        <h2>{t("treatments.regain-your-health.header")}</h2>
        <p>{t("treatments.regain-your-health.desc")}</p>
        <div className="btns">
          <button>
            <FiPhone />
            {t("treatments.regain-your-health.btns.btn1")}
          </button>
          <button>
            <FiCalendar />
            {t("treatments.regain-your-health.btns.btn2")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegainYourHealth;
