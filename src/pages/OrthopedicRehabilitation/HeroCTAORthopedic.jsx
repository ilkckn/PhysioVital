import "./HeroCTAOrthopedic.css"
import { useTranslation } from "react-i18next"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { FiPhone } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const HeroCTAOrthopedic = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return (
    <section className="hero-cta-orthopedic">
      <div className="content">
        <div className="left">
          <h3>
            {t("neuro-therapy.hero-cta-neuro.header.title1")}
            <span>{t("neuro-therapy.hero-cta-neuro.header.title2")}</span>
          </h3>
          <p>{t("neuro-therapy.hero-cta-neuro.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>
              {t("neuro-therapy.hero-cta-neuro.btns.btn1")}{" "}
              <HiOutlineArrowSmRight />
            </button>
            <button onClick={() => navigate("/contact")}>
              <FiPhone />
              {t("neuro-therapy.hero-cta-neuro.btns.btn2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTAOrthopedic