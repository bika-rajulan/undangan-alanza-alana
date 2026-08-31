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

  return (
    <main className="min-h-screen bg-[#f8f5ee]">

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
        <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#26332b] px-6">

          {/* Ornamen lingkaran */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/20" />

          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/20" />

          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a62]/10" />


          {/* Isi cover */}
          <div className="relative z-10 max-w-md text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-[#d4bc8b]">
              Bismillahirrahmanirrahim
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-[#b99a62]" />

            <p className="mt-8 text-sm tracking-wide text-white/60">
              Tasyakuran Khitanan & Cukuran
            </p>

            <h1 className="font-display mt-5 text-5xl leading-tight text-[#f4dfb2] sm:text-6xl">
              Alanza
              <br />
              <span className="text-3xl text-[#b99a62]">
                &
              </span>
              <br />
              Alana
            </h1>

            <p className="mt-8 text-sm leading-7 text-white/60">
              Kepada Yth.
              <br />
              Bapak/Ibu/Saudara/i
            </p>

            <button
              onClick={openInvitation}
              className="mt-10 rounded-full border border-[#d4bc8b] bg-[#d4bc8b] px-9 py-3.5 text-sm font-medium tracking-wide text-[#26332b] shadow-xl transition duration-300 hover:scale-105 hover:bg-[#f4dfb2]"
            >
              ✉ Buka Undangan
            </button>

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/30">
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
          className={`fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#b99a62]/40 bg-[#26332b] text-lg text-[#f4dfb2] shadow-lg transition ${
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

          <h2 className="font-display mt-5 text-4xl leading-tight text-[#26332b] sm:text-5xl">
            Assalamu’alaikum
            <br />
            Warahmatullahi Wabarakatuh
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            Dengan memohon rahmat dan ridho Allah SWT, kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk
            menghadiri acara tasyakuran khitanan putra kami
            dan cukuran putri kami.
          </p>


          {/* =======================================
              FOTO ALANZA & ALANA
          ======================================== */}
          <div className="mt-16 grid gap-14 md:grid-cols-2">

            {/* ALANZA */}
            <div className="group">

              <div className="relative mx-auto max-w-sm">

                <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b99a62]/20" />

                <div className="absolute -inset-7 rounded-[3rem] border border-[#b99a62]/10" />

                <div className="relative overflow-hidden rounded-[2rem] bg-[#f8f5ee] p-2 shadow-2xl">

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

                <div className="relative overflow-hidden rounded-[2rem] bg-[#f8f5ee] p-2 shadow-2xl">

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


          {/* =======================================
              ORANG TUA
          ======================================== */}
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
          FOTO ALANZA & ALANA BERSAMA
      ========================================== */}
      <section className="bg-[#f8f5ee] px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Kebahagiaan Kami
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#26332b] sm:text-5xl">
            Alanza & Alana
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-500">
            Dua buah hati tercinta yang menjadi anugerah
            dan kebahagiaan terindah bagi keluarga kami.
          </p>


          {/* Foto bersama */}
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
          PENUTUP
      ========================================== */}
      <section className="bg-white px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto mb-8 h-px w-16 bg-[#b99a62]" />

          <p className="font-display text-3xl leading-relaxed text-[#26332b] sm:text-4xl">
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
      <footer className="bg-[#26332b] px-6 py-16 text-center text-white">

        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bc8b]">
          Tasyakuran Khitanan & Cukuran
        </p>

        <h2 className="font-display mt-4 text-4xl text-[#f4dfb2]">
          Alanza & Alana
        </h2>

        <p className="mx-auto mt-5 max-w-md text-xs leading-7 text-white/50">
          Terima kasih atas doa, perhatian, dan kehadiran
          Bapak/Ibu/Saudara/i.
        </p>

        <div className="mx-auto mt-8 h-px w-10 bg-[#b99a62]/60" />

        <p className="mt-6 text-[10px] tracking-[0.25em] text-white/30">
          WITH LOVE FROM OUR FAMILY
        </p>

      </footer>

    </main>
  );
}
