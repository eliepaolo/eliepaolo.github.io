import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date(t('config:eventDateISO')).getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [t]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.days}</div>
        <div className="countdown-label">{t('countdown.days')}</div>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.hours}</div>
        <div className="countdown-label">{t('countdown.hours')}</div>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.minutes}</div>
        <div className="countdown-label">{t('countdown.minutes')}</div>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.seconds}</div>
        <div className="countdown-label">{t('countdown.seconds')}</div>
      </div>
    </div>
  );
}

export default Countdown;