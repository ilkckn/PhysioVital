import "./ForWhomSports.css"
import { useTranslation } from "react-i18next"
import { MdOutlineDone } from "react-icons/md"
import { IoWarningOutline } from "react-icons/io5"
import { HiOutlineCalendar } from "react-icons/hi2"

const ForWhomSports = () => {
  const { t } = useTranslation()
  
  return (
    <section className="for-whom-sports">
      <div className="content">
        <div className="header">
          <span className="tag">{t("sports-therapy.for-whom-sports.tag")}</span>
          <h2>{t("sports-therapy.for-whom-sports.header")}</h2>
          <p>{t("sports-therapy.for-whom-sports.desc")}</p>
        </div>
        <div className="medical-issues">
          <div className="issues-left">
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues1")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues2")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues3")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues4")}
              </span>
            </p>
          </div>
          <div className="issues-right">
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues5")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues6")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues7")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("sports-therapy.for-whom-sports.medical-issues.issues8")}
              </span>
            </p>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <MdOutlineDone />
            </div>
            <h4>{t("sports-therapy.for-whom-sports.boxes.box1.header")}</h4>
            <p>{t("sports-therapy.for-whom-sports.boxes.box1.desc")}</p>
            <span>{t("sports-therapy.for-whom-sports.boxes.box1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <IoWarningOutline />
            </div>
            <h4>{t("sports-therapy.for-whom-sports.boxes.box2.header")}</h4>
            <p>{t("sports-therapy.for-whom-sports.boxes.box2.desc")}</p>
            <span>{t("sports-therapy.for-whom-sports.boxes.box2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineCalendar />
            </div>
            <h4>{t("sports-therapy.for-whom-sports.boxes.box3.header")}</h4>
            <p>{t("sports-therapy.for-whom-sports.boxes.box3.desc")}</p>
            <span>{t("sports-therapy.for-whom-sports.boxes.box3.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhomSports