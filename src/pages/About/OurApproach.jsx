import "./OurApproach.css";
import { useTranslation } from "react-i18next";

const steps = [
  {
    id: "approach1",
    accent: "#34b98a",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    id: "approach2",
    accent: "#e8867d",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </>
    ),
  },
  {
    id: "approach3",
    accent: "#6ba7d6",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    id: "approach4",
    accent: "#2fbfa8",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
];

const OurApproach = () => {
  const { t } = useTranslation();

  return (
    <section className="our-approach">
      <div className="content">
        <div className="header">
          <span className="tag">{t("about.our-approaches.tag")}</span>
          <h2>{t("about.our-approaches.header")}</h2>
          <p>{t("about.our-approaches.desc")}</p>
        </div>

        <ol className="timeline">
          {steps.map(({ id, icon, accent }) => (
            <li className="timeline-item" key={id} style={{ "--accent": accent }}>
              <span className="timeline-marker" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon}
                </svg>
              </span>
              <div className="timeline-content">
                <h3>{t(`about.our-approaches.approaches.${id}.header`)}</h3>
                <p>{t(`about.our-approaches.approaches.${id}.desc`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default OurApproach;