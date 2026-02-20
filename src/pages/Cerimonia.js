import React from 'react';
import { useTranslation } from 'react-i18next';

function Cerimonia() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('cerimonia.title')}</h2>
      <div className="divider"></div>
      <p>{t('cerimonia.description')}</p>
      <h3>Indirizzo</h3>
      <p>{t('cerimonia.address')}</p>

      <iframe
        src="https://www.google.com/maps?q=Chiesa+di+San+Francesco,Perugia&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: '20px' }}
        allowFullScreen=""
        loading="lazy"
        title={t('cerimonia.mappa')}
      ></iframe>
    </section>
  );
}

export default Cerimonia;