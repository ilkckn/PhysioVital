import "./LanguageSwitcher.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

function LanguageSwitcher({ setMenuOpen }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = i18n.resolvedLanguage; // "tr-TR" değil "tr" verir

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
    setMenuOpen?.(false);
  };

  return (
    <div className="lang-switcher">
      <div className="btns">
        <GrLanguage className="lang-switcher-icon" onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="lang-switcher-dropdown">
            {["tr", "en", "de"].map((lng) => (
              <button
                key={lng}
                className={currentLanguage === lng ? "active" : ""}
                onClick={() => handleLanguageChange(lng)}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
