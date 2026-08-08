import "./TermsOfService.css";
import { useTranslation } from "react-i18next";
import { MdDone } from "react-icons/md";
import { FiShield } from "react-icons/fi";
import { TbClockHour4 } from "react-icons/tb";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <section className="terms-of-service">
      <div className="content">
        <div className="header">
          <span className="tag">{t("services.terms-of-service.tag")}</span>
          <h2>{t("services.terms-of-service.header")}</h2>
        </div>
        <div className="terms">
          <div className="term">
            <div className="icon">
              <MdDone />
            </div>
            <h4>{t("services.terms-of-service.terms.term1.header")}</h4>
            <p>{t("services.terms-of-service.terms.term1.desc")}</p>
            <button>{t("services.terms-of-service.terms.term1.button")}</button>
          </div>
          <div className="term">
            <div className="icon">
              <FiShield />
            </div>
            <h4>{t("services.terms-of-service.terms.term2.header")}</h4>
            <p>{t("services.terms-of-service.terms.term2.desc")}</p>
            <button>{t("services.terms-of-service.terms.term2.button")}</button>
          </div>
          <div className="term">
            <div className="icon">
              <TbClockHour4 />
            </div>
            <h4>{t("services.terms-of-service.terms.term3.header")}</h4>
            <p>{t("services.terms-of-service.terms.term3.desc")}</p>
            <button>{t("services.terms-of-service.terms.term3.button")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
