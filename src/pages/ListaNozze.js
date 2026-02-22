import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ResponsiveImage from '../components/ResponsiveImage';

function ListaNozze() {
  const { t } = useTranslation();

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="section-light">
      <div className="fade">
        <h2>{t('listaNozze.title')}</h2>
        <div className="divider"></div>

        <div className="lista-images-row">
          <div className="cerimonia-image">
            <ResponsiveImage
              name="sposi-casa"
              folder="graphics"
              alt="Sposi-casa"
              className="cerimonia-img"
            />
          </div>
          <div className="cerimonia-image">
            <ResponsiveImage
              name="lista-nozze"
              folder="graphics"
              alt="Lista-nozze"
              className="cerimonia-img"
            />
          </div>
        </div>

        <div className="lista-description-centered">
          <p dangerouslySetInnerHTML={{ __html: t('listaNozze.description') }}></p>
        </div>

        <div className="gift-box">
          <div className="gift-details">
            <p className="copy-row">
              <strong>{t('listaNozze.beneficiaryLabel')}</strong>
              <span className="copy-value">{t('listaNozze.beneficiary')}</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy(t('listaNozze.beneficiary'), 'beneficiary')}
                aria-label="Copy beneficiary"
              >
                {copiedField === 'beneficiary' ? (
                  <>
                    <span className="check-icon">✓</span>
                    <span className="copy-tooltip">Copied</span>
                  </>
                ) : (
                  <svg
                    className="copy-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                )}
              </button>
            </p>

            <p className="copy-row">
              <strong>{t('listaNozze.ibanLabel')}</strong>
              <span className="copy-value iban-value">{t('listaNozze.iban')}</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy(t('listaNozze.iban'), 'iban')}
                aria-label="Copy IBAN"
              >
                {copiedField === 'iban' ? (
                  <>
                    <span className="check-icon">✓</span>
                    <span className="copy-tooltip">Copied</span>
                  </>
                ) : (
                  <svg
                    className="copy-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                )}
              </button>
            </p>

            <p className="copy-row">
              <strong>{t('listaNozze.bicLabel')}</strong>
              <span className="copy-value">{t('listaNozze.bic')}</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy(t('listaNozze.bic'), 'bic')}
                aria-label="Copy BIC"
              >
                {copiedField === 'bic' ? (
                  <>
                    <span className="check-icon">✓</span>
                    <span className="copy-tooltip">Copied</span>
                  </>
                ) : (
                  <svg
                    className="copy-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                )}
              </button>
            </p>

            <p className="copy-row">
              <strong>{t('listaNozze.reasonLabel')}</strong>
              <span className="copy-value">{t('listaNozze.reason')}</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy(t('listaNozze.reason'), 'reason')}
                aria-label="Copy reason"
              >
                {copiedField === 'reason' ? (
                  <>
                    <span className="check-icon">✓</span>
                    <span className="copy-tooltip">Copied</span>
                  </>
                ) : (
                  <svg
                    className="copy-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                )}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListaNozze;