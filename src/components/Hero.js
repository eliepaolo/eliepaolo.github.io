import React from 'react';
import Countdown from './Countdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ResponsiveImage from "../components/ResponsiveImage";



function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <ResponsiveImage
          name="hero"
          folder="hero"
          alt="Elisa e Paolo"
          sizes="100vw"
          priority={true}
        />
        <h1>{t('hero.title')}</h1>
        <div className="divider"></div>
        <p className="date">{t('hero.date')}</p>
        <div className="hero-countdown">
          <Countdown />
        </div>
        <Link to="/rsvp" className="hero-cta">
          {t('rsvp.button')}
        </Link>
      </div>
    </section>
  );
}

export default Hero;