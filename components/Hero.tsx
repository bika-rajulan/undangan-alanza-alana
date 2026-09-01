"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    "/images/alanza-alana.jpg",
    "/images/alanza.jpg",
    "/images/alana.jpg",
  ];

  const openInvitation = () => {
    const target = document.getElementById("undangan");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f1e5] text-[#6e5736]">

      {/* =====================================================
          BACKGROUND ELEGAN
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f8f1e6] to-[#eee1c9]" />

      {/* Cahaya lembut tengah */}

      <div className="absolute left-1/2 top-[40%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8bd82]/10 blur-3xl" />

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#ead9b5]/20 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#d7bd86]/15 blur-3xl" />


      {/* =====================================================
          ORNAMEN LINGKARAN
      ====================================================== */}

      <div className="absolute left-1/2 top-[39%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/15" />

      <div className="absolute left-1/2 top-[39%] h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/9" />

      <div className="absolute left-1/2 top-[39%] h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/5" />


      {/* =====================================================
          FRAME
      ====================================================== */}

      <div className="absolute inset-4 rounded-[2rem] border border-[#b99a62]/25 sm:inset-7" />

      <div className="absolute inset-7 rounded-[1.5rem] border border-[#b99a62]/10 sm:inset-10" />


      {/* =====================================================
          ORNAMEN SUDUT
      ====================================================== */}

      <div className="absolute left-7 top-7 h-14 w-14 border-l border-t border-[#b99a62]/45 sm:left-10 sm:top-10 sm:h-20 sm:w-20" />

      <div className="absolute right-7 top-7 h-14 w-14 border-r border-t border-[#b99a62]/45 sm:right-10 sm:top-10 sm:h-20 sm:w-20" />

      <div className="absolute bottom-7 left-7 h-14 w-14 border-b border-l border-[#b99a62]/45 sm:bottom-10 sm:left-10 sm:h-20 sm:w-20" />

      <div className="absolute bottom-7 right-7 h-14 w-14 border-b border-r border-[#b99a62]/45 sm:bottom-10 sm:right-10 sm:h-20 sm:w-20" />


      {/* =====================================================
          KONTEN
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center px-6 pb-12 pt-12 text-center sm:px-10 sm:pt-14">


        {/* =================================================
            THE CELEBRATION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#9a773e] sm:text-xs">
            The Celebration
          </p>

          <div className="mx-auto mt-3 h-px w-10 bg-[#b99a62]/60" />
        </motion.div>


        {/* =================================================
            BISMILLAH
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-4 text-[10px] font-medium tracking-[0.2em] text-[#80663e] sm:text-xs"
        >
          Bismillahirrahmanirrahim
        </motion.p>


        {/* =================================================
            JENIS ACARA
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
className="mt-6 text-lg font-semibold uppercase tracking-[0.2em] text-[#80663e] sm:text-xl"
        >
          Tasyakuran Khitanan
          <span className="mx-2 text-[#b18a4b]">
            &
          </span>
          Aqiqah
        </motion.p>


        {/* =================================================
            FOTO SLIDE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.45,
          }}
          className="relative mt-7 sm:mt-8"
        >

          {/* Bingkai luar */}

          <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b99a62]/15" />

          <div className="absolute -inset-2 rounded-[2rem] border border-[#b99a62]/25" />


          {/* Foto */}

<div className="relative h-[320px] w-[250px] overflow-hidden rounded-[2rem] border-[3px] border-[#fffaf0] bg-white p-1 shadow-[0_22px_55px_rgba(100,75,35,0.2)] sm:h-[420px] sm:w-[325px]">

            <AnimatePresence mode="wait">

              <motion.img
                key={currentPhoto}
                src={photos[currentPhoto]}
                alt="Alanza dan Alana"
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="h-full w-full rounded-[1.2rem] object-cover"
              />

            </AnimatePresence>

          </div>

        </motion.div>


        {/* =================================================
            INDIKATOR FOTO
        ================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2">

          {photos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPhoto(index)}
              aria-label={`Foto ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                currentPhoto === index
                  ? "h-1.5 w-8 bg-[#b18a4b]"
                  : "h-1.5 w-1.5 bg-[#b18a4b]/30"
              }`}
            />
          ))}

        </div>


        {/* =================================================
            NAMA
        ================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.65,
          }}
className="font-display mt-7 whitespace-nowrap text-[3.8rem] font-semibold leading-none tracking-tight text-[#674f2f] drop-shadow-[0_2px_5px_rgba(90,65,30,0.15)] sm:text-7xl md:text-[7.5rem]"
        >
          Alanza
          <span className="mx-2 font-light text-[#b18a4b] sm:mx-4">
            &
          </span>
          Alana
        </motion.h1>


        {/* =================================================
            TANGGAL
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.85,
          }}
          className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-[#927343] sm:text-xs"
        >
          MINGGU
          <span className="mx-2 text-[#b18a4b]">
            •
          </span>
          11 OKTOBER 2026
        </motion.p>


        {/* =================================================
            TOMBOL
        ================================================== */}

        <motion.button
          type="button"
          onClick={openInvitation}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.05,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#b99a62] bg-[#b99a62] px-8 py-3 text-xs font-semibold tracking-wide text-white shadow-[0_8px_22px_rgba(100,75,35,0.16)] transition hover:bg-[#a27d43] sm:px-9 sm:py-3.5 sm:text-sm"
        >
          Buka Undangan
          <ChevronDown size={15} />
        </motion.button>


        {/* =================================================
            SCROLL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="mt-auto pt-5 text-[#9a773e]/50"
        >
          <span className="text-[7px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-1 flex justify-center"
          >
            <ChevronDown size={13} />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}
