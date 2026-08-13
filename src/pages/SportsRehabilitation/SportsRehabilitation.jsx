import "./SportsRehabilitation.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { TbClockHour4, TbActivityHeartbeat } from "react-icons/tb";
import MethodSports from "./MethodSports";
import PracticeSports from "./PracticeSports";
import DisciplineSpecific from "./DisciplineSpecific";
import SportsBgOrbs from "./SportsBgOrbs";
import ForWhomSports from "./ForWhomSports";
import SessionFlowSports from "./SessionFlowSports";
import HeroCTASports from "./HeroCTASports";

const SportsRehabilitation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="sports-therapy">
      <div className="container">
        <SportsBgOrbs />
        <div className="hero">
          <div className="left">
            <div className="sports-navigation">
              <NavLink to={"/"}>
                <span>
                  {t("sports-therapy.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("sports-therapy.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services/sports-rehabilitation"}>
                <span>{t("sports-therapy.navigation.sports-therapy")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("sports-therapy.tag.tag1")} <BsDot />
                <span>{t("sports-therapy.tag.tag2")}</span>
              </span>
              <h1>
                {t("sports-therapy.header.title1")}{" "}
                <span>{t("sports-therapy.header.title2")}</span>
              </h1>
              <p>{t("sports-therapy.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("sports-therapy.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("sports-therapy.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("sports-therapy.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("sports-therapy.first-evaluation")}
              </span>
            </div>
          </div>

          <div className="right">
            <div className="contents">
              <div className="header">
                <h3>{t("sports-therapy.content-right.header")}</h3>
                <p>{t("sports-therapy.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "sports-therapy.content-right.summary.summary1.header",
                      )}
                    </p>
                    <span>
                      {t("sports-therapy.content-right.summary.summary1.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <IoCalendarClearOutline />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "sports-therapy.content-right.summary.summary2.header",
                      )}
                    </p>
                    <span>
                      {t("sports-therapy.content-right.summary.summary2.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <TbActivityHeartbeat />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "sports-therapy.content-right.summary.summary3.header",
                      )}
                      &
                    </p>
                    <span>
                      {t("sports-therapy.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("sports-therapy.content-right.extra.text1")}</span>
                <span>{t("sports-therapy.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("sports-therapy.content-right.button")}{" "}
                  <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="method-sports-component">
          <MethodSports />
        </div>
        <div className="practice-sports-component">
          <PracticeSports />
        </div>
        <div className="discipline-specific-component">
          <DisciplineSpecific />
        </div>
        <div className="for-whom-sports-component">
          <ForWhomSports />
        </div>
        <div className="session-flow-sports-component">
          <SessionFlowSports />
        </div>
        <div className="hero-cta-sports-component">
          <HeroCTASports />
        </div>
      </div>
    </section>
  );
};

export default SportsRehabilitation;
