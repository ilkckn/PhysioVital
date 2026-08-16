import "./MethodIndividual.css"
import { useTranslation } from "react-i18next"
import { MdOutlineDone } from "react-icons/md"
import { TbActivityHeartbeat } from "react-icons/tb"

const MethodIndividual = () => {
  const { t } = useTranslation();
  
  return (
    <section className="method-individual">
      <div className="content">
        <div className="header">
          <span className="tag">{t("individual-exercise-programs.methods.tag")}</span>
          <h2>{t("individual-exercise-programs.methods.header")}</h2>
          <p>{t("individual-exercise-programs.methods.desc")}</p>
        </div>
        <div className="methods">
          <div className="left">
            <h4>{t("individual-exercise-programs.methods.methods-content.header")}</h4>
            <div className="list-content">
              <div className="list-left">
                <span>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.methods.methods-content.list.li1")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.methods.methods-content.list.li2")}
                </span>
              </div>
              <div className="list-right">
                <span>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.methods.methods-content.list.li3")}
                </span>
                <span>
                  <MdOutlineDone />
                  {t("individual-exercise-programs.methods.methods-content.list.li4")}
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
                {t("individual-exercise-programs.methods.methods-content.methods.header")}
              </h4>
            </div>
            <div className="method">
              <div className="box">
                <p>
                  01
                  <span>
                    {t(
                      "individual-exercise-programs.methods.methods-content.methods.techniques.technique1",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  02
                  <span>
                    {t(
                      "individual-exercise-programs.methods.methods-content.methods.techniques.technique2",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  03
                  <span>
                    {t(
                      "individual-exercise-programs.methods.methods-content.methods.techniques.technique3",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  04
                  <span>
                    {t(
                      "individual-exercise-programs.methods.methods-content.methods.techniques.technique4",
                    )}
                  </span>
                </p>
              </div>
              <div className="box">
                <p>
                  05
                  <span>
                    {t(
                      "individual-exercise-programs.methods.methods-content.methods.techniques.technique5",
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

export default MethodIndividual