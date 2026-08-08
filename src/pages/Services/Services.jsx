import "./Services.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ServicesBgOrbs from "./ServicesBgOrbs";
import { MdCheck } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import AreasOfExpertise from "./AreasOfExpertise";
import ThreeWays from "./ThreeWays";
import TermsOfService from "./TermsOfService";
import ServicesQuestions from "./ServicesQuestions";
import RightTreatment from "./RightTreatment";

const Services = () => {
  const { t } = useTranslation();
  const sectionRefs = useRef({});

  const scrollTo = (key) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth" });
  };

  const registerRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <section className="services-container">
      <div className="container">
        <div className="services-bg-orbs">
          <ServicesBgOrbs />
        </div>
        <div className="hero">
          <div className="content-left">
            <span className="tag">{t("services.hero.tag")}</span>
            <div className="main-header">
              <h1>
                {t("services.hero.header.title1")}{" "}
                <span className="highlight">
                  {t("services.hero.header.title2")}
                </span>{" "}
                {t("services.hero.header.title3")}
              </h1>
            </div>
            <p>{t("services.hero.desc")}</p>
            <ul>
              <li>
                <MdCheck /> {t("services.hero.list.list1")}
              </li>
              <li>
                <MdCheck /> {t("services.hero.list.list2")}
              </li>
              <li>
                <MdCheck /> {t("services.hero.list.list3")}
              </li>
            </ul>
            <span>
              <TbClockHour4 />
              {t("services.hero.sub-info")}
            </span>
          </div>

          <div className="content-right">
            <div className="treatment-list">
              <h4>{t("services.hero.content-right.header")}</h4>
              <p>{t("services.hero.content-right.desc")}</p>
              <div className="service-list">
                <div className="list" onClick={() => scrollTo("list1")}>
                  <div className="icon-par">
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
                    <p>{t("services.hero.content-right.list.list1")}</p>
                  </div>
                  <span>
                    45 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
                <div className="list" onClick={() => scrollTo("list2")}>
                  <div className="icon-par">
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
                    <p>{t("services.hero.content-right.list.list2")}</p>
                  </div>
                  <span>
                    60 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
                <div className="list" onClick={() => scrollTo("list3")}>
                  <div className="icon-par">
                    <div className="icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5v.5A2.5 2.5 0 0 0 4.5 7.5 2.5 2.5 0 0 0 3 10a2.5 2.5 0 0 0 1.5 2.3A2.5 2.5 0 0 0 5.5 15 2.5 2.5 0 0 0 7 19.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 1.5 2.3 2.5 2.5 0 0 1-1.5 2.3 2.5 2.5 0 0 1-.5 4.9 2.5 2.5 0 0 1-1.5 4.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-3Z" />
                      </svg>
                    </div>
                    <p>{t("services.hero.content-right.list.list3")}</p>
                  </div>
                  <span>
                    45 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
                <div className="list" onClick={() => scrollTo("list4")}>
                  <div className="icon-par">
                    <div className="icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
                      </svg>
                    </div>
                    <p>{t("services.hero.content-right.list.list4")}</p>
                  </div>
                  <span>
                    45 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
                <div className="list" onClick={() => scrollTo("list5")}>
                  <div className="icon-par">
                    <div className="icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2 20 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5M9 11l4 4M5 19 2 22M14 4l6 6" />
                      </svg>
                    </div>
                    <p>{t("services.hero.content-right.list.list5")}</p>
                  </div>
                  <span>
                    30 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
                <div className="list" onClick={() => scrollTo("list6")}>
                  <div className="icon-par">
                    <div className="icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" />
                        <path d="m9 14 2 2 4-4" />
                      </svg>
                    </div>
                    <p>{t("services.hero.content-right.list.list6")}</p>
                  </div>
                  <span>
                    60 {t("services.hero.content-right.list.duration")}
                    <FiArrowRight />
                  </span>
                </div>
              </div>
              <div className="bottom-tag">
                <span>{t("services.hero.content-right.bottom-tag.tag1")}</span>
                <p>{t("services.hero.content-right.bottom-tag.tag2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="areas-of-expertise-component">
          <AreasOfExpertise registerRef={registerRef} />
        </div>
        <div className="how-is-it-work component">
          <ThreeWays />
        </div>
        <div className="terms-of-service-component">
          <TermsOfService />
        </div>
        <div className="services-questions-component">
          <ServicesQuestions />
        </div>
        <div className="right-treatment-component">
          <RightTreatment />
        </div>
      </div>
    </section>
  );
};

export default Services;
