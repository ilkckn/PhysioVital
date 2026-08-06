import "./Appointment.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { MdDone } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import AppointmentForm from "./AppointmentForm";
import AppointmentBgOrbs from "./AppointmentBgOrbs";
import YouNeedToKnow from "./YouNeedToKnow";
import HowIsItWork from "./HowIsItWork";
import AppointmentQuestions from "./AppointmentQuestions";

const Appointment = () => {
  const { t } = useTranslation();

  return (
    <section className="appointment">
      <div className="container">
        <div className="appointment-bg-orbs">
          <AppointmentBgOrbs />
        </div>
        <div className="hero">
          <div className="left">
            <span className="tag">{t("appointment.hero.tag")}</span>
            <div className="main-header">
              <h1>
                <Trans
                  i18nKey="appointment.hero.header.title"
                  components={{ hl: <span /> }}
                />
              </h1>
            </div>
            <p>{t("appointment.hero.desc")}</p>
            <div className="list">
              <div className="item">
                <MdDone />
                <p>{t("appointment.hero.list.list1")}</p>
              </div>
              <div className="item">
                <MdDone />
                <p>{t("appointment.hero.list.list2")}</p>
              </div>
              <div className="item">
                <MdDone />
                <p>{t("appointment.hero.list.list3")}</p>
              </div>
              <div className="opening-hours">
                <TbClockHour4 />
                <p>{t("appointment.hero.list.opening-hours")}</p>
              </div>
            </div>
          </div>
          <div className="right">
            <AppointmentForm />
          </div>
        </div>
      </div>
      <div className="you-need-to-know-component">
        <YouNeedToKnow />
      </div>
      <div className="how-is-it-work-component">
        <HowIsItWork />
      </div>
      <div className="appointment-questions-component">
        <AppointmentQuestions />
      </div>
    </section>
  );
};

export default Appointment;
