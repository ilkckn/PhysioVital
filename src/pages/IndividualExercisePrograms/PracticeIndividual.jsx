import "./PracticeIndividual.css"
import { useTranslation } from "react-i18next"
import { TbPin } from "react-icons/tb";
import { FiPlusCircle } from "react-icons/fi";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaScaleBalanced } from "react-icons/fa6";
import { GiBodyBalance,GiBackPain } from "react-icons/gi";

const PracticeIndividual = () => {
  const { t } = useTranslation();
  
  return (
    <section className="practice-individual">
      <div className="content">
        <div className="header">
          <span className="tag">{t("individual-exercise-programs.practice.tag")}</span>
          <h2>{t("individual-exercise-programs.practice.header")}</h2>
          <p>{t("individual-exercise-programs.practice.desc")}</p>
        </div>
        <div className="practices">
          <div className="box">
            <div className="icon">
              <LuBicepsFlexed />
            </div>
            <h4>{t("individual-exercise-programs.practice.practices.prac1.header")}</h4>
            <p>{t("individual-exercise-programs.practice.practices.prac1.desc")}</p>
            <span>{t("individual-exercise-programs.practice.practices.prac1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <FaScaleBalanced />
            </div>
            <h4>{t("individual-exercise-programs.practice.practices.prac2.header")}</h4>
            <p>{t("individual-exercise-programs.practice.practices.prac2.desc")}</p>
            <span>{t("individual-exercise-programs.practice.practices.prac2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <GiBodyBalance />
            </div>
            <h4>{t("individual-exercise-programs.practice.practices.prac3.header")}</h4>
            <p>{t("individual-exercise-programs.practice.practices.prac3.desc")}</p>
            <span>{t("individual-exercise-programs.practice.practices.prac3.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <GiBackPain />
            </div>
            <h4>{ t("individual-exercise-programs.practice.practices.prac4.header")}</h4>
            <p>{ t("individual-exercise-programs.practice.practices.prac4.desc")}</p>
            <span>{ t("individual-exercise-programs.practice.practices.prac4.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <FiPlusCircle />
            </div>
            <h4>{ t("individual-exercise-programs.practice.practices.prac5.header")}</h4>
            <p>{ t("individual-exercise-programs.practice.practices.prac5.desc")}</p>
            <span>{ t("individual-exercise-programs.practice.practices.prac5.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <TbPin />
            </div>
            <h4>{ t("individual-exercise-programs.practice.practices.prac6.header")}</h4>
            <p>{ t("individual-exercise-programs.practice.practices.prac6.desc")}</p>
            <span>{ t("individual-exercise-programs.practice.practices.prac6.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeIndividual