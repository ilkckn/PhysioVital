import "./PracticeNeuro.css";
import { useTranslation } from "react-i18next";
import { TbClockHour5 } from "react-icons/tb";
import { LuShieldCheck, LuDumbbell, LuFootprints } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { HiMiniCpuChip } from "react-icons/hi2";

const PracticeNeuro = () => {
  const { t } = useTranslation();

  return (
    <section className="practice-neuro">
      <div className="header">
        <span className="tag">{t("neuro-therapy.practice.tag")}</span>
        <h2>{t("neuro-therapy.practice.header")}</h2>
        <p>{t("neuro-therapy.practice.desc")}</p>
      </div>
      <div className="practices">
        <div className="box">
          <div className="icon">
            <TbClockHour5 />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac1.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac1.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac1.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuShieldCheck />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac2.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac2.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac2.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuDumbbell />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac3.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac3.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac3.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <LuFootprints />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac4.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac4.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac4.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <IoWarningOutline />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac5.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac5.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac5.tag")}</span>
        </div>
        <div className="box">
          <div className="icon">
            <HiMiniCpuChip />
          </div>
          <h4>{t("neuro-therapy.practice.practices.prac6.header")}</h4>
          <p>{t("neuro-therapy.practice.practices.prac6.desc")}</p>
          <span>{t("neuro-therapy.practice.practices.prac6.tag")}</span>
        </div>
      </div>
    </section>
  );
};

export default PracticeNeuro;
