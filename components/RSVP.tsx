"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");

  // Nomor WhatsApp penerima RSVP
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

Terima kasih atas perhatiannya.

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
      className="relative overflow-hidden bg-[#faf8f3] px-6 py-24 sm:py-28"
    >

      {/* =========================================
          ORNAMEN BACKGROUND
      ========================================== */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#b99a62]/10" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-[#b99a62]/10" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/5" />


      <div className="relative z-10 mx-auto max-w-xl">

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
          className="text-center"
        >

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#927744]">
            Konfirmasi Kehadiran
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#4b594d] sm:text-5xl">
            Kehadiran Anda
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#b99a62]" />

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-500">
            Kehadiran dan doa Bapak/Ibu/Saudara/i merupakan
            kebahagiaan yang sangat berarti bagi keluarga kami.
          </p>

        </motion.div>


        {/* =========================================
            FORM
        ========================================== */}
        <motion.form
          onSubmit={handleSubmit}
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
            delay: 0.15,
          }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#e5dfd2] bg-white p-6 shadow-[0_15px_50px_rgba(80,65,40,0.08)] sm:p-9"
        >

          {/* Garis dekorasi atas */}
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-full bg-[#b99a62]" />


          {/* =====================================
              NAMA
          ====================================== */}
          <div>

            <label
              htmlFor="name"
              className="text-sm font-medium text-[#4b594d]"
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
              className="mt-2 w-full rounded-2xl border border-[#e4ded2] bg-[#faf8f3] px-4 py-3.5 text-sm text-[#435046] placeholder:text-gray-400 outline-none transition duration-300 focus:border-[#b99a62] focus:bg-white focus:ring-4 focus:ring-[#b99a62]/10"
            />

          </div>


          {/* =====================================
              KEHADIRAN
          ====================================== */}
          <div className="mt-6">

            <label
              htmlFor="attendance"
              className="text-sm font-medium text-[#4b594d]"
            >
              Konfirmasi Kehadiran
            </label>

            <select
              id="attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="mt-2 w-full appearance-none rounded-2xl border border-[#e4ded2] bg-[#faf8f3] px-4 py-3.5 text-sm text-[#435046] outline-none transition duration-300 focus:border-[#b99a62] focus:bg-white focus:ring-4 focus:ring-[#b99a62]/10"
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


          {/* =====================================
              UCAPAN & DOA
          ====================================== */}
          <div className="mt-6">

            <label
              htmlFor="message"
              className="text-sm font-medium text-[#4b594d]"
            >
              Ucapan & Doa
            </label>

            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa untuk Alanza & Alana..."
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-[#e4ded2] bg-[#faf8f3] px-4 py-3.5 text-sm leading-7 text-[#435046] placeholder:text-gray-400 outline-none transition duration-300 focus:border-[#b99a62] focus:bg-white focus:ring-4 focus:ring-[#b99a62]/10"
            />

          </div>


          {/* =====================================
              TOMBOL WHATSAPP
          ====================================== */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full border border-[#435046] bg-[#435046] px-6 py-4 text-sm font-medium text-white shadow-[0_8px_25px_rgba(67,80,70,0.18)] transition duration-300 hover:bg-[#536256]"
          >

            <MessageCircle
              size={18}
              strokeWidth={1.8}
            />

            Kirim Konfirmasi via WhatsApp

          </motion.button>


          {/* =====================================
              KETERANGAN
          ====================================== */}
          <p className="mt-5 text-center text-xs leading-6 text-gray-400">
            Setelah menekan tombol, Anda akan diarahkan
            ke WhatsApp untuk mengirim konfirmasi.
          </p>

        </motion.form>


        {/* =========================================
            FOOTNOTE
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
            delay: 0.3,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-400"
        >

          <Check
            size={14}
            className="text-[#b99a62]"
          />

          <span>
            Terima kasih atas perhatian dan doa terbaik Anda.
          </span>

        </motion.div>

      </div>

    </section>
  );
}