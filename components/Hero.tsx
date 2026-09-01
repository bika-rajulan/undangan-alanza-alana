"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const openInvitation = () => {
    const target = document.getElementById("undangan");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f3ea] px-6 text-[#435046]">

      {/* =========================================
          BACKGROUND FOTO
      ========================================== */}
      <div className="absolute inset-0">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/alanza-alana.jpg')",
          }}
        />

        {/* Overlay sangat tipis agar foto tetap terlihat */}
        <div className="absolute inset-0 bg-[#fffdf8]/25" />

        {/* Soft gradient untuk menjaga keterbacaan */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-[#435046]/25" />

      </div>


      {/* =========================================
          SOFT LIGHT
      ========================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_55%)]" />


      {/* =========================================
          ORNAMEN LINGKARAN
      ========================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#b99a62]/35"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#b99a62]/30"
      />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/15" />


      {/* =========================================
          FRAME
      ========================================== */}
      <div className="absolute inset-5 rounded-[2rem] border border-white/70 sm:inset-8" />

      <div className="absolute inset-8 rounded-[1.5rem] border border-[#b99a62]/40 sm:inset-11" />


      {/* =========================================
          ORNAMEN SUDUT
      ========================================== */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-[#b99a62]/60" />

      <div className="absolute right-8 top-8 h-16 w-16 border-r border-t border-[#b99a62]/60" />

      <div className="absolute bottom-8 left-8 h-16 w-16 border-b border-l border-[#b99a62]/60" />

      <div className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-[#b99a62]/60" />


      {/* =========================================
          LABEL ATAS
      ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 z-10 text-center"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#776747] sm:text-xs">
          The Celebration Of
        </p>
      </motion.div>


      {/* =========================================
          PANEL KONTEN
      ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-white/65 bg-[#fffdf8]/55 px-7 py-10 text-center shadow-[0_25px_80px_rgba(80,65,40,0.18)] backdrop-blur-[3px] sm:px-12 sm:py-12"
      >

        {/* =====================================
            JENIS ACARA
        ====================================== */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#716d61] sm:text-sm"
        >
          Tasyakuran Khitanan
          <span className="mx-2 text-[#b99a62]">
            &
          </span>
          Aqiqah
        </motion.p>


        {/* =====================================
            NAMA
        ====================================== */}
        <h1 className="font-display text-7xl font-semibold leading-[0.8] tracking-tight text-[#435046] sm:text-9xl">

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="block"
          >
            Alanza
          </motion.span>


          <motion.span
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="my-5 block font-normal text-4xl text-[#b08d4f] sm:text-5xl"
          >
            &
          </motion.span>


          <motion.span
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
            }}
            className="block"
          >
            Alana
          </motion.span>

        </h1>


        {/* =====================================
            GARIS
        ====================================== */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 70,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mx-auto mt-10 h-px bg-[#b99a62]"
        />


        {/* =====================================
            TANGGAL
        ====================================== */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
          className="mt-6 text-sm font-medium tracking-[0.2em] text-[#625f56]"
        >
          MINGGU

          <span className="mx-3 text-[#b99a62]">
            •
          </span>

          11 OKTOBER 2026
        </motion.p>


        {/* =====================================
            TOMBOL
        ====================================== */}
        <motion.button
          onClick={openInvitation}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.7,
          }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "#b99a62",
            color: "#ffffff",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#b99a62] bg-white/50 px-9 py-3.5 text-sm font-medium tracking-wide text-[#8b7042] shadow-[0_8px_25px_rgba(80,65,40,0.12)] backdrop-blur-sm transition"
        >
          Buka Undangan

          <ChevronDown size={16} />

        </motion.button>

      </motion.div>


      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.2,
        }}
        className="absolute bottom-7 z-10 flex flex-col items-center gap-2 text-[#625f56]/60"
      >

        <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDown size={16} />
        </motion.div>

      </motion.div>

    </section>
  );
}