import React from 'react';
import { useTranslation } from 'react-i18next';

function Canti() {
  const { t } = useTranslation();

  return (
    <section className="section-light">
      <div className="canti-page fade">
      <div className="canti-container">
        <h2 className="canti-title">{t('canti.title')}</h2>
        <div className="divider"></div>

        <p className="canti-description">{t('canti.description')}</p>
        <p className="canti-note">{t('canti.note')}</p>

        {/* Future songs list */}
        <div className="canti-songs">
          {/* Example structure for future use */}
          {/*
          <ul className="songs-list">
            <li className="song-item">Ingresso – Titolo del canto</li>
            <li className="song-item">Salmo – Titolo del canto</li>
          </ul>
          */}
        </div>

        {/* Future booklet download */}
        <div className="canti-booklet">
          {/*
          <a href="/libretto.pdf" className="button canti-download" target="_blank" rel="noreferrer">
            {t('canti.download')}
          </a>
          */}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Canti;