import React, { useEffect, useState } from "react";
import "../style.css";
import coverImage from "../assets/cover.jpg";

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
    <div className="coming-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${coverImage})` }}>
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