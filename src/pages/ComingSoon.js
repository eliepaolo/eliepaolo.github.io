import React, { useEffect, useState } from "react";
import "../style.css";

function ComingSoon() {
  const weddingDate = new Date("2026-08-22T11:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div  className="coming-container"  style={{
    "--bg-desktop": `url(${process.env.PUBLIC_URL}/images/cover.jpg)`,
    "--bg-mobile": `url(${process.env.PUBLIC_URL}/images/cover_mobile.jpg)`,
    }}>
      <div className="overlay">
        <h1>Elisa & Paolo</h1>
        <div className="divider"></div>
        <p className="date">22.08.2026 · Perugia</p>

        <div className="countdown">
          {timeLeft.days} giorni · {timeLeft.hours} ore · {timeLeft.minutes} minuti
        </div>

      </div>
    </div>
  );
}

export default ComingSoon;