import "./ForWhomNeuro.css";
import { useTranslation } from "react-i18next";
import { MdOutlineDone } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi2";
import { RxPeople } from "react-icons/rx";

const ForWhomNeuro = () => {
  const { t } = useTranslation();

  return (
    <section className="for-whom-neuro">
      <div className="content">
        <div className="header">
          <span className="tag">{t("neuro-therapy.for-whom-neuro.tag")}</span>
          <h2>{t("neuro-therapy.for-whom-neuro.header")}</h2>
          <p>{t("neuro-therapy.for-whom-neuro.desc")}</p>
        </div>
        <div className="medical-issues">
          <div className="issues-left">
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues1")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues2")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues3")}
              </span>
            </p>
          </div>
          <div className="issues-right">
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues4")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues5")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("neuro-therapy.for-whom-neuro.medical-issues.issues6")}
              </span>
            </p>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <MdOutlineDone />
            </div>
            <h4>{t("neuro-therapy.for-whom-neuro.boxes.box1.header")}</h4>
            <p>{t("neuro-therapy.for-whom-neuro.boxes.box1.desc")}</p>
            <span>{t("neuro-therapy.for-whom-neuro.boxes.box1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <IoWarningOutline />
            </div>
            <h4>{t("neuro-therapy.for-whom-neuro.boxes.box2.header")}</h4>
            <p>{t("neuro-therapy.for-whom-neuro.boxes.box2.desc")}</p>
            <span>{t("neuro-therapy.for-whom-neuro.boxes.box2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <RxPeople />
            </div>
            <h4>{t("neuro-therapy.for-whom-neuro.boxes.box3.header")}</h4>
            <p>{t("neuro-therapy.for-whom-neuro.boxes.box3.desc")}</p>
            <span>{t("neuro-therapy.for-whom-neuro.boxes.box3.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomNeuro;