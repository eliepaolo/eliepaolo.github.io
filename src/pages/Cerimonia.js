import React from 'react';
import { useTranslation } from 'react-i18next';

function Cerimonia() {
  const { t } = useTranslation(['translation', 'config']);

  return (
    <div className="fade">
      <h2>{t('cerimonia.title')}</h2>
      <p>{t('cerimonia.description')}</p>

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

      {/* BOTTONE APRI MAPS */}
      <a
        href={t('config:ceremonyLink')}
        target="_blank"
        rel="noopener noreferrer"
        className="maps-btn"
      >
        {t('cerimonia.mappa')}
      </a>
    </div>
  );
}

export default Cerimonia;