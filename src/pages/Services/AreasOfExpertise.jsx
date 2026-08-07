import "./AreasOfExpertise.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TbClockHour4 } from "react-icons/tb";
import { MdDone } from "react-icons/md";

const AreasOfExpertise = ({ registerRef}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="areas-of-expertise">
      <div className="content">
        <div className="header">
          <span className="tag">{t("services.areas-of-expertise.tag")}</span>
          <h2>{t("services.areas-of-expertise.header")}</h2>
          <p>{t("services.areas-of-expertise.desc")}</p>
        </div>
        <div className="expertise-list">
          <div className="expertise" ref={registerRef("list1")}>
            <div className="left">
              <span className="num">01</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8M6 16v-2a2 2 0 0 0-4 0v3c0 4 3 6 6 6h3c3 0 5-1 8-4l3-3a2 2 0 1 0-3-3l-3 2" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 45{" "}
                {t("services.areas-of-expertise.expertise.expertise1.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise1.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise1.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise1.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise1.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="expertise" ref={registerRef("list2")}>
            <div className="left">
              <span className="num">02</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 60{" "}
                {t("services.areas-of-expertise.expertise.expertise2.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise2.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise2.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise2.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise2.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="expertise" ref={registerRef("list3")}>
            <div className="left">
              <span className="num">03</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 45{" "}
                {t("services.areas-of-expertise.expertise.expertise3.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise3.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise3.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise3.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise3.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="expertise" ref={registerRef("list4")}>
            <div className="left">
              <span className="num">04</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 45{" "}
                {t("services.areas-of-expertise.expertise.expertise4.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise4.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise4.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise4.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise4.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="expertise" ref={registerRef("list5")}>
            <div className="left">
              <span className="num">05</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 30{" "}
                {t("services.areas-of-expertise.expertise.expertise5.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise5.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise5.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise5.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise5.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="expertise" ref={registerRef("list6")}>
            <div className="left">
              <span className="num">06</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <span className="duration">
                <TbClockHour4 /> 60{" "}
                {t("services.areas-of-expertise.expertise.expertise6.duration")}
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.session",
                  )}
                </span>
              </span>
              <h6>
                {t("services.areas-of-expertise.expertise.expertise6.for-whom")}
              </h6>
              <div className="tags">
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.for-what.1",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.for-what.2",
                  )}
                </span>
                <span>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.for-what.3",
                  )}
                </span>
              </div>
            </div>
            <div className="right">
              <h3>
                {t("services.areas-of-expertise.expertise.expertise6.header")}
              </h3>
              <p>
                {t("services.areas-of-expertise.expertise.expertise6.desc")}
              </p>
              <div className="treatments">
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.tags.tag1",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.tags.tag2",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.tags.tag3",
                  )}
                </span>
                <span>
                  <MdDone />
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.tags.tag4",
                  )}
                </span>
              </div>
              <div className="btns">
                <button onClick={() => navigate("/appointment")}>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.btns.btn1",
                  )}
                </button>
                <button>
                  {t(
                    "services.areas-of-expertise.expertise.expertise6.btns.btn2",
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
