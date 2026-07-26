import "./Details.css";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();

  return (
    <section className="details">
      <div className="header">
        <span>{t("treatments.details.tag")}</span>
        <h2>{t("treatments.details.header")}</h2>
        <p>{t("treatments.details.desc")}</p>
      </div>
      <div className="detail-boxes">
        <div className="box">
          <div className="left">
            <span>{t("treatments.details.detail-boxes.orthopedic.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.orthopedic.header")}</h2>
            <p>{t("treatments.details.detail-boxes.orthopedic.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.orthopedic.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.orthopedic.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.orthopedic.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.orthopedic.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.orthopedic.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.orthopedic.btn")}</button>
          </div>
          <div className="right">
            <div className="image">
              <img src="/treatments/orthopedic.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="right">
            <div className="image">
              <img src="/treatments/neurological.png" alt="" />
            </div>
          </div>
          <div className="left">
            <span>{t("treatments.details.detail-boxes.neurological.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.neurological.header")}</h2>
            <p>{t("treatments.details.detail-boxes.neurological.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.neurological.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.neurological.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.neurological.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.neurological.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.neurological.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.orthopedic.btn")}</button>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <span>{t("treatments.details.detail-boxes.sports.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.sports.header")}</h2>
            <p>{t("treatments.details.detail-boxes.sports.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.sports.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.sports.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.sports.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.sports.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.sports.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.orthopedic.btn")}</button>
          </div>
          <div className="right">
            <div className="image">
              <img src="/treatments/sport.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="right">
            <div className="image">
              <img src="/treatments/manual.png" alt="" />
            </div>
          </div>
          <div className="left">
            <span>{t("treatments.details.detail-boxes.manual.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.manual.header")}</h2>
            <p>{t("treatments.details.detail-boxes.manual.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.manual.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.manual.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.manual.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.manual.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.manual.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.orthopedic.btn")}</button>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <span>{t("treatments.details.detail-boxes.dry-needling.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.dry-needling.header")}</h2>
            <p>{t("treatments.details.detail-boxes.dry-needling.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.dry-needling.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.dry-needling.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.dry-needling.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.dry-needling.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.dry-needling.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.dry-needling.btn")}</button>
          </div>
          <div className="right">
            <div className="image">
              <img src="/treatments/dry-needling.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="right">
            <div className="image">
              <img src="/treatments/individual-exercise-programs.png" alt="" />
            </div>
          </div>
          <div className="left">
            <span>{t("treatments.details.detail-boxes.individual.tag")}</span>
            <h2>{t("treatments.details.detail-boxes.individual.header")}</h2>
            <p>{t("treatments.details.detail-boxes.individual.desc")}</p>
            <ul>
              <li>{t("treatments.details.detail-boxes.individual.list.li1")}</li>
              <li>{t("treatments.details.detail-boxes.individual.list.li2")}</li>
              <li>{t("treatments.details.detail-boxes.individual.list.li3")}</li>
              <li>{t("treatments.details.detail-boxes.individual.list.li4")}</li>
              <li>{t("treatments.details.detail-boxes.individual.list.li5")}</li>
            </ul>
            <button>{t("treatments.details.detail-boxes.individual.btn")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
