"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="bg-[#f8f5ee] px-6 py-24">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Konfirmasi Kehadiran
          </p>
          
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Kehadiran dan doa terbaik Anda menjadi kebahagiaan
            bagi keluarga kami.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8"
        >
          <label className="text-sm font-medium text-gray-700">
            Nama
          </label>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 outline-none transition focus:border-[#657567]"
          />

          <label className="mt-6 block text-sm font-medium text-gray-700">
            Konfirmasi Kehadiran
          </label>

          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 outline-none focus:border-[#657567]"
          >
            <option>Hadir</option>
            <option>Tidak dapat hadir</option>
            <option>Masih belum pasti</option>
          </select>

          <label className="mt-6 block text-sm font-medium text-gray-700">
            Ucapan & Doa
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan dan doa..."
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 outline-none focus:border-[#657567]"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#26332b] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#657567]"
          >
            Kirim Konfirmasi
          </button>

          {submitted && (
            <div className="mt-5 rounded-2xl bg-green-50 p-4 text-center text-sm text-green-700">
              Terima kasih, {name}. Konfirmasi Anda sudah diterima.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
