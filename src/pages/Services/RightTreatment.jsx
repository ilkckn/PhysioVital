import "./RightTreatment.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const RightTreatment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="right-treatment">
      <div className="content">
        <div className="left">
          <h2>
            {t("services.right-treatment.header1")}{" "}
            <span>{t("services.right-treatment.header2")}</span>
          </h2>
          <p>{t("services.right-treatment.desc")}</p>
        </div>
        <div className="right">
          <div className="btns">
            <button onClick={() => navigate("/appointment")}>{t("services.right-treatment.btns.btn1")}</button>
            <button onClick={() => navigate("/contact")}>{ t("services.right-treatment.btns.btn2")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightTreatment;
