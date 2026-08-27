"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function EventDetail() {
  return (
    <section
      id="acara"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Detail Acara
          </p>

          <h2 className="font-display mt-3 text-5xl text-[#26332b]">
            InsyaAllah Berkesan
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "Tanggal",
              text: "Sabtu, 10 Oktober 2026",
            },
            {
              icon: Clock,
              title: "Waktu",
              text: "10.00 WIB – selesai",
            },
            {
              icon: MapPin,
              title: "Lokasi",
              text: "Kediaman Keluarga",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-[#e5dfd2] bg-[#f8f5ee] p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#657567] text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-[#26332b] p-8 text-center text-white">
          <MapPin className="mx-auto text-[#d4bc8b]" size={28} />

          <h3 className="font-display mt-4 text-3xl">
            Kediaman Keluarga
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/60">
            Jl. Contoh Alamat No. 123, Kota Anda,
            Indonesia
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-[#d4bc8b] px-7 py-3 text-sm font-medium text-[#26332b] transition hover:bg-white"
          >
            Buka Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
