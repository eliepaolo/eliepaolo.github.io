import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Countdown() {
  const { t } = useTranslation(['translation', 'config']);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date(t('config:eventDateISO')).getTime();
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