import "./PracticeOrthopedic.css"
import { useTranslation } from "react-i18next"
import { TbHeartbeat } from "react-icons/tb"
import { LuCircleMinus,LuCirclePlus,LuSprout } from "react-icons/lu"
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const PracticeOrthopedic = () => {
  const { t } = useTranslation()

  return (
    <section className="practice-orthopedic">
      <div className="header">
        <span className="tag">{t("orthopedic-therapy.practice.tag")}</span>
        <h2>{t("orthopedic-therapy.practice.header")}</h2>
        <p>{t("orthopedic-therapy.practice.desc")}</p>
      </div>
      <div className="practices">
        <div className="box">
          <div className="icon">
            <BiTargetLock />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac1.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac1.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac1.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuCircleMinus />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac2.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac2.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac2.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuCirclePlus />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac3.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac3.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac3.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuSprout />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac4.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac4.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac4.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <MdOutlineLocationOn />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac5.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac5.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac5.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <TbHeartbeat />
          </div>
          <h4>{t("orthopedic-therapy.practice.practices.prac6.header")}</h4>
          <p>{t("orthopedic-therapy.practice.practices.prac6.desc")}</p>
          <span>{t("orthopedic-therapy.practice.practices.prac6.tag")}</span>
        </div>
      </div>
    </section>
  )
}

export default PracticeOrthopedic