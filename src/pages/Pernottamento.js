import React from 'react';
import { useTranslation } from 'react-i18next';

function Pernottamento() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('pernottamento.title')}</h2>
      <div className="divider"></div>
      <p>{t('pernottamento.description')}</p>
    </section>
  );
}

export default Pernottamento;