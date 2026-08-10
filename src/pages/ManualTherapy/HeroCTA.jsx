import "./HeroCTA.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const HeroCTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section className="hero-cta">
      <div className="content">
        <div className="left">
          <h3>
            {t("manual-therapy.hero-cta.header.title1")}
            <span>{t("manual-therapy.hero-cta.header.title2")}</span>
          </h3>
          <p>{t("manual-therapy.hero-cta.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>
              {t("manual-therapy.hero-cta.btns.btn1")} <HiOutlineArrowSmRight />
            </button>
            <button onClick={() => navigate("/contact")}>
              <FiPhone />
              {t("manual-therapy.hero-cta.btns.btn2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCTA;
