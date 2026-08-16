import "./DryNeedling.css"
import { useTranslation } from "react-i18next"
import { NavLink, useNavigate } from "react-router-dom"
import { BsArrowRightShort, BsDot } from "react-icons/bs"
import { HiChevronRight } from "react-icons/hi"
import { IoCalendarClearOutline } from "react-icons/io5"
import { MdOutlineDone } from "react-icons/md"
import { TbClockHour4, TbActivityHeartbeat } from "react-icons/tb"
import NeedlingBgOrbs from "./NeedlingBgOrbs"
import MethodNeedling from "./MethodNeedling"
import PracticeNeedling from "./PracticeNeedling"
import RegionSpecific from "./RegionSpecific"
import ForWhomNeedling from "./ForWhomNeedling"
import SessionFlowNeedling from "./SessionFlowNeedling"
import HeroCTANeedling from "./HeroCTANeedling"

const DryNeedling = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return (
    <section className="dry-needling">
      <div className="container">
        <NeedlingBgOrbs />
        <div className="hero">
          <div className="left">
            <div className="dry-needling-navigation">
              <NavLink to={"/"}>
                <span>
                  {t("dry-needling.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("dry-needling.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services/dry-needling"}>
                <span>{t("dry-needling.navigation.dry-needling")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("dry-needling.tag.tag1")} <BsDot />
                <span>{t("dry-needling.tag.tag2")}</span>
              </span>
              <h1>
                {t("dry-needling.header.title1")}{" "}
                <span>{t("dry-needling.header.title2")}</span>
              </h1>
              <p>{t("dry-needling.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("dry-needling.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("dry-needling.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("dry-needling.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("dry-needling.first-evaluation")}
              </span>
            </div>
          </div>

          <div className="right">
            <div className="contents">
              <div className="header">
                <h3>{t("dry-needling.content-right.header")}</h3>
                <p>{t("dry-needling.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "dry-needling.content-right.summary.summary1.header",
                      )}
                    </p>
                    <span>
                      {t("dry-needling.content-right.summary.summary1.desc")}
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
                        "dry-needling.content-right.summary.summary2.header",
                      )}
                    </p>
                    <span>
                      {t("dry-needling.content-right.summary.summary2.desc")}
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
                        "dry-needling.content-right.summary.summary3.header",
                      )}
                      &
                    </p>
                    <span>
                      {t("dry-needling.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("dry-needling.content-right.extra.text1")}</span>
                <span>{t("dry-needling.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("dry-needling.content-right.button")}{" "}
                  <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="method-needling-component">
          <MethodNeedling />
        </div>
        <div className="practice-needling-component">
          <PracticeNeedling />
        </div>
        <div className="region-specific-component">
          <RegionSpecific />
        </div>
        <div className="for-whom-needling-component">
          <ForWhomNeedling />
        </div>
        <div className="session-flow-needling-component">
          <SessionFlowNeedling />
        </div>
        <div className="hero-cta-needling-component">
          <HeroCTANeedling />
        </div>
      </div>
    </section>
  )
}

export default DryNeedling