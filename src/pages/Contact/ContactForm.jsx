import "./ContactForm.css";
import ContactMap from "./ContactMap";
import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

const ContactForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const nameRef = useRef(null);

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  const validate = () => {
    const newErrors = {};
    const base = "contact.hero.contact-form.form.error";
    if (!form.name.trim()) newErrors.name = `${base}.name`;
    if (!form.phone.trim()) newErrors.phone = `${base}.phone`;
    if (!form.email.trim()) {
      newErrors.email = `${base}.email`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = `${base}.email-invalid`;
    }
    if (!form.subject.trim()) newErrors.subject = `${base}.subject`;
    if (!form.message.trim()) newErrors.message = `${base}.message`;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(form);
    setErrors({});
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    setSubmitted(true);
  };

  return (
    <section className="contact-form">
      <div className="content">
        <div className="form-group">
          <div className="small-header">
            <span>{t("contact.hero.contact-form.small-header")}</span>
          </div>
          <h1>{t("contact.hero.contact-form.main-header")}</h1>
          <p>{t("contact.hero.contact-form.description")}</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="name-phone">
              <div className="name">
                <label htmlFor="name">
                  {t("contact.hero.contact-form.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  // ref={nameRef}
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t(
                    "contact.hero.contact-form.form.name-placeholder",
                  )}
                />
                {errors.name && <span className="error">{t(errors.name)}</span>}
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  {t("contact.hero.contact-form.form.phone")}
                </label>
                <input
                  type="text"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t(
                    "contact.hero.contact-form.form.phone-placeholder",
                  )}
                />
                {errors.phone && <span className="error">{t(errors.phone)}</span>}
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">
                {t("contact.hero.contact-form.form.email")}
              </label>
              <input
                type="text"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t(
                  "contact.hero.contact-form.form.email-placeholder",
                )}
              />
              {errors.email && <span className="error">{t(errors.email)}</span>}
            </div>
            <div className="subject">
              <label htmlFor="subject">
                {t("contact.hero.contact-form.form.subject.subject-title")}
              </label>
              <select
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {t("contact.hero.contact-form.form.subject.options.option1")}
                </option>

                <option value="Appointment">
                  {t("contact.hero.contact-form.form.subject.options.option2")}
                </option>
                <option value="Information">
                  {t("contact.hero.contact-form.form.subject.options.option3")}
                </option>
                <option value="Collaboration">
                  {t("contact.hero.contact-form.form.subject.options.option4")}
                </option>
                <option value="Other">
                  {t("contact.hero.contact-form.form.subject.options.option5")}
                </option>
              </select>
              {errors.subject && (
                <span className="error">{t(errors.subject)}</span>
              )}
            </div>
            <div className="message">
              <label htmlFor="message">
                {t("contact.hero.contact-form.form.message")}
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t(
                  "contact.hero.contact-form.form.message-placeholder",
                )}
              />
              {errors.message && (
                <span className="error">{t(errors.message)}</span>
              )}
            </div>
            <button type="submit">
              {t("contact.hero.contact-form.form.submit")}
              <RiMailSendLine />
            </button>

            {submitted && (
              <p className="submitted-message">
                <FaCircleCheck className="check-icon" />
                {t("contact.hero.contact-form.form.submitted")}
              </p>
            )}
          </form>
        </div>
        <div className="map">
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
