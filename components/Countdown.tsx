"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-10-11T08:00:00");

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["Hari", time.days],
    ["Jam", time.hours],
    ["Menit", time.minutes],
    ["Detik", time.seconds],
  ];

  return (
    <section className="bg-[#f8f5ee] px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
          Menuju Hari Bahagia
        </p>

        <h2 className="font-display mt-3 text-4xl text-[#26332b] sm:text-5xl">
          Sampai Jumpa di Acara
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-6">
          {items.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#ddd5c4] bg-white p-4 shadow-sm"
            >
              <div className="font-display text-3xl text-[#657567] sm:text-5xl">
                {String(value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-widest text-gray-400 sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
