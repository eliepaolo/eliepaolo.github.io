import React from 'react';
import { useTranslation } from 'react-i18next';
import ResponsiveImage from '../components/ResponsiveImage';

function Ricevimento() {
  const { t } = useTranslation(['translation', 'config']);

  return (
    <section className="section-light">
      <div className="fade">
        <h2>{t('ricevimento.title')}</h2>
        <div className="divider"></div>

        <div className="cerimonia-layout">
          <div className="cerimonia-image">
            <ResponsiveImage
              name="ricevimento"
              folder="graphics"
              alt="Ricevimento"
              className="cerimonia-img"
            />
          </div>

          <div className="cerimonia-content">
            {(() => {
              const fullText = t('ricevimento.description');
              const parts = fullText.split('<br/>');
              return (
                <>
                  <p
                    dangerouslySetInnerHTML={{ __html: parts[0] }}
                  ></p>

                  {parts[1] && (
                    <div className="info-highlight">
                      <span className="info-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 13L5 8C5.3 7.2 6 7 6.8 7H17.2C18 7 18.7 7.2 19 8L21 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 13H19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <circle cx="7" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="17" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <p
                        dangerouslySetInnerHTML={{ __html: parts[1] }}
                      ></p>
                    </div>
                  )}
                </>
              );
            })()}

            <a
              href={t('config:locationLink')}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-btn"
            >
              {t('ricevimento.mappa')}
            </a>
          </div>
        </div>

        <div className="map-container" style={{ marginTop: '3rem' }}>
          <iframe
            src={t('config:receptionEmbed')}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '20px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Ricevimento"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Ricevimento;