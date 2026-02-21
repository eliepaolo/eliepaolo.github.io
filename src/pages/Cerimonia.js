import React from 'react';
import { useTranslation } from 'react-i18next';

function Cerimonia() {
  const { t } = useTranslation(['translation', 'config']);

  return (
    <section className="section-light">
      <div className="fade">
      <h2>{t('cerimonia.title')}</h2>
      <div className="divider"></div>
      <p>{t('cerimonia.description')}</p>

      {/* BOTTONE APRI MAPS */}
      <a
        href={t('config:ceremonyLink')}
        target="_blank"
        rel="noopener noreferrer"
        className="maps-btn"
      >
        {t('cerimonia.mappa')}
      </a>
      {/* MAPPA EMBED */}
      <div className="map-container">
        <iframe
          src={t('config:ceremonyEmbed')}
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '20px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Cerimonia"
        ></iframe>
      </div>
    </div>
    </section>
  );
}

export default Cerimonia;