import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date("August 22, 2026 11:00:00").getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {timeLeft.days} {t('countdown.days')} · {timeLeft.hours} {t('countdown.hours')} · {timeLeft.minutes} {t('countdown.minutes')}
    </div>
  );
}

export default Countdown;