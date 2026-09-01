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

      {/* AUDIO */}
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
  <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#26332b]">

    {/* =====================================
        FOTO COVER
        Foto dibuat dominan dan jelas
    ====================================== */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/alanza-alana.jpg')",
      }}
    />

    {/* =====================================
        OVERLAY SANGAT TIPIS
        Hanya sedikit membantu kontras
    ====================================== */}
    <div className="absolute inset-0 bg-black/10" />

    {/* =====================================
        GRADIENT TEKS
        Tidak membentuk panel
    ====================================== */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />


    {/* =====================================
        FRAME LUAR
    ====================================== */}
    <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#f4dfb2]/55 sm:inset-7" />

    <div className="pointer-events-none absolute inset-7 rounded-[1.5rem] border border-[#d4bc8b]/40 sm:inset-10" />


    {/* =====================================
        ORNAMEN LINGKARAN
    ====================================== */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f4dfb2]/15" />

    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4bc8b]/15" />


    {/* =====================================
        ORNAMEN SUDUT
    ====================================== */}
    <div className="pointer-events-none absolute left-7 top-7 h-20 w-20 border-l border-t border-[#d4bc8b]/65" />

    <div className="pointer-events-none absolute right-7 top-7 h-20 w-20 border-r border-t border-[#d4bc8b]/65" />

    <div className="pointer-events-none absolute bottom-7 left-7 h-20 w-20 border-b border-l border-[#d4bc8b]/65" />

    <div className="pointer-events-none absolute bottom-7 right-7 h-20 w-20 border-b border-r border-[#d4bc8b]/65" />


    {/* =====================================
        KONTEN LANGSUNG DI ATAS FOTO
        TANPA PANEL
    ====================================== */}
    <div className="relative z-10 mx-6 w-full max-w-md px-4 py-10 text-center">

      {/* Bismillah */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#fff4d6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[11px]">
        Bismillahirrahmanirrahim
      </p>


      {/* Divider */}
      <div className="mx-auto mt-6 h-px w-16 bg-[#f4dfb2] shadow-[0_1px_6px_rgba(0,0,0,0.8)]" />


      {/* Jenis acara */}
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#fff8e9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm">
        Tasyakuran Khitanan
        <span className="mx-2 text-[#f4dfb2]">
          &
        </span>
        Aqiqah
      </p>


      {/* Nama */}
      <h1 className="font-display mt-6 text-6xl leading-[0.95] text-[#fff8e9] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] sm:text-8xl">

        <span className="block">
          Alanza
        </span>

        <span className="my-4 block text-3xl font-light text-[#f4dfb2] drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] sm:my-5 sm:text-4xl">
          &
        </span>

        <span className="block">
          Alana
        </span>

      </h1>


      {/* Divider */}
      <div className="mx-auto mt-8 h-px w-14 bg-[#f4dfb2] shadow-[0_1px_7px_rgba(0,0,0,0.8)]" />


      {/* Tamu */}
      <p className="mt-7 text-sm font-medium leading-7 text-[#fff8e9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        Kepada Yth.
        <br />

        <span className="font-semibold text-white">
          Bapak/Ibu/Saudara/i
        </span>
      </p>


      {/* Tombol */}
      <button
        onClick={openInvitation}
        className="mt-9 rounded-full border border-[#f4dfb2] bg-[#d4bc8b]/95 px-10 py-3.5 text-sm font-semibold tracking-wide text-[#26332b] shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition duration-300 hover:scale-105 hover:bg-[#f4dfb2] active:scale-95"
      >
        ✉ Buka Undangan
      </button>


      {/* Petunjuk */}
      <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.28em] text-white/85 drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]">
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
          aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
          className={`fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99a62]/40 bg-[#435046] text-lg text-[#f4dfb2] shadow-lg transition ${
            isPlaying ? "animate-spin" : ""
          }`}
        >
          {isPlaying ? "♫" : "🔇"}
        </button>
      )}

      {/* HERO */}
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

          {/* FOTO ANAK */}
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

          {/* ORANG TUA */}
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

      {/* COUNTDOWN */}
      <Countdown />

      {/* DETAIL ACARA */}
      <EventDetail />

      {/* RSVP */}
      <RSVP />

      {/* =========================================
          TITIP HADIAH
      ========================================== */}
      <section
        id="titip-hadiah"
        className="relative overflow-hidden bg-[#f7f3ea] px-6 py-24 sm:py-32"
      >

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/10" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/5" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">

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

          {!showGift && (
            <button
              onClick={() => setShowGift(true)}
              className="mt-10 rounded-full border border-[#b99a62] bg-[#b99a62] px-9 py-3.5 text-sm font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#a9874b]"
            >
              💌 Lihat Rekening
            </button>
          )}

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
      <footer className="relative overflow-hidden bg-[#36443b] px-6 py-20 text-center text-white">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#d4bc8b]/10" />

        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-[#d4bc8b]/10" />

        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4bc8b] to-transparent" />

        <div className="relative z-10 mx-auto max-w-xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d8bd82] sm:text-xs">
            Tasyakuran Khitanan & Aqiqah
          </p>

          <h2 className="font-display mt-5 text-4xl text-[#f3dfb1] sm:text-5xl">
            Alanza & Alana
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">

            <div className="h-px w-8 bg-[#d4bc8b]/40" />

            <div className="h-1 w-1 rotate-45 bg-[#d4bc8b]" />

            <div className="h-px w-8 bg-[#d4bc8b]/40" />

          </div>

          <p className="mx-auto mt-7 max-w-md text-xs leading-7 text-white/60 sm:text-sm">
            Terima kasih atas doa, perhatian, kasih sayang,
            dan kehadiran Bapak/Ibu/Saudara/i yang turut
            menjadi bagian dari kebahagiaan keluarga kami.
          </p>

          <div className="mx-auto mt-9 flex items-center justify-center">

            <span className="h-px w-12 bg-[#d4bc8b]/30" />

            <span className="mx-3 text-sm text-[#d4bc8b]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#d4bc8b]/30" />

          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-white/35">
            With Love From Our Family
          </p>

        </div>

      </footer>

    </main>
  );
}
