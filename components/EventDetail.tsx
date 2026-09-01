"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function EventDetail() {
  const eventDetails = [
    {
      icon: CalendarDays,
      title: "Tanggal",
      text: "Minggu, 11 Oktober 2026",
    },
    {
      icon: Clock,
      title: "Waktu",
      text: "08.00 WIB – selesai",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      text: "Kediaman Keluarga",
    },
  ];

  return (
    <section
      id="acara"
      className="bg-[#faf8f3] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* =========================================
            HEADER
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#927744]">
            Detail Acara
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#4b594d] sm:text-5xl">
            InsyaAllah Berkesan
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#b99a62]" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500">
            Dengan penuh rasa syukur dan kebahagiaan, kami
            menantikan kehadiran Bapak/Ibu/Saudara/i untuk
            bersama-sama berbagi doa dan kebahagiaan.
          </p>
        </motion.div>

        {/* =========================================
            DETAIL ACARA
        ========================================== */}
        <div className="grid gap-6 md:grid-cols-3">
          {eventDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="group rounded-[2rem] border border-[#e5dfd2] bg-white p-8 text-center shadow-[0_10px_35px_rgba(80,65,40,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(80,65,40,0.10)]"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c8a968]/40 bg-[#faf6ec] text-[#a9854b] transition duration-300 group-hover:bg-[#b99a62] group-hover:text-white">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}
                <h3 className="font-display mt-6 text-2xl text-[#4b594d]">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            LOKASI ACARA
        ========================================== */}
        <motion.div
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
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#d4bc8b]/35 bg-[#435046] p-8 text-center text-white shadow-[0_18px_55px_rgba(67,80,70,0.16)] sm:p-10"
        >

          {/* =====================================
              ORNAMEN LINGKARAN
          ====================================== */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#d4bc8b]/10" />

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#d4bc8b]/10" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-[#d4bc8b]/10" />

          <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full border border-[#d4bc8b]/10" />

          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          {/* =====================================
              GARIS DEKORASI
          ====================================== */}
          <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#d4bc8b]" />

          {/* =====================================
              CONTENT
          ====================================== */}
          <div className="relative z-10">

            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4bc8b]/45 bg-[#d4bc8b]/10 shadow-[0_5px_25px_rgba(0,0,0,0.08)]">
              <MapPin
                className="text-[#e5ce99]"
                size={27}
                strokeWidth={1.5}
              />
            </div>

            {/* Label */}
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#d8bd82]">
              Tempat Acara
            </p>

            {/* Judul */}
            <h3 className="font-display mt-3 text-3xl text-[#f4dfb2] sm:text-4xl">
              Kediaman Keluarga
            </h3>

            {/* Divider */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#d4bc8b]/50" />

              <div className="h-1 w-1 rotate-45 bg-[#d4bc8b]" />

              <div className="h-px w-8 bg-[#d4bc8b]/50" />
            </div>

            {/* Alamat */}
            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Lrg. Kamboja RT.07/01,
              <br />
              Desa Mendalo Darat,
              <br />
              Jambi Luar Kota, Jambi 36361
            </p>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/nNGJCvWSxJ53KPPj8"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4bc8b] bg-[#d4bc8b] px-8 py-3.5 text-sm font-medium text-[#435046] shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-105 hover:bg-[#f4dfb2] hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <MapPin
                size={16}
                strokeWidth={1.8}
              />

              Buka Google Maps
            </a>

            {/* Keterangan */}
            <p className="mx-auto mt-6 max-w-md text-[11px] leading-6 text-white/40">
              Kami menantikan kehadiran dan doa terbaik
              Bapak/Ibu/Saudara/i untuk Alanza & Alana.
            </p>

          </div>
        </motion.div>

        {/* =========================================
            CATATAN
        ========================================== */}
        <motion.p
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
            delay: 0.3,
          }}
          className="mx-auto mt-8 max-w-xl text-center text-xs leading-7 text-gray-400"
        >
          Merupakan suatu kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan
          memberikan doa terbaik untuk Alanza dan Alana.
        </motion.p>

      </div>
    </section>
  );
}
