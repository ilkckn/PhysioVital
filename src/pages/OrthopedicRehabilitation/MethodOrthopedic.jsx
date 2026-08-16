import "./MethodOrthopedic.css"
import { useTranslation } from "react-i18next"
import { MdOutlineDone } from "react-icons/md"
import { TbActivityHeartbeat } from "react-icons/tb"

const MethodOrthopedic = () => {
  const { t } = useTranslation()

  return (
    <section className="method-orthopedic">
      <div className="orthopedic-content">
        <div className="header">
          <span className="tag">{t("orthopedic-therapy.methods.tag")}</span>
          <h2>{t("orthopedic-therapy.methods.header")}</h2>
          <p>{t("orthopedic-therapy.methods.desc")}</p>
        </div>
        <div className="methods">
          <div className="left">
            <h4>{t("orthopedic-therapy.methods.methods-content.header")}</h4>
            <div className="list-content">
              <div className="list-left">
                <span>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.methods.methods-content.list.li1")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.methods.methods-content.list.li2")}
                </span>
              </div>
              <div className="list-right">
                <span>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.methods.methods-content.list.li3")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("orthopedic-therapy.methods.methods-content.list.li4")}
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-header">
              <div className="icon">
                <TbActivityHeartbeat />
              </div>
              <h4>
                {t("orthopedic-therapy.methods.methods-content.methods.header")}
              </h4>
            </div>
            <div className="method">
              <div className="box">
                <p>
                  01
                  <span>
                    {t(
                      "orthopedic-therapy.methods.methods-content.methods.techniques.technique1",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  02
                  <span>
                    {t(
                      "orthopedic-therapy.methods.methods-content.methods.techniques.technique2",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  03
                  <span>
                    {t(
                      "orthopedic-therapy.methods.methods-content.methods.techniques.technique3",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  04
                  <span>
                    {t(
                      "orthopedic-therapy.methods.methods-content.methods.techniques.technique4",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  05
                  <span>
                    {t(
                      "orthopedic-therapy.methods.methods-content.methods.techniques.technique5",
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MethodOrthopedic