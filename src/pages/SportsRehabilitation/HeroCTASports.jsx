import "./HeroCTASports.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const HeroCTASports = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section className="hero-cta-sports">
      <div className="content">
        <div className="left">
          <h3>
            {t("sports-therapy.hero-cta-sports.header.title1")}
            <span>{t("sports-therapy.hero-cta-sports.header.title2")}</span>
          </h3>
          <p>{t("sports-therapy.hero-cta-sports.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>
              {t("sports-therapy.hero-cta-sports.btns.btn1")} <HiOutlineArrowSmRight />
            </button>
            <button onClick={() => navigate("/contact")}>
              <FiPhone />
              {t("sports-therapy.hero-cta-sports.btns.btn2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCTASports;
