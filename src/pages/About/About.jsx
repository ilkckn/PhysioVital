import "./About.css";
import { useTranslation } from "react-i18next";
import OurValues from "./OurValues";
import OurApproach from "./OurApproach";
import AboutMetrics from "./AboutMetrics";
import Team from "./Team";
import FirstStep from "./FirstStep";
import AboutBgOrbs from "./AboutBgOrbs";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <div className="about-bg-orbs">
          <AboutBgOrbs />
        </div>
        <div className="hero">
          <div className="hero-top">
            <span className="tag">{t("about.hero.tag")}</span>
            <h1>{t("about.hero.header1")}</h1>
            <h1>{t("about.hero.header2")}</h1>
            <p>{t("about.hero.desc")}</p>
          </div>
          <div className="hero-bottom">
            <div className="bottom-left">
              <h3>{t("about.hero.sub-header")}</h3>
              <div className="desc">
                <p>{t("about.hero.sub-desc1")}</p>
                <p>{t("about.hero.sub-desc2")}</p>
              </div>
            </div>
            <div className="bottom-right">
              <div className="image">
                <img src="/about/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="our-values-content">
          <OurValues />
        </div>
        <div className="our-approaches-component">
          <OurApproach />
        </div>
        <div className="metrics-component">
          <AboutMetrics />
        </div>
        <div className="team-component">
          <Team />
        </div>
        <div className="first-step-component">
          <FirstStep />
        </div>
      </div>
    </section>
  );
};

export default About;
