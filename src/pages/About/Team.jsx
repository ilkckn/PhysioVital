import "./Team.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="team">
      <div className="content">
        <div className="header">
          <span className="tag">{t("about.team.tag")}</span>
          <h2>{t("about.team.header")}</h2>
          <p>{t("about.team.desc")}</p>
        </div>
        <div className="team-members">
          <div className="member">
            <div className="image">
              <img src="/about/team1.png" alt="" />
            </div>
            <div className="info">
              <span>{t("about.team.team-members.member1.title")}</span>
              <h4>{t("about.team.team-members.member1.name")}</h4>
              <p>{t("about.team.team-members.member1.desc")}</p>
            </div>
          </div>
          <div className="member">
            <div className="image">
              <img src="/about/team2.png" alt="" />
            </div>
            <div className="info">
              <span>{t("about.team.team-members.member2.title")}</span>
              <h4>{t("about.team.team-members.member2.name")}</h4>
              <p>{t("about.team.team-members.member2.desc")}</p>
            </div>
          </div>
          <div className="member">
            <div className="image">
              <img src="/about/team3.png" alt="" />
            </div>
            <div className="info">
              <span>{t("about.team.team-members.member3.title")}</span>
              <h4>{t("about.team.team-members.member3.name")}</h4>
              <p>{t("about.team.team-members.member3.desc")}</p>
            </div>
          </div>
          <div className="member">
            <div className="image">
              <img src="/about/team4.png" alt="" />
            </div>
            <div className="info">
              <span>{t("about.team.team-members.member4.title")}</span>
              <h4>{t("about.team.team-members.member4.name")}</h4>
              <p>{t("about.team.team-members.member4.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
