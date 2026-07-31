import "./FirstStep.css"
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const FirstStep = () => {
  const { t } = useTranslation();

  return (
    <section className="about-first-step">
      <div className="content">
        <h2>{t("about.about-first-step.header")}</h2>
        <p>{t("about.about-first-step.desc")}</p>
        <div className="btns">
          <button>
            <NavLink to="/contact">
              <FiPhone />
              {t("about.about-first-step.btns.btn1")}
            </NavLink>
          </button>
          <button>
            <NavLink to="/appointment">
              <FiCalendar />
              {t("about.about-first-step.btns.btn2")}
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FirstStep