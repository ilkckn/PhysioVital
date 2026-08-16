import "./HeroCTAIndividual.css"
import { useTranslation } from "react-i18next"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { FiPhone } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const HeroCTAIndividual = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className="hero-cta-individual">
      <div className="content">
        <div className="left">
          <h3>
            {t("individual-exercise-programs.hero-cta-individual.header.title1")}
            <span>{t("individual-exercise-programs.hero-cta-individual.header.title2")}</span>
          </h3>
          <p>{t("individual-exercise-programs.hero-cta-individual.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>
              {t("individual-exercise-programs.hero-cta-individual.btns.btn1")} <HiOutlineArrowSmRight />
            </button>
            <button onClick={() => navigate("/contact")}>
              <FiPhone />
              {t("individual-exercise-programs.hero-cta-individual.btns.btn2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTAIndividual