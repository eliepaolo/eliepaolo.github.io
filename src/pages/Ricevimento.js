import React from 'react';
import { useTranslation } from 'react-i18next';

function Ricevimento() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('ricevimento.title')}</h2>
      <div className="divider"></div>
      <p>{t('ricevimento.description')}</p>
      <h3>Indirizzo</h3>
      <p>{t('ricevimento.address')}</p>

      <iframe
        src="https://www.google.com/maps?q=Villa+Bellissima,Perugia&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: '20px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Ricevimento;