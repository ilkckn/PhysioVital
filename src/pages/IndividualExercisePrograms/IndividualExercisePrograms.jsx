import "./IndividualExercisePrograms.css";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { TbClockHour4, TbActivityHeartbeat } from "react-icons/tb";
import IndividualBgOrbs from "./IndividualBgOrbs";
import MethodIndividual from "./MethodIndividual";
import PracticeIndividual from "./PracticeIndividual";
import GoalSpecific from "./GoalSpecific";
import ForWhomIndividual from "./ForWhomIndividual";
import SessionFlowIndividual from "./SessionFlowIndividual";
import HeroCTAIndividual from "./HeroCTAIndividual";

const IndividualExercisePrograms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="individual-exercise-programs">
      <div className="container">
        <IndividualBgOrbs />
        <div className="hero">
          <div className="left">
            <div className="individual-exercise-programs-navigation">
              <NavLink to={"/"}>
                <span>
                  {t("individual-exercise-programs.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("individual-exercise-programs.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services/individual-exercise-programs"}>
                <span>{t("individual-exercise-programs.navigation.individual-exercise-programs")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("individual-exercise-programs.tag.tag1")} <BsDot />
                <span>{t("individual-exercise-programs.tag.tag2")}</span>
              </span>
              <h1>
                {t("individual-exercise-programs.header.title1")}{" "}
                <span>{t("individual-exercise-programs.header.title2")}</span>
              </h1>
              <p>{t("individual-exercise-programs.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("individual-exercise-programs.first-evaluation")}
              </span>
            </div>
          </div>

          <div className="right">
            <div className="contents">
              <div className="header">
                <h3>{t("individual-exercise-programs.content-right.header")}</h3>
                <p>{t("individual-exercise-programs.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t("individual-exercise-programs.content-right.summary.summary1.header")}
                    </p>
                    <span>
                      {t("individual-exercise-programs.content-right.summary.summary1.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <IoCalendarClearOutline />
                  </div>
                  <div className="info">
                    <p>
                      {t("individual-exercise-programs.content-right.summary.summary2.header")}
                    </p>
                    <span>
                      {t("individual-exercise-programs.content-right.summary.summary2.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <TbActivityHeartbeat />
                  </div>
                  <div className="info">
                    <p>
                      {t("individual-exercise-programs.content-right.summary.summary3.header")}&
                    </p>
                    <span>
                      {t("individual-exercise-programs.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("individual-exercise-programs.content-right.extra.text1")}</span>
                <span>{t("individual-exercise-programs.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("individual-exercise-programs.content-right.button")} <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="method-individual-component">
          <MethodIndividual />
        </div>
        <div className="practice-individual-component">
          <PracticeIndividual />
        </div>
        <div className="goal-specific-component">
          <GoalSpecific />
        </div>
        <div className="for-whom-individual-component">
          <ForWhomIndividual />
        </div>
        <div className="session-flow-individual-component">
          <SessionFlowIndividual />
        </div>
        <div className="hero-cta-individual-component">
          <HeroCTAIndividual />
        </div>
      </div>
    </section>
  );
};

export default IndividualExercisePrograms;
