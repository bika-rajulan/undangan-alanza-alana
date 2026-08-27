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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#26332b] px-6 text-white">

      {/* Background dekorasi */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d4bc8b]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#d4bc8b]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(185,154,98,0.15),_transparent_45%)]" />
      </div>

      {/* Ornamen atas */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4bc8b] sm:text-xs">
          The Celebration Of
        </p>
      </motion.div>

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-3xl text-center"
      >

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
          Tasyakuran Khitanan
          <span className="mx-2 text-[#d4bc8b]">&</span>
          Cukuran
        </p>

        {/* Nama */}
        <h1 className="font-display text-7xl font-semibold leading-[0.8] tracking-tight sm:text-9xl">

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="block"
          >
            Alanza
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="my-4 block font-normal text-4xl text-[#d4bc8b] sm:my-5 sm:text-5xl"
          >
            &
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="block"
          >
            Alana
          </motion.span>

        </h1>

        {/* Garis dekorasi */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 70, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-10 h-px bg-[#d4bc8b]"
        />

        {/* Tanggal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-6 text-sm tracking-[0.2em] text-white/70"
        >
          MINGGU
          <span className="mx-3 text-[#d4bc8b]">•</span>
          11 OKTOBER 2026
        </motion.p>

        {/* Tombol */}
        <motion.button
          onClick={openInvitation}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "#d4bc8b",
            color: "#26332b",
          }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d4bc8b]/60 px-8 py-3.5 text-sm tracking-wide text-[#f4dfb2] transition"
        >
          Buka Undangan
          <ChevronDown size={16} />
        </motion.button>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-7 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
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
