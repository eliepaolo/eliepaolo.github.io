import React from 'react';
import { useTranslation } from 'react-i18next';

function Ricevimento() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('ricevimento.title')}</h2>
      <p>{t('ricevimento.description')}</p>

      <iframe
        src={t('config:receptionEmbed')}
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: '22px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mappa Cerimonia"
      />
      <a
        href={t('config:locationLink')}
        target="_blank"
        rel="noopener noreferrer"
        className="maps-btn"
      >
        {t('ricevimento.mappa')}
      </a>
    </section>
  );
}

export default Ricevimento;