import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Elisa & Paolo</Link>

        <nav className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">{t('menu.home')}</Link></li>

            <li className="dropdown">
              <span>{t('menu.informazioni')} ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/cerimonia">{t('menu.cerimonia')}</Link></li>
                <li><Link to="/ricevimento">{t('menu.ricevimento')}</Link></li>
                <li><Link to="/pernottamento">{t('menu.pernottamento')}</Link></li>
                <li><Link to="/canti">{t('menu.canti')}</Link></li>
                <li><Link to="/lista-nozze">{t('menu.listaNozze')}</Link></li>
              </ul>
            </li>

            <li><Link to="/rsvp" className="rsvp-btn">{t('menu.rsvp')}</Link></li>
          </ul>

          <div className="language-switcher">
            <button onClick={() => i18n.changeLanguage('it')} className={i18n.language === 'it' ? 'active' : ''}>
              🇮🇹
            </button>
            <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
              🇬🇧
            </button>
            <button onClick={() => i18n.changeLanguage('de')} className={i18n.language === 'de' ? 'active' : ''}>
              🇩🇪
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;