import "./Method.css";
import { useTranslation } from "react-i18next";
import { MdOutlineDone } from "react-icons/md";
import { IoHandRightOutline } from "react-icons/io5";

const Method = () => {
  const { t } = useTranslation();

  return (
    <section className="method-container">
      <div className="method-content">
        <div className="header">
          <span className="tag">{t("manual-therapy.methods.tag")}</span>
          <h2>{t("manual-therapy.methods.header")}</h2>
          <p>{t("manual-therapy.methods.desc")}</p>
        </div>
        <div className="methods">
          <div className="left">
            <h4>{t("manual-therapy.methods.methods-content.header")}</h4>
            <div className="list-content">
              <div className="list-left">
                <span>
                  <MdOutlineDone />
                  {t("manual-therapy.methods.methods-content.list.li1")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("manual-therapy.methods.methods-content.list.li2")}
                </span>
              </div>
              <div className="list-right">
                <span>
                  <MdOutlineDone />
                  {t("manual-therapy.methods.methods-content.list.li3")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("manual-therapy.methods.methods-content.list.li4")}
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-header">
              <div className="icon">
                <IoHandRightOutline />
              </div>
              <h4>
                {t("manual-therapy.methods.methods-content.methods.header")}
              </h4>
            </div>
            <div className="method">
              <p>01
                <span>
                  {t(
                    "manual-therapy.methods.methods-content.methods.techniques.technique1",
                  )}
                </span>
              </p>
              <p>
                02
                <span>
                  {t(
                    "manual-therapy.methods.methods-content.methods.techniques.technique2",
                  )}
                </span>
              </p>
              <p>
                03
                <span>
                  {t(
                    "manual-therapy.methods.methods-content.methods.techniques.technique3",
                  )}
                </span>
              </p>
              <p>
                04
                <span>
                  {t(
                    "manual-therapy.methods.methods-content.methods.techniques.technique4",
                  )}
                </span>
              </p>
              <p>
                05
                <span>
                  {t(
                    "manual-therapy.methods.methods-content.methods.techniques.technique5",
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
