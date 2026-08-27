"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#26332b] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(185,154,98,0.22),_transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#d4bc8b]">
          Tasyakuran Khitanan & Cukuran
        </p>

        <h1 className="font-display text-7xl font-semibold leading-none sm:text-8xl">
          Alanza
          <span className="mx-3 block text-4xl font-normal text-[#d4bc8b] sm:inline">
            &
          </span>
          Alana
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
          Dengan penuh rasa syukur dan kebahagiaan, kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa terbaik
          bagi buah hati kami.
        </p>

        <motion.a
          href="#acara"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex rounded-full border border-[#d4bc8b]/60 px-8 py-3 text-sm tracking-wide text-[#f4dfb2] transition hover:bg-[#d4bc8b] hover:text-[#26332b]"
        >
          Lihat Undangan
        </motion.a>
      </motion.div>

      <div className="absolute bottom-8 text-xs tracking-[0.3em] text-white/40">
        SCROLL
      </div>
    </section>
  );
}
