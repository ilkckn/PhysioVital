import "./GoalSpecific.css"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { PiTennisBall } from "react-icons/pi"
import { BsArrowRightShort } from "react-icons/bs"
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiStrong } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";

const GoalSpecific = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="goal-specific">
      <div className="content">
        <div className="header">
          <span className="tag">
            {t("individual-exercise-programs.goal-specific.tag")}
          </span>
          <h2>{t("individual-exercise-programs.goal-specific.header")}</h2>
          <p>{t("individual-exercise-programs.goal-specific.desc")}</p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <IoFootsteps />
            </div>
            <h4>{t("individual-exercise-programs.goal-specific.boxes.box1.header")}</h4>
            <p>{t("individual-exercise-programs.goal-specific.boxes.box1.desc")}</p>
            <div className="tags">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box1.tags.tag1")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box1.tags.tag2")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box1.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box1.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("individual-exercise-programs.goal-specific.boxes.box1.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <GiStrong />
            </div>
            <h4>{t("individual-exercise-programs.goal-specific.boxes.box2.header")}</h4>
            <p>{t("individual-exercise-programs.goal-specific.boxes.box2.desc")}</p>
            <div className="tags">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box2.tags.tag1")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box2.tags.tag2")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box2.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box2.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("individual-exercise-programs.goal-specific.boxes.box2.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineOfficeBuilding />
            </div>
            <h4>{t("individual-exercise-programs.goal-specific.boxes.box3.header")}</h4>
            <p>{t("individual-exercise-programs.goal-specific.boxes.box3.desc")}</p>
            <div className="tags">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box3.tags.tag1")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box3.tags.tag2")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box3.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box3.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("individual-exercise-programs.goal-specific.boxes.box3.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PiTennisBall />
            </div>
            <h4>{t("individual-exercise-programs.goal-specific.boxes.box4.header")}</h4>
            <p>{t("individual-exercise-programs.goal-specific.boxes.box4.desc")}</p>
            <div className="tags">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box4.tags.tag1")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box4.tags.tag2")}
              </span>
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box4.tags.tag3")}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("individual-exercise-programs.goal-specific.boxes.box4.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("individual-exercise-programs.goal-specific.boxes.box4.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalSpecific