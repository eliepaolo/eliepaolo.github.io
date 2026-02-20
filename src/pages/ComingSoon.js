import React, { useEffect, useState } from "react";
import "../style.css";

function ComingSoon() {
  const weddingDate = new Date("2026-08-22T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-container">
      <div className="overlay">
        <h1>Elisa & Paolo</h1>
        <div className="divider"></div>
        <p className="date">22 Agosto 2026 · Perugia</p>

        <div className="countdown">
          {timeLeft.days} giorni · {timeLeft.hours} ore · {timeLeft.minutes} minuti
        </div>

        <a href="/info" className="enter-link">
          Scopri di più
        </a>
      </div>
    </div>
  );
}

export default ComingSoon;