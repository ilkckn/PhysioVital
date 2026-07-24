import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="container">
        <div className="content">
          <div className="top">
            <div className="logo-desc">
              <div className="logo">
                <img src="browser.png" alt="footer logo" />
                <p>
                  {t("footer.logo1")}
                  <span>{t("footer.logo2")}</span>
                </p>
              </div>
              <p className="desc">{t("footer.desc")}</p>
            </div>
            <div className="links">
              <div className="footer-services">
                <h4>{t("footer.services.services")}</h4>
                <ul>
                  <li>
                    <NavLink to={"/services/manual-therapy"}>
                      {t("footer.services.manual-therapy")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services/sports-rehabilitation"}>
                      {t("footer.services.sports-rehabilitation")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services/neurological-physiotherapy"}>
                      {t("footer.services.neurological-physiotherapy")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services/orthopedic-rehabilitation"}>
                      {t("footer.services.orthopedic-rehabilitation")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="institutional">
                <h4>{t("footer.institutional.institutional-header")}</h4>
                <ul>
                  <li>
                    <NavLink to={"/institutional/about"}>
                      {t("footer.institutional.about")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/treatments"}>
                      {t("footer.institutional.areas-of-treatment")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>
                      {t("footer.institutional.contact")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>{t("footer.contact")}</h4>
                <p>+49 (170) 1234567</p>
                <p>{t("footer.email")}</p>
                <p>{t("footer.address")}</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="rights">
              <span>{t("footer.rights")}</span>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <SlSocialYoutube />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <AiOutlineLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
