import "./Practice.css";
import { useTranslation } from "react-i18next";
import { LuBone } from "react-icons/lu";
import { IoHandRightOutline } from "react-icons/io5";
import { BsLayers } from "react-icons/bs";
import { RxDisc } from "react-icons/rx";

const Practice = () => {
  const { t } = useTranslation();

  return (
    <section className="practice-container">
      <div className="header">
        <span className="tag">{t("manual-therapy.practice.tag")}</span>
        <h2>{t("manual-therapy.practice.header")}</h2>
        <p>{t("manual-therapy.practice.desc")}</p>
      </div>
      <div className="practices">
        <div className="box">
          <div className="icon">
            <IoHandRightOutline />
          </div>
          <h4>{t("manual-therapy.practice.practices.prac1.header")}</h4>
          <p>{t("manual-therapy.practice.practices.prac1.desc")}</p>
          <span>{t("manual-therapy.practice.practices.prac1.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuBone />
          </div>
          <h4>{t("manual-therapy.practice.practices.prac2.header")}</h4>
          <p>{t("manual-therapy.practice.practices.prac2.desc")}</p>
          <span>{t("manual-therapy.practice.practices.prac2.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <BsLayers />
          </div>
          <h4>{t("manual-therapy.practice.practices.prac3.header")}</h4>
          <p>{t("manual-therapy.practice.practices.prac3.desc")}</p>
          <span>{t("manual-therapy.practice.practices.prac3.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <RxDisc />
          </div>
          <h4>{ t("manual-therapy.practice.practices.prac4.header")}</h4>
          <p>{ t("manual-therapy.practice.practices.prac4.desc")}</p>
          <span>{ t("manual-therapy.practice.practices.prac4.tag")}</span>
        </div>
      </div>
    </section>
  );
};

export default Practice;
