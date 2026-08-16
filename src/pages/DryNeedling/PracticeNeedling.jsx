import "./PracticeNeedling.css"
import { useTranslation } from "react-i18next"
import { TbActivityHeartbeat, TbPin } from "react-icons/tb";
import { TbHeartbeat } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { FiFlag, FiPlusCircle } from "react-icons/fi";

const PracticeNeedling = () => {
  const { t } = useTranslation()
  
  return (
    <section className="practice-needling">
      <div className="content">
        <div className="header">
          <span className="tag">{t("dry-needling.practice.tag")}</span>
          <h2>{t("dry-needling.practice.header")}</h2>
          <p>{t("dry-needling.practice.desc")}</p>
        </div>
        <div className="practices">
          <div className="box">
            <div className="icon">
              <TbHeartbeat />
            </div>
            <h4>{t("dry-needling.practice.practices.prac1.header")}</h4>
            <p>{t("dry-needling.practice.practices.prac1.desc")}</p>
            <span>{t("dry-needling.practice.practices.prac1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <TbActivityHeartbeat />
            </div>
            <h4>{t("dry-needling.practice.practices.prac2.header")}</h4>
            <p>{t("dry-needling.practice.practices.prac2.desc")}</p>
            <span>{t("dry-needling.practice.practices.prac2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <LuShieldCheck />
            </div>
            <h4>{t("dry-needling.practice.practices.prac3.header")}</h4>
            <p>{t("dry-needling.practice.practices.prac3.desc")}</p>
            <span>{t("dry-needling.practice.practices.prac3.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <FiFlag />
            </div>
            <h4>{ t("dry-needling.practice.practices.prac4.header")}</h4>
            <p>{ t("dry-needling.practice.practices.prac4.desc")}</p>
            <span>{ t("dry-needling.practice.practices.prac4.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <FiPlusCircle />
            </div>
            <h4>{ t("dry-needling.practice.practices.prac5.header")}</h4>
            <p>{ t("dry-needling.practice.practices.prac5.desc")}</p>
            <span>{ t("dry-needling.practice.practices.prac5.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <TbPin />
            </div>
            <h4>{ t("dry-needling.practice.practices.prac6.header")}</h4>
            <p>{ t("dry-needling.practice.practices.prac6.desc")}</p>
            <span>{ t("dry-needling.practice.practices.prac6.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeNeedling