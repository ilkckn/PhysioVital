import "./OurValues.css";
import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();

  return (
    <section className="our-values">
      <div className="content">
        <div className="header">
          <span className="tag">{t("about.our-values.tag")}</span>
          <h2>{t("about.our-values.header")}</h2>
          <p>{t("about.our-values.desc")}</p>
        </div>
        <div className="values">
          <div className="box">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>{t("about.our-values.values.value1.header")}</h3>
            <p>{t("about.our-values.values.value1.desc")}</p>
          </div>
          <div className="box">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>{t("about.our-values.values.value2.header")}</h3>
            <p>{t("about.our-values.values.value2.desc")}</p>
          </div>
          <div className="box">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>{t("about.our-values.values.value3.header")}</h3>
            <p>{t("about.our-values.values.value3.desc")}</p>
          </div>
          <div className="box">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>{t("about.our-values.values.value4.header")}</h3>
            <p>{t("about.our-values.values.value4.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
