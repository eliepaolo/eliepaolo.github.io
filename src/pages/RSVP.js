import React from 'react';
import { useTranslation } from 'react-i18next';

function RSVP() {
  const { t } = useTranslation();

  return (
    <section className="fade">
      <h2>{t('rsvp.title')}</h2>
      <div className="divider"></div>
      <p>{t('rsvp.description')}</p>
      <a
        className="button"
        href={t('rsvp.link')}
        target="_blank"
        rel="noreferrer"
      >
        {t('rsvp.button')}
      </a>
    </section>
  );
}

export default RSVP;