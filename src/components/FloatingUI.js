import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function FloatingUI() {
  const { i18n } = useTranslation();
  const [showScroll, setShowScroll] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLang(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-ui">
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

      <div className="floating-lang">
        <button
          className="lang-toggle-btn"
          onClick={() => setOpenLang(!openLang)}
        >
          <span
            className={`fi fi-${
              i18n.language === 'en' ? 'gb' : i18n.language
            }`}
          ></span>
          <span>{i18n.language.toUpperCase()}</span>
        </button>

        {openLang && (
          <ul className="floating-lang-menu">
            <li
              className={i18n.language === 'it' ? 'active' : ''}
              onClick={() => changeLanguage('it')}
            >
              <span className="fi fi-it"></span>
              Italiano
            </li>

            <li
              className={i18n.language === 'en' ? 'active' : ''}
              onClick={() => changeLanguage('en')}
            >
              <span className="fi fi-gb"></span>
              English
            </li>

            <li
              className={i18n.language === 'de' ? 'active' : ''}
              onClick={() => changeLanguage('de')}
            >
              <span className="fi fi-de"></span>
              Deutsch
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default FloatingUI;