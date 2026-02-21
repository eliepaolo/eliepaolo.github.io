import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">{t('config:names')}</Link>

        <button
          className="burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-right ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.home')}</Link></li>

            <li className="dropdown">
              <span>{t('menu.informazioni')}</span>
              <ul className="dropdown-menu">
                <li><Link to="/cerimonia" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.cerimonia')}</Link></li>
                <li><Link to="/ricevimento" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.ricevimento')}</Link></li>
                <li><Link to="/soggiorno" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.soggiorno')}</Link></li>
                <li><Link to="/canti" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.canti')}</Link></li>
                <li><Link to="/lista-nozze" className="nav-link" onClick={() => setMobileOpen(false)}>{t('menu.listaNozze')}</Link></li>
              </ul>
            </li>

            <li><Link to="/rsvp" className="rsvp-btn" onClick={() => setMobileOpen(false)}>{t('menu.rsvp')}</Link></li>
          </ul>
                    <div className="language-dropdown">
            <div className="lang-current">
              <span className={`fi fi-${i18n.language === 'en' ? 'gb' : i18n.language}`}></span>
              <span>{i18n.language.toUpperCase()}</span>
            </div>

            <ul className="lang-menu">
              <li
                className={i18n.language === 'it' ? 'active' : ''}
                onClick={() => i18n.changeLanguage('it')}
              >
                <span className="fi fi-it"></span>
                Italiano
              </li>

              <li
                className={i18n.language === 'en' ? 'active' : ''}
                onClick={() => i18n.changeLanguage('en')}
              >
                <span className="fi fi-gb"></span>
                English
              </li>

              <li
                className={i18n.language === 'de' ? 'active' : ''}
                onClick={() => i18n.changeLanguage('de')}
              >
                <span className="fi fi-de"></span>
                Deutsch
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;