import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        <p>{t('listaNozze.description')}</p>
        <div className="gift-box">
          <div className="gift-details">
            <p className="copy-row">
              <strong>{t('listaNozze.beneficiaryLabel')}</strong> {t('listaNozze.beneficiary')}
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
              <strong>{t('listaNozze.ibanLabel')}</strong> {t('listaNozze.iban')}
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
              <strong>{t('listaNozze.bicLabel')}</strong> {t('listaNozze.bic')}
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
              <strong>{t('listaNozze.reasonLabel')}</strong> {t('listaNozze.reason')}
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