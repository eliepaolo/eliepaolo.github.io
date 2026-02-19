import React from 'react';
import { useTranslation } from 'react-i18next';

function Canti() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('canti.title')}</h2>
      <div className="divider"></div>
      <p>{t('canti.description')}</p>
    </section>
  );
}

export default Canti;