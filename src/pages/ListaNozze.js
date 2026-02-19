import React from 'react';
import { useTranslation } from 'react-i18next';

function ListaNozze() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('listaNozze.title')}</h2>
      <div className="divider"></div>
      <p>{t('listaNozze.description')}</p>
      <p><strong>{t('listaNozze.iban')}</strong></p>
    </section>
  );
}

export default ListaNozze;