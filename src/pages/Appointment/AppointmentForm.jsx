import "./AppointmentForm.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStarOfLife, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const services = [
  { value: "manual-therapy", labelKey: "option1", durationMin: 45 },
  { value: "sports-rehabilitation", labelKey: "option2", durationMin: 60 },
  { value: "neurological-physiotherapy", labelKey: "option3", durationMin: 45 },
  { value: "orthopedic-rehabilitation", labelKey: "option4", durationMin: 45 },
  { value: "dry-needling", labelKey: "option5", durationMin: 30 },
  {
    value: "individual-exercise-programs",
    labelKey: "option6",
    durationMin: 60,
  },
];

const AppointmentForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("http://localhost:3000/appointments", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
      setStatus("success");
    } catch (error) {
      console.log("Randevu gönderilemedi:", error);
      setStatus("error");
    }
    console.log(formData);
  };

  const selectedService = services.find((s) => s.value === formData.service);

  const formattedDate = formData.date
    ? new Date(formData.date).toLocaleDateString(i18n.language, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  const weekday = formData.date
    ? new Date(formData.date).toLocaleDateString(i18n.language, {
        weekday: "long",
      })
    : "";

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="appointment-form">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h3>{t("appointment.hero.form.header")}</h3>
          <p>{t("appointment.hero.form.desc")}</p>
        </div>

        <div className="form-section">
          <div className="name-email">
            <div className="name">
              <label htmlFor="name">
                {t("appointment.hero.form.form.name")}
                <FaStarOfLife />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("appointment.hero.form.form.name-placeholder")}
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                {t("appointment.hero.form.form.email")}
                <FaStarOfLife />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("appointment.hero.form.form.email-placeholder")}
                required
              />
            </div>
          </div>

          <div className="phone-service">
            <div className="phone">
              <label htmlFor="phone">
                {t("appointment.hero.form.form.phone")}
                <FaStarOfLife />
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("appointment.hero.form.form.phone-placeholder")}
                required
              />
            </div>
            <div className="service">
              <label htmlFor="service">
                {t("appointment.hero.form.form.service")}
                <FaStarOfLife />
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  {t("appointment.hero.form.form.service-placeholder")}
                </option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {t(`appointment.hero.form.form.${s.labelKey}`)} ·{" "}
                    {s.durationMin} dk
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="date">
            <label htmlFor="date">
              {t("appointment.hero.form.form.date")}
              <FaStarOfLife />
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              required
            />
            {formData.date && (
              <span className="date-hint">
                {weekday} {t("appointment.hero.form.form.open-note")} · 09:00 –
                19:00
              </span>
            )}
          </div>

          <div className="message">
            <label htmlFor="message">
              {t("appointment.hero.form.form.message")}
              <span className="optional">
                {t("appointment.hero.form.form.optional")}
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("appointment.hero.form.form.message-placeholder")}
            ></textarea>
          </div>
        </div>

        <div className="service-info">
          <div className="info-item">
            <span className="info-label">
              {t("appointment.hero.form.form.info-service")}
            </span>
            <span className="info-value">
              {selectedService
                ? t(`appointment.hero.form.form.${selectedService.labelKey}`)
                : "—"}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">
              {t("appointment.hero.form.form.info-duration")}
            </span>
            <span className="info-value">
              {selectedService ? `${selectedService.durationMin} dk` : "—"}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">
              {t("appointment.hero.form.form.info-date")}
            </span>
            <span className="info-value">{formattedDate}</span>
          </div>
        </div>

        <div className="btn">
          {/* <p className="kvkk">{t("appointment.hero.form.form.privacy")}</p>*/}
          <button type="submit" disabled={status === "loading"}>
            {status === "loading"
              ? t("appointment.hero.form.form.sending")
              : t("appointment.hero.form.form.submit")}
            <FaArrowRight />
          </button>
        </div>
        {status === "success" && (
          <>
            <p className="form-message success">
              {t("appointment.hero.form.form.success1")}
              <span className="form-message success">
                {t("appointment.hero.form.form.success2")}
              </span>
            </p>
          </>
        )}
        {status === "error" && (
          <p className="form-message error">
            {t("appointment.hero.form.form.error")}
          </p>
        )}
      </form>
    </section>
  );
};

export default AppointmentForm;
