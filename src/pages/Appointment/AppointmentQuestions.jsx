import "./AppointmentQuestions.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AppointmentQuestions = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqList = t("treatments.questions.faqList", {returnObjects: true})

  return (
    <section className="appointment-questions">
      <div className="content">
        <div className="header">
          <span className="tag">{t("treatments.questions.tag")}</span>
          <h2>{t("treatments.questions.header")}</h2>
        </div>
        <div className="questions-list">
          {faqList.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                {item.q}
                <svg
                  className="faq-chevron"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentQuestions;
