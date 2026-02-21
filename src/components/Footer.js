import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/cerimonia">{t('menu.cerimonia')}</Link>
        <Link to="/ricevimento">{t('menu.ricevimento')}</Link>
        <Link to="/soggiorno">{t('menu.soggiorno')}</Link>
        <Link to="/canti">{t('menu.canti')}</Link>
        <Link to="/lista-nozze">{t('menu.listaNozze')}</Link>
        <Link to="/rsvp">{t('menu.rsvp')}</Link>
      </div>
      <div className="footer-bottom">
        Elisa & Paolo · 2026
      </div>
    </footer>
  );
}

export default Footer;