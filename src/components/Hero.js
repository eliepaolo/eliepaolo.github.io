import React from 'react';
import Countdown from './Countdown';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <div className="divider"></div>
        <p className="date">{t('hero.date')}</p>
        <Countdown />
      </div>
    </section>
  );
}

export default Hero;