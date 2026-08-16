import "./OperationSpecific.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  TbBolt,
  TbClockHour5,
} from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { LuSprout } from "react-icons/lu";

const OperationSpecific = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="operation-specific">
      <div className="content">
        <div className="header">
          <span className="tag">
            {t("orthopedic-therapy.operation-specific.tag")}
          </span>
          <h2>{t("orthopedic-therapy.operation-specific.header")}</h2>
          <p>{t("orthopedic-therapy.operation-specific.desc")}</p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <TbClockHour5 />
            </div>
            <h4>
              {t("orthopedic-therapy.operation-specific.boxes.box1.header")}
            </h4>
            <p>{t("orthopedic-therapy.operation-specific.boxes.box1.desc")}</p>
            <div className="tags">
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box1.tags.tag1",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box1.tags.tag2",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box1.tags.tag3",
                )}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("orthopedic-therapy.operation-specific.boxes.box1.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("orthopedic-therapy.operation-specific.boxes.box1.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <TbBolt />
            </div>
            <h4>
              {t("orthopedic-therapy.operation-specific.boxes.box2.header")}
            </h4>
            <p>{t("orthopedic-therapy.operation-specific.boxes.box2.desc")}</p>
            <div className="tags">
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box2.tags.tag1",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box2.tags.tag2",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box2.tags.tag3",
                )}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("orthopedic-therapy.operation-specific.boxes.box2.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("orthopedic-therapy.operation-specific.boxes.box2.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiPlusCircle />
            </div>
            <h4>
              {t("orthopedic-therapy.operation-specific.boxes.box3.header")}
            </h4>
            <p>{t("orthopedic-therapy.operation-specific.boxes.box3.desc")}</p>
            <div className="tags">
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box3.tags.tag1",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box3.tags.tag2",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box3.tags.tag3",
                )}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("orthopedic-therapy.operation-specific.boxes.box3.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("orthopedic-therapy.operation-specific.boxes.box3.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LuSprout />
            </div>
            <h4>
              {t("orthopedic-therapy.operation-specific.boxes.box4.header")}
            </h4>
            <p>{t("orthopedic-therapy.operation-specific.boxes.box4.desc")}</p>
            <div className="tags">
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box4.tags.tag1",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box4.tags.tag2",
                )}
              </span>
              <span>
                {t(
                  "orthopedic-therapy.operation-specific.boxes.box4.tags.tag3",
                )}
              </span>
            </div>
            <div className="cta">
              <span>
                {t("orthopedic-therapy.operation-specific.boxes.box4.cta.cta1")}
              </span>
              <span onClick={() => navigate("/contact")}>
                {t("orthopedic-therapy.operation-specific.boxes.box4.cta.cta2")}{" "}
                <BsArrowRightShort />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSpecific;
