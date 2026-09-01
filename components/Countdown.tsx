"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-10-11T08:00:00+07:00");

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference =
        targetDate.getTime() - new Date().getTime();

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
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

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

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["Hari", time.days],
    ["Jam", time.hours],
    ["Menit", time.minutes],
    ["Detik", time.seconds],
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f4ed] px-6 py-24 sm:py-28">

      {/* =========================================
          ORNAMEN BACKGROUND
      ========================================== */}

      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full border border-[#b99a62]/10" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-[#b99a62]/10" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/5" />


      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* =========================================
            HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#927744]">
            Menuju Hari Bahagia
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#4b594d] sm:text-5xl">
            Sampai Jumpa di Acara
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#b99a62]" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500">
            Semoga waktu yang dinantikan ini menjadi
            awal dari kebahagiaan dan keberkahan
            untuk Alanza dan Alana.
          </p>

        </motion.div>


        {/* =========================================
            COUNTDOWN
        ========================================== */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">

          {items.map(([label, value], index) => (

            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#e3dccf] bg-white p-5 shadow-[0_10px_35px_rgba(80,65,40,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#c8a968]/50 hover:shadow-[0_15px_45px_rgba(80,65,40,0.11)] sm:p-7"
            >

              {/* Aksen gold bagian atas */}
              <div className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b-full bg-[#b99a62]/70" />


              {/* Lingkaran dekorasi */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-[#b99a62]/10" />


              {/* Angka */}
              <motion.div
                key={String(value)}
                initial={{
                  opacity: 0.5,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="font-display text-4xl font-medium text-[#4b594d] sm:text-6xl"
              >
                {String(value).padStart(2, "0")}
              </motion.div>


              {/* Garis */}
              <div className="mx-auto mt-3 h-px w-7 bg-[#b99a62]/60" />


              {/* Label */}
              <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#927744] sm:text-xs">
                {label}
              </div>

            </motion.div>

          ))}

        </div>


        {/* =========================================
            TANGGAL
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-10"
        >

          <div className="mx-auto h-px w-12 bg-[#b99a62]/50" />

          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-gray-400">
            Minggu • 11 Oktober 2026
          </p>

        </motion.div>

      </div>

    </section>
  );
}