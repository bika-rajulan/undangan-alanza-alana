"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");

  // GANTI dengan nomor WhatsApp penerima RSVP
  // Format: 628xxx, tanpa +, spasi, atau tanda -
  const whatsappNumber = "6285208282877";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Silakan isi nama terlebih dahulu.");
      return;
    }

    const whatsappMessage = `
Assalamu'alaikum Warahmatullahi Wabarakatuh

Saya ingin mengonfirmasi kehadiran untuk acara:

*Tasyakuran Khitanan Alanza & Aqiqah Alana*

Nama: ${name}
Kehadiran: ${attendance}

Ucapan & Doa:
${message || "-"}

Terima kasih.
Wassalamu'alaikum Warahmatullahi Wabarakatuh
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="rsvp"
      className="bg-[#f8f5ee] px-6 py-24"
    >
      <div className="mx-auto max-w-xl">

        {/* Judul */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Konfirmasi Kehadiran
          </p>

          
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Mohon konfirmasi kehadiran Anda agar kami dapat
            mempersiapkan acara dengan sebaik-baiknya.
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8"
        >

          {/* Nama */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              Nama
            </label>

            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-[#657567] focus:ring-2 focus:ring-[#657567]/10"
            />
          </div>

          {/* Kehadiran */}
          <div className="mt-6">
            <label
              htmlFor="attendance"
              className="text-sm font-medium text-gray-700"
            >
              Konfirmasi Kehadiran
            </label>

            <select
              id="attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-[#657567] focus:ring-2 focus:ring-[#657567]/10"
            >
              <option value="Hadir">
                InsyaAllah, saya akan hadir
              </option>

              <option value="Tidak dapat hadir">
                Mohon maaf, saya tidak dapat hadir
              </option>

              <option value="Masih belum pasti">
                Masih belum dapat memastikan
              </option>
            </select>
          </div>

          {/* Ucapan */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Ucapan & Doa
            </label>

            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa untuk Alanza & Alana..."
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm outline-none transition focus:border-[#657567] focus:ring-2 focus:ring-[#657567]/10"
            />
          </div>

          {/* Tombol */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#26332b] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#657567] active:scale-[0.98]"
          >
            <span>💬</span>
            Kirim Konfirmasi via WhatsApp
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-gray-400">
            Setelah menekan tombol, Anda akan diarahkan ke
            WhatsApp untuk mengirim konfirmasi.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
