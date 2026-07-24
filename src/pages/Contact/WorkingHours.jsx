import "./WorkingHours.css";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendar } from "react-icons/hi2";
import { TbClockHour3 } from "react-icons/tb";
import { BsExclamationCircle } from "react-icons/bs";

const WorkingHours = () => {
  const { t } = useTranslation();

  return (
    <section className="working-hours">
        <div className="content">
          <div className="header">
            <div className="tag">
              <p>{t("contact.hero.contact-form.working-hours.tag")}</p>
            </div>
            <h2>{t("contact.hero.contact-form.working-hours.header")}</h2>
          </div>
          <div className="hours">
            <div className="week">
              <h2 className="week-header">
                <HiOutlineCalendar />
                {t("contact.hero.contact-form.working-hours.hours.week.header")}
              </h2>
              <div className="week-days">
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.week.days.monday",
                    )}
                  </p>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.week.days.tuesday",
                    )}
                  </p>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.week.days.wednesday",
                    )}
                  </p>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.week.days.thursday",
                    )}
                  </p>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.week.days.friday",
                    )}
                  </p>
                  <span>09:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div className="weekend">
              <h2 className="weekend-header">
                <TbClockHour3 />
                {t(
                  "contact.hero.contact-form.working-hours.hours.weekend.header",
                )}
              </h2>
              <div className="weekend-days">
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.weekend.days.saturday",
                    )}
                  </p>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="day">
                  <p>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.weekend.days.sunday",
                    )}
                  </p>
                  <span>
                    {t(
                      "contact.hero.contact-form.working-hours.hours.weekend.close",
                    )}
                  </span>
                </div>
              </div>
              <div className="tag">
                <p>
                  <BsExclamationCircle />
                  {t(
                    "contact.hero.contact-form.working-hours.hours.weekend.tag",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default WorkingHours;
