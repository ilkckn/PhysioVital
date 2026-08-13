import "./ManualTherapy.css";
import ManualBgOrbs from "./ManualBgOrbs";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { MdOutlineDone } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiShield } from "react-icons/fi";
import { TbRibbonHealth } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import Method from "./Method";
import Practice from "./Practice";
import ForWhomManual from "./ForWhomManual";
import SessionFlow from "./SessionFlow";
import HeroCTA from "./HeroCTA";

const ManualTherapy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="manual-therapy">
      <div className="container">
        <ManualBgOrbs />
        <div className="hero">
          <div className="content-left">
            <div className="navigation">
              <NavLink to={"/"}>
                <span>
                  {t("manual-therapy.navigation.home")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services"}>
                <span>
                  {t("manual-therapy.navigation.services")} <HiChevronRight />
                </span>
              </NavLink>
              <NavLink to={"/services/manual-therapy"}>
                <span>{t("manual-therapy.navigation.manual-therapy")}</span>
              </NavLink>
            </div>
            <div className="header">
              <span className="tag">
                {t("manual-therapy.tag.tag1")} <BsDot />
                <span>{t("manual-therapy.tag.tag2")}</span>
              </span>
              <h1>
                {t("manual-therapy.header.title1")}{" "}
                <span>{t("manual-therapy.header.title2")}</span>
              </h1>
              <p>{t("manual-therapy.desc")}</p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <MdOutlineDone />
                  {t("manual-therapy.list.li1")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("manual-therapy.list.li2")}
                </li>
                <li>
                  <MdOutlineDone />
                  {t("manual-therapy.list.li3")}
                </li>
              </ul>
              <span>
                <TbClockHour4 /> {t("manual-therapy.first-evaluation")}
              </span>
            </div>
          </div>
          <div className="content-right">
            <div className="contents">
              <div className="header">
                <h3>{t("manual-therapy.content-right.header")}</h3>
                <p>{t("manual-therapy.content-right.desc")}</p>
              </div>
              <div className="summary">
                <div className="sum">
                  <div className="icon">
                    <TbClockHour4 />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "manual-therapy.content-right.summary.summary1.header",
                      )}
                    </p>
                    <span>
                      {t("manual-therapy.content-right.summary.summary1.desc")}
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
                        "manual-therapy.content-right.summary.summary2.header",
                      )}
                    </p>
                    <span>
                      {t("manual-therapy.content-right.summary.summary2.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <FiShield />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "manual-therapy.content-right.summary.summary3.header",
                      )}&
                    </p>
                    <span>
                      {t("manual-therapy.content-right.summary.summary3.desc")}
                    </span>
                  </div>
                </div>
                <div className="sum">
                  <div className="icon">
                    <TbRibbonHealth />
                  </div>
                  <div className="info">
                    <p>
                      {t(
                        "manual-therapy.content-right.summary.summary4.header",
                      )}
                    </p>
                    <span>
                      {t("manual-therapy.content-right.summary.summary4.desc")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="extra">
                <span>{t("manual-therapy.content-right.extra.text1")}</span>
                <span>{t("manual-therapy.content-right.extra.text2")}</span>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/appointment")}>
                  {t("manual-therapy.content-right.button")}{" "}
                  <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="methods-component">
          <Method />
        </div>
        <div className="practice-component">
          <Practice />
        </div>
        <div className="for-whom-manual-component">
          <ForWhomManual />
        </div>
        <div className="session-flow-component">
          <SessionFlow />
        </div>
        <div className="hero-cta-component">
          <HeroCTA />
        </div>
      </div>
    </section>
  );
};

export default ManualTherapy;
