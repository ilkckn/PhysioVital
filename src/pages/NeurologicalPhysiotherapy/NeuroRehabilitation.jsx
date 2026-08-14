import "./NeuroRehabilitation.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { TbClockHour4, TbActivityHeartbeat } from "react-icons/tb";
import MethodNeuro from "./MethodNeuro";
import PracticeNeuro from "./PracticeNeuro";
import DiagnosisSpecific from "./DiagnosisSpecific";
import NeuroBgOrbs from "./NeuroBgOrbs";
import ForWhomNeuro from "./ForWhomNeuro";
import SessionFlowNeuro from "./SessionFlowNeuro";
import HeroCTANeuro from "./HeroCTANeuro";

const NeuroRehabilitation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="neuro-therapy">
      <div className="container">
        <NeuroBgOrbs />
        <div className="hero">
          <div className="left">
            <div className="neuro-navigation">
              <NavLink to={"/"}>
                <span>
                  {t("neuro-therapy.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("neuro-therapy.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink
                className="active"
                to={"/services/neurological-physiotherapy"}
              >
                <span>{t("neuro-therapy.navigation.neuro-therapy")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("neuro-therapy.tag.tag1")} <BsDot />
                <span>{t("neuro-therapy.tag.tag2")}</span>
              </span>
              <h1>
                {t("neuro-therapy.header.title1")}{" "}
                <span>{t("neuro-therapy.header.title2")}</span>
              </h1>
              <p>{t("neuro-therapy.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("neuro-therapy.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("neuro-therapy.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("neuro-therapy.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("neuro-therapy.first-evaluation")}
              </span>
            </div>
          </div>

          <div className="right">
            <div className="contents">
              <div className="header">
                <h3>{t("neuro-therapy.content-right.header")}</h3>
                <p>{t("neuro-therapy.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t("neuro-therapy.content-right.summary.summary1.header")}
                    </p>
                    <span>
                      {t("neuro-therapy.content-right.summary.summary1.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <IoCalendarClearOutline />
                  </div>
                  <div className="info">
                    <p>
                      {t("neuro-therapy.content-right.summary.summary2.header")}
                    </p>
                    <span>
                      {t("neuro-therapy.content-right.summary.summary2.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <TbActivityHeartbeat />
                  </div>
                  <div className="info">
                    <p>
                      {t("neuro-therapy.content-right.summary.summary3.header")}
                    </p>
                    <span>
                      {t("neuro-therapy.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("neuro-therapy.content-right.extra.text1")}</span>
                <span>{t("neuro-therapy.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("neuro-therapy.content-right.button")}{" "}
                  <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="method-neuro-component">
          <MethodNeuro />
        </div>
        <div className="practice-neuro-component">
          <PracticeNeuro />
        </div>
        <div className="diagnosis-specific-component">
          <DiagnosisSpecific />
        </div>
        <div className="for-whom-neuro-component">
          <ForWhomNeuro />
        </div>
        <div className="session-flow-neuro-component">
          <SessionFlowNeuro />
        </div>
        <div className="hero-cta-neuro-component">
          <HeroCTANeuro />
        </div>
      </div>
    </section>
  );
};

export default NeuroRehabilitation;