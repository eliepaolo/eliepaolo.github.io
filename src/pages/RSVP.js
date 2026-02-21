import React from 'react';
import { useTranslation } from 'react-i18next';

function RSVP() {
  const { t } = useTranslation();

  return (
    <section className="section-light">
      <div className="fade">
      <h2>{t('rsvp.title')}</h2>
      <div className="divider"></div>
      <span
              dangerouslySetInnerHTML={{ __html: t('rsvp.description') }}
      />
      <a
        className="maps-btn"
        href={t('rsvp.link')}
        target="_blank"
        rel="noreferrer"
      >
        {t('rsvp.button')}
      </a>
      </div>
    </section>
  );
}

export default RSVP;