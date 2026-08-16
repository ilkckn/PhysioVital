import "./OrthopedicRehabilitation.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { TbClockHour4, TbActivityHeartbeat } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import MethodOrthopedic from "./MethodOrthopedic";
import PracticeOrthopedic from "./PracticeOthopedic";
import OperationSpecific from "./OperationSpecific";
import ForWhomOrthopedic from "./ForWhomOrthopedic";
import SessionFlowOrthopedic from "./SessionFlowOrthopedic";
import HeroCTAOrthopedic from "./HeroCTAORthopedic";

const OrthopedicRehabilitation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="orthopedic-rehabilitation">
      <div className="container">
        <div className="hero">
          <div className="left">
            <div className="orthopedic-navigation">
              <NavLink to={"/"}>
                <span>
                  {t("orthopedic-therapy.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("orthopedic-therapy.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink
                className="active"
                to={"/services/neurological-physiotherapy"}
              >
                <span>{t("orthopedic-therapy.navigation.orthopedic-therapy")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("orthopedic-therapy.tags.tag1")} <BsDot />
                <span>{t("orthopedic-therapy.tags.tag2")}</span>
              </span>
              <h1>
                {t("orthopedic-therapy.header.title1")}{" "}
                <span>{t("orthopedic-therapy.header.title2")}</span>
              </h1>
              <p>{t("orthopedic-therapy.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("orthopedic-therapy.first-evaluation")}
              </span>
            </div>
          </div>

          <div className="right">
            <div className="contents">
              <div className="header">
                <h3>{t("orthopedic-therapy.content-right.header")}</h3>
                <p>{t("orthopedic-therapy.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t("orthopedic-therapy.content-right.summary.summary1.header")}
                    </p>
                    <span>
                      {t("orthopedic-therapy.content-right.summary.summary1.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <IoCalendarClearOutline />
                  </div>
                  <div className="info">
                    <p>
                      {t("orthopedic-therapy.content-right.summary.summary2.header")}
                    </p>
                    <span>
                      {t("orthopedic-therapy.content-right.summary.summary2.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <TbActivityHeartbeat />
                  </div>
                  <div className="info">
                    <p>
                      {t("orthopedic-therapy.content-right.summary.summary3.header")}
                    </p>
                    <span>
                      {t("orthopedic-therapy.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("orthopedic-therapy.content-right.extra.text1")}</span>
                <span>{t("orthopedic-therapy.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("orthopedic-therapy.content-right.button")}{" "}
                  <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="method-orthopedic-component">
          <MethodOrthopedic />
        </div>
        <div className="practice-orthopedic-component">
          <PracticeOrthopedic />
        </div>
        <div className="operation-specific-component">
          <OperationSpecific />
        </div>
        <div className="for-whom-orthopedic-component">
          <ForWhomOrthopedic />
        </div>
        <div className="session-flow-orthopedic-component">
          <SessionFlowOrthopedic />
        </div>
        <div className="hero-cta-orthopedic-component">
          <HeroCTAOrthopedic />
        </div>
      </div>
    </section>
  );
};

export default OrthopedicRehabilitation;
