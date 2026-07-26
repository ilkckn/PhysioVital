import "./Treatments.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Category from "./Category";
import Details from "./Details";
import Metrics from "./Metrics";
import Process from "./Process";
import Questions from "./Questions";

const Treatments = () => {
  const { t } = useTranslation();


  return (
    <section className="treatments">
      <div className="container">
        <div className="hero">
          <div className="tag">
            <span>{t("treatments.hero.tag")}</span>
          </div>
          <div className="header">
            <div className="main-header">
              <h1>{t("treatments.hero.headers.header1")}</h1>
              <h1>{t("treatments.hero.headers.header2")}</h1>
            </div>
            <p>{t("treatments.hero.desc")}</p>
          </div>
          <div className="btns">
            <button>
              <NavLink to="/services">
                {t("treatments.hero.btns.btn1")}
              </NavLink>
            </button>
            <button>
              <NavLink to="/appointment">
                {t("treatments.hero.btns.btn2")}
              </NavLink>
            </button>
          </div>
        </div>

        <div className="category-component">
          <Category />
        </div>
        <div className="details-component">
          <Details />
        </div>
        <div className="metrics-component">
          <Metrics />
        </div>
        <div className="process-component">
          <Process />
        </div>
        <div className="questions-component">
          <Questions />
        </div>
      </div>
    </section>
  );
};

export default Treatments;
