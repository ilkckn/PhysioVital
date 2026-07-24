import "./Category.css";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();

  return (
    <section className="category">
      <div className="header">
        <span>{t("treatments.category.tag")}</span>
        <h2>{t("treatments.category.header")}</h2>
        <p>{t("treatments.category.desc")}</p>
      </div>
      <div className="categories">
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <h3>{t("treatments.category.box.header1")}</h3>
          <p>{t("treatments.category.box.desc1")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag1")}</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3>{t("treatments.category.box.header2")}</h3>
          <p>{t("treatments.category.box.desc2")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag2")}</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <h3>{t("treatments.category.box.header3")}</h3>
          <p>{t("treatments.category.box.desc3")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag3")}</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
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
          <h3>{t("treatments.category.box.header4")}</h3>
          <p>{t("treatments.category.box.desc4")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag4")}</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
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
          <h3>{t("treatments.category.box.header5")}</h3>
          <p>{t("treatments.category.box.desc5")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag5")}</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <svg
              width="24"
              height="24"
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
          <h3>{t("treatments.category.box.header6")}</h3>
          <p>{ t("treatments.category.box.desc6")}</p>
          <div className="tag">
            <span>{t("treatments.category.box.tag6")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
