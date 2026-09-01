"use client";

import { useRef, useState } from "react";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import RSVP from "@/components/RSVP";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  /* =========================================
      BUKA UNDANGAN
  ========================================== */
  const openInvitation = async () => {
    setIsOpened(true);

    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Musik belum dapat diputar:", error);
      }
    }
  };

  /* =========================================
      TOGGLE MUSIK
  ========================================== */
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Musik tidak dapat diputar:", error);
      }
    }
  };

  /* =========================================
      SALIN NOMOR REKENING
  ========================================== */
  const copyAccountNumber = async (accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopiedAccount(accountNumber);

      setTimeout(() => {
        setCopiedAccount(null);
      }, 2000);
    } catch (error) {
      console.log("Nomor rekening gagal disalin:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#435046]">

      {/* =========================================
          AUDIO
      ========================================== */}
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/music/lagu-undangan.mp3"
          type="audio/mpeg"
        />
        Browser Anda tidak mendukung pemutar audio.
      </audio>


      {/* =========================================
          COVER / BUKA UNDANGAN
      ========================================== */}
      {!isOpened && (
        <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f1e8]">

          {/* =====================================
              BACKGROUND FOTO
              Foto menjadi elemen utama cover
          ====================================== */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/alanza-alana.jpg')",
            }}
          />

          {/* Overlay putih sangat tipis */}
          <div className="absolute inset-0 bg-white/10" />

          {/* Gradient sangat lembut */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#3e463f]/20" />


          {/* =====================================
              FRAME LUAR
          ====================================== */}
          <div className="absolute inset-4 rounded-[2rem] border border-white/70 shadow-[inset_0_0_70px_rgba(255,255,255,0.18)] sm:inset-7" />

          <div className="absolute inset-7 rounded-[1.5rem] border border-[#b99a62]/55 sm:inset-10" />


          {/* =====================================
              ORNAMEN LINGKARAN
          ====================================== */}
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />

          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/25" />

          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />


          {/* =====================================
              ORNAMEN SUDUT
          ====================================== */}
          <div className="absolute left-7 top-7 h-20 w-20 border-l border-t border-[#b99a62]/75" />

          <div className="absolute right-7 top-7 h-20 w-20 border-r border-t border-[#b99a62]/75" />

          <div className="absolute bottom-7 left-7 h-20 w-20 border-b border-l border-[#b99a62]/75" />

          <div className="absolute bottom-7 right-7 h-20 w-20 border-b border-r border-[#b99a62]/75" />


          {/* =====================================
              PANEL TEKS
              Transparan agar foto tetap terlihat
          ====================================== */}
          <div className="relative z-10 mx-6 max-w-md rounded-[2rem] border border-white/60 bg-[#fffdf8]/70 px-8 py-10 text-center shadow-[0_20px_70px_rgba(55,45,30,0.18)] backdrop-blur-[3px] sm:px-12 sm:py-12">

            {/* Bismillah */}
            <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#57574f] sm:text-[11px]">
              Bismillahirrahmanirrahim
            </p>

            <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />


            {/* Jenis acara */}
            <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-[#625f56] sm:text-sm">
              Tasyakuran Khitanan & Aqiqah
            </p>


            {/* Nama */}
            <h1 className="font-display mt-6 text-5xl leading-[1.02] text-[#35443a] drop-shadow-sm sm:text-6xl">
              Alanza
              <br />

              <span className="text-3xl font-light text-[#ad8848]">
                &
              </span>

              <br />

              Alana
            </h1>


            <div className="mx-auto mt-7 h-px w-12 bg-[#b99a62]" />


            {/* Tamu */}
            <p className="mt-7 text-sm leading-7 text-[#595951]">
              Kepada Yth.
              <br />

              <span className="font-medium text-[#45483f]">
                Bapak/Ibu/Saudara/i
              </span>
            </p>


            {/* Tombol buka */}
            <button
              onClick={openInvitation}
              className="mt-9 rounded-full border border-[#b99a62] bg-[#b99a62] px-10 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_8px_25px_rgba(100,80,45,0.25)] transition duration-300 hover:scale-105 hover:bg-[#a9874b]"
            >
              ✉ Buka Undangan
            </button>


            <p className="mt-5 text-[9px] uppercase tracking-[0.28em] text-[#716c61]">
              Ketuk untuk membuka undangan
            </p>

          </div>

        </div>
      )}


      {/* =========================================
          TOMBOL MUSIK
      ========================================== */}
      {isOpened && (
        <button
          onClick={toggleMusic}
          aria-label={
            isPlaying
              ? "Matikan musik"
              : "Putar musik"
          }
          className={`fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99a62]/40 bg-white text-lg text-[#8b7042] shadow-lg transition ${
            isPlaying ? "animate-spin" : ""
          }`}
        >
          {isPlaying ? "♫" : "🔇"}
        </button>
      )}


      {/* =========================================
          HERO
      ========================================== */}
      <Hero />


      {/* =========================================
          PEMBUKA
      ========================================== */}
      <section
        id="undangan"
        className="bg-white px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Bismillahirrahmanirrahim
          </p>

          <h2 className="font-display mt-5 text-4xl leading-tight text-[#4b594d] sm:text-5xl">
            Assalamu’alaikum
            <br />
            Warahmatullahi Wabarakatuh
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            Dengan memohon rahmat dan ridho Allah SWT, kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk
            menghadiri acara tasyakuran khitanan putra kami
            dan aqiqah putri kami.
          </p>


          {/* =====================================
              FOTO ANAK
          ====================================== */}
          <div className="mt-16 grid gap-14 md:grid-cols-2">

            {/* ALANZA */}
            <div className="group">

              <div className="relative mx-auto max-w-sm">

                <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b99a62]/20" />

                <div className="absolute -inset-7 rounded-[3rem] border border-[#b99a62]/10" />

                <div className="relative overflow-hidden rounded-[2rem] bg-[#faf8f3] p-2 shadow-2xl">

                  <img
                    src="/images/alanza.jpg"
                    alt="Saguna Alanza Rajulan"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

              </div>

              <p className="font-display mt-10 text-3xl font-semibold text-[#657567] sm:text-4xl">
                Saguna Alanza Rajulan
              </p>

              <div className="mx-auto mt-3 h-px w-10 bg-[#b99a62]" />

              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8b7957]">
                Putra Tercinta
              </p>

            </div>


            {/* ALANA */}
            <div className="group">

              <div className="relative mx-auto max-w-sm">

                <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b99a62]/20" />

                <div className="absolute -inset-7 rounded-[3rem] border border-[#b99a62]/10" />

                <div className="relative overflow-hidden rounded-[2rem] bg-[#faf8f3] p-2 shadow-2xl">

                  <img
                    src="/images/alana.jpg"
                    alt="Shaquena Alana Rajulan"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

              </div>

              <p className="font-display mt-10 text-3xl font-semibold text-[#657567] sm:text-4xl">
                Shaquena Alana Rajulan
              </p>

              <div className="mx-auto mt-3 h-px w-10 bg-[#b99a62]" />

              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8b7957]">
                Putri Tercinta
              </p>

            </div>

          </div>


          {/* =====================================
              ORANG TUA
          ====================================== */}
          <div className="mt-16">

            <p className="text-sm leading-8 text-gray-500 sm:text-base">
              Putra & Putri tercinta dari keluarga
              <br />

              <span className="font-medium text-gray-600">
                Bapak Bika Rajulan S.Kom
                <br className="sm:hidden" />
                {" & "}
                Ibu Sri Wahyuni S.Pd
              </span>
            </p>

          </div>

        </div>
      </section>


      {/* =========================================
          FOTO BERSAMA
      ========================================== */}
      <section className="bg-[#f7f3ea] px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Kebahagiaan Kami
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#4b594d] sm:text-5xl">
            Alanza & Alana
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-500">
            Dua buah hati tercinta yang menjadi anugerah
            dan kebahagiaan terindah bagi keluarga kami.
          </p>


          <div className="relative mx-auto mt-12 max-w-lg">

            <div className="absolute -inset-4 rounded-[2rem] border border-[#b99a62]/20" />

            <div className="absolute -inset-7 rounded-[2.5rem] border border-[#b99a62]/10" />

            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">

              <img
                src="/images/alanza-alana.jpg"
                alt="Foto Alanza dan Alana"
                className="w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          COUNTDOWN
      ========================================== */}
      <Countdown />


      {/* =========================================
          DETAIL ACARA
      ========================================== */}
      <EventDetail />


      {/* =========================================
          RSVP
      ========================================== */}
      <RSVP />


      {/* =========================================
          TITIP HADIAH
      ========================================== */}
      <section
        id="titip-hadiah"
        className="relative overflow-hidden bg-[#f7f3ea] px-6 py-24 sm:py-32"
      >

        {/* Ornamen lingkaran */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/10" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/5" />


        <div className="relative z-10 mx-auto max-w-2xl text-center">

          {/* Icon */}
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#b99a62]/40 bg-white text-2xl text-[#b08d4f] shadow-sm">
            ♡
          </div>


          <p className="text-xs uppercase tracking-[0.35em] text-[#8b7042]">
            Titip Hadiah
          </p>


          <h2 className="font-display mt-5 text-4xl text-[#4b594d] sm:text-5xl">
            Tanda Kasih
          </h2>


          <div className="mx-auto mt-6 h-px w-14 bg-[#b99a62]" />


          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-gray-500 sm:text-base">
            Doa dan kehadiran Bapak/Ibu/Saudara/i merupakan
            hadiah terindah bagi keluarga kami.
            <br />
            <br />
            Namun apabila berhalangan hadir dan ingin
            memberikan tanda kasih, kami dengan senang hati
            menerimanya melalui pilihan di bawah ini.
          </p>


          {/* =====================================
              TOMBOL LIHAT REKENING
          ====================================== */}
          {!showGift && (
            <button
              onClick={() => setShowGift(true)}
              className="mt-10 rounded-full border border-[#b99a62] bg-[#b99a62] px-9 py-3.5 text-sm font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#a9874b]"
            >
              💌 Lihat Rekening
            </button>
          )}


          {/* =====================================
              DAFTAR REKENING
          ====================================== */}
          {showGift && (
            <div className="mt-10 space-y-5 text-left">

              {/* BCA */}
              <div className="rounded-2xl border border-[#c8b27e]/30 bg-white p-6 shadow-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-[#9a7b43]">
                  Bank
                </p>

                <p className="mt-3 text-xl font-medium text-[#4b594d]">
                  BCA
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-wider text-[#8b7042]">
                  8190433472
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  a.n. Bika Rajulan
                </p>


                <button
                  onClick={() => copyAccountNumber("8190433472")}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a968] bg-[#faf6ec] px-5 py-2.5 text-xs font-medium text-[#8b7042] transition hover:bg-[#c8a968] hover:text-white"
                >
                  {copiedAccount === "8190433472"
                    ? "✓ Tersalin"
                    : "▣ Salin No. Rekening"}
                </button>

              </div>


              {/* MANDIRI */}
              <div className="rounded-2xl border border-[#c8b27e]/30 bg-white p-6 shadow-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-[#9a7b43]">
                  Bank
                </p>

                <p className="mt-3 text-xl font-medium text-[#4b594d]">
                  Mandiri
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-wider text-[#8b7042]">
                  1100020863095
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  a.n. Bika Rajulan
                </p>


                <button
                  onClick={() => copyAccountNumber("1100020863095")}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a968] bg-[#faf6ec] px-5 py-2.5 text-xs font-medium text-[#8b7042] transition hover:bg-[#c8a968] hover:text-white"
                >
                  {copiedAccount === "1100020863095"
                    ? "✓ Tersalin"
                    : "▣ Salin No. Rekening"}
                </button>

              </div>


              {/* Pesan */}
              <p className="pt-4 text-center text-xs leading-7 text-gray-500">
                Terima kasih atas perhatian, doa, dan
                tanda kasih yang diberikan untuk
                kebahagiaan Alanza & Alana.
              </p>

            </div>
          )}

        </div>

      </section>


      {/* =========================================
          PENUTUP
      ========================================== */}
      <section className="bg-white px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto mb-8 h-px w-16 bg-[#b99a62]" />


          <p className="font-display text-3xl leading-relaxed text-[#4b594d] sm:text-4xl">
            “Semoga menjadi anak yang sholeh dan sholehah,
            berbakti kepada orang tua, serta menjadi
            kebanggaan keluarga.”
          </p>


          <p className="mt-8 text-sm leading-8 text-gray-500">
            Merupakan suatu kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
            doa terbaik untuk Alanza dan Alana.
          </p>


          <p className="mt-8 text-sm text-gray-400">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================== */}
      <footer className="bg-[#435046] px-6 py-16 text-center text-white">

        <p className="text-xs uppercase tracking-[0.3em] text-[#e2cc98]">
          Tasyakuran Khitanan & Aqiqah
        </p>


        <h2 className="font-display mt-4 text-4xl text-[#f4dfb2]">
          Alanza & Alana
        </h2>


        <p className="mx-auto mt-5 max-w-md text-xs leading-7 text-white/60">
          Terima kasih atas doa, perhatian, dan kehadiran
          Bapak/Ibu/Saudara/i.
        </p>


        <div className="mx-auto mt-8 h-px w-10 bg-[#d4bc8b]/70" />


        <p className="mt-6 text-[10px] tracking-[0.25em] text-white/40">
          WITH LOVE FROM OUR FAMILY
        </p>

      </footer>

    </main>
  );
}
