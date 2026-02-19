import React from 'react';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <section className="fade">
        <h2>{t('home.welcome')}</h2>
        <div className="divider"></div>
      </section>
    </>
  );
}

export default Home;