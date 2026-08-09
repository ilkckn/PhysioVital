import "./ForWhomManual.css";
import { useTranslation } from "react-i18next";
import { MdOutlineDone } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";

const ForWhomManual = () => {
  const { t } = useTranslation();

  return (
    <section className="for-whom-manual">
      <div className="content">
        <div className="header">
          <span className="tag">{t("manual-therapy.for-whom-manual.tag")}</span>
          <h2>{t("manual-therapy.for-whom-manual.header")}</h2>
          <p>{t("manual-therapy.for-whom-manual.desc")}</p>
        </div>
        <div className="medical-issues">
          <div className="issues-left">
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues1")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues2")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues3")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues4")}
              </span>
            </p>
          </div>
          <div className="issues-right">
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues5")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues6")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues7")}
              </span>
            </p>
            <p>
              <span>
                <MdOutlineDone />
                {t("manual-therapy.for-whom-manual.medical-issues.issues8")}
              </span>
            </p>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <MdOutlineDone />
            </div>
            <h4>{t("manual-therapy.for-whom-manual.boxes.box1.header")}</h4>
            <p>{t("manual-therapy.for-whom-manual.boxes.box1.desc")}</p>
            <span>{t("manual-therapy.for-whom-manual.boxes.box1.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <IoWarningOutline />
            </div>
            <h4>{t("manual-therapy.for-whom-manual.boxes.box2.header")}</h4>
            <p>{t("manual-therapy.for-whom-manual.boxes.box2.desc")}</p>
            <span>{t("manual-therapy.for-whom-manual.boxes.box2.tag")}</span>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineCalendar />
            </div>
            <h4>{t("manual-therapy.for-whom-manual.boxes.box3.header")}</h4>
            <p>{t("manual-therapy.for-whom-manual.boxes.box3.desc")}</p>
            <span>{t("manual-therapy.for-whom-manual.boxes.box3.tag")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomManual;
