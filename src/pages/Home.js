import React from 'react';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <section className="section-light">
        <div className="fade">
        
        <div className="home-quote">
          <p className="quote-text">
            <span
              dangerouslySetInnerHTML={{ __html: t('home.quote') }}
            />
          </p>
          <p className="quote-author">
            — {t('home.quoteAuthor')}
          </p>
        </div>
        </div>
      </section>

    </>
  );
}

export default Home;