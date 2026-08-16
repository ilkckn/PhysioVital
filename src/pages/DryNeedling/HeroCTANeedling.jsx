import "./HeroCTANeedling.css"
import { useTranslation } from "react-i18next"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { FiPhone } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const HeroCTANeedling = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className="hero-cta-needling">
      <div className="content">
        <div className="left">
          <h3>
            {t("dry-needling.hero-cta-needling.header.title1")}
            <span>{t("dry-needling.hero-cta-needling.header.title2")}</span>
          </h3>
          <p>{t("dry-needling.hero-cta-needling.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>
              {t("dry-needling.hero-cta-needling.btns.btn1")} <HiOutlineArrowSmRight />
            </button>
            <button onClick={() => navigate("/contact")}>
              <FiPhone />
              {t("dry-needling.hero-cta-needling.btns.btn2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTANeedling