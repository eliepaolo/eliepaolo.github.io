import React from 'react';
import { useTranslation } from 'react-i18next';
import UmbriaMap from '../components/UmbriaMap';

function Soggiorno() {
  const { t } = useTranslation();

  return (
    <section className="section-light">
      <div className="fade">
      <h2>{t('soggiorno.title')}</h2>
      <div className="divider"></div>
      <p>{t('soggiorno.description')}</p>
      <p>{t('soggiorno.intro')}</p>
      <div
        className="highlight-note"
        dangerouslySetInnerHTML={{ __html: t('soggiorno.note') }}
      />
      <UmbriaMap />
      </div>
    </section>
  );
}

export default Soggiorno;