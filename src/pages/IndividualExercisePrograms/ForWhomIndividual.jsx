import "./ForWhomIndividual.css"
import { useTranslation } from "react-i18next"
import { MdOutlineDone } from "react-icons/md"
import { IoWarningOutline } from "react-icons/io5"
import { HiOutlineCalendar } from "react-icons/hi2"

const ForWhomIndividual = () => {
  const { t } = useTranslation()

  return (
    <section className="for-whom-individual">
      <div className="content">
        <div className="header">
          <span className="tag">{t("dry-needling.for-whom-needling.tag")}</span>
          <h2>{t("dry-needling.for-whom-needling.header")}</h2>
          <p>{t("dry-needling.for-whom-needling.desc")}</p>
        </div>
        <div className="medical-issues">
          <div className="issues-left">
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues1")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues2")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues3")}
              </span>
            </p>
          </div>
          <div className="issues-right">
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues5")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues6")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("dry-needling.for-whom-needling.medical-issues.issues4")}
              </span>
            </p>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <MdOutlineDone />
            </div>
            <h4>{t("dry-needling.for-whom-needling.boxes.box1.header")}</h4>
            <p>{t("dry-needling.for-whom-needling.boxes.box1.desc")}</p>
            <span>{t("dry-needling.for-whom-needling.boxes.box1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <IoWarningOutline />
            </div>
            <h4>{t("dry-needling.for-whom-needling.boxes.box2.header")}</h4>
            <p>{t("dry-needling.for-whom-needling.boxes.box2.desc")}</p>
            <span>{t("dry-needling.for-whom-needling.boxes.box2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineCalendar />
            </div>
            <h4>{t("dry-needling.for-whom-needling.boxes.box3.header")}</h4>
            <p>{t("dry-needling.for-whom-needling.boxes.box3.desc")}</p>
            <span>{t("dry-needling.for-whom-needling.boxes.box3.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhomIndividual