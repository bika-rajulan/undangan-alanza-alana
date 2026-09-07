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

  // Titip hadiah
  const [showGift, setShowGift] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // Papan ucapan
  const [showWishForm, setShowWishForm] = useState(false);
  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");
  const [wishDraft, setWishDraft] = useState("");
  const [selectedWish, setSelectedWish] = useState("");

  // Kirim kado
  const [showGiftForm, setShowGiftForm] = useState(false);
  const [giftName, setGiftName] = useState("");
  const [giftMessage, setGiftMessage] = useState("");
  const [giftDraft, setGiftDraft] = useState("");

  // Status copy
  const [copiedDraft, setCopiedDraft] = useState<
    "wish" | "gift" | null
  >(null);

  /*
   * =========================================
   * DATA ALAMAT ACARA
   * =========================================
   *
   * GANTI DATA DI BAWAH INI DENGAN ALAMAT ACARA.
   */

  const eventAddress = `Lrg. Kamboja RT.07/01, Desa Mendalo Darat, Jaluko, Jambi 36361`;
  const eventMapLink = "https://maps.app.goo.gl/nNGJCvWSxJ53KPPj8";

  /*
   * =========================================
   * CONTOH UCAPAN PAPAN
   * =========================================
   */

  const wishTemplates = [
    {
      title: "Formal",
      text: "Selamat atas tasyakuran khitanan Alanza dan aqiqah Alana. Semoga menjadi anak yang sholeh dan sholehah, sehat, serta menjadi kebanggaan keluarga. Aamiin.",
    },
    {
      title: "Hangat",
      text: "Selamat untuk Alanza & Alana! Semoga tumbuh menjadi anak yang sholeh dan sholehah, sehat, bahagia, dan selalu dalam lindungan Allah SWT.",
    },
    {
      title: "Singkat",
      text: "Barakallah untuk Alanza & Alana. Semoga menjadi anak yang sholeh dan sholehah serta selalu membawa kebahagiaan bagi keluarga.",
    },
    {
      title: "Keluarga",
      text: "Selamat untuk Alanza & Alana. Semoga tumbuh sehat, penuh keberkahan, dan menjadi anak yang sholeh dan sholehah. Aamiin.",
    },
  ];

  /*
   * =========================================
   * BUKA UNDANGAN
   * =========================================
   */

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

  /*
   * =========================================
   * TOGGLE MUSIC
   * =========================================
   */

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

  /*
   * =========================================
   * COPY NOMOR REKENING
   * =========================================
   */

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

  /*
   * =========================================
   * BUAT DRAF PAPAN UCAPAN
   * =========================================
   */

  const createWishDraft = () => {
    if (!wishName.trim() || !wishMessage.trim()) {
      alert("Mohon isi nama dan ucapan terlebih dahulu.");
      return;
    }

    const draft = `Halo, saya ingin memesan papan ucapan untuk acara:

Tasyakuran Khitanan & Aqiqah
Alanza & Alana
11 Oktober 2026

Nama Pemesan:
${wishName}

Isi Ucapan:
${wishMessage}

Alamat Pemasangan:
${eventAddress}

Google Maps Lokasi Pemasangan:
${eventMapLink}

Mohon papan ucapan dipasang di lokasi acara tersebut.

Mohon informasi mengenai ukuran, desain, harga, dan proses pemesanannya.

Terima kasih.`;

    setWishDraft(draft);
  };

  /*
   * =========================================
   * BUAT DRAF KIRIM KADO
   * =========================================
   */

  const createGiftDraft = () => {
    if (!giftName.trim()) {
      alert("Mohon isi nama terlebih dahulu.");
      return;
    }

    const draft = `Halo, saya ingin mengirimkan kado untuk acara:

Tasyakuran Khitanan & Aqiqah
Alanza & Alana
11 Oktober 2026

Nama Pengirim:
${giftName}

Alamat Pengiriman:
${eventAddress}

Google Maps Pengiriman:
${eventMapLink}

Pesan:
${giftMessage || "-"}

Mohon kado dapat dikirimkan ke alamat tersebut.

Terima kasih.`;

    setGiftDraft(draft);
  };

  /*
   * =========================================
   * COPY DRAF
   * =========================================
   */

  const copyDraft = async (
    draft: string,
    type: "wish" | "gift",
  ) => {
    try {
      await navigator.clipboard.writeText(draft);

      setCopiedDraft(type);

      setTimeout(() => {
        setCopiedDraft(null);
      }, 2000);
    } catch (error) {
      console.log("Draf gagal disalin:", error);
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
        <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#26332b]">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/alanza-alana.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

          <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#f4dfb2]/55 sm:inset-7" />

          <div className="pointer-events-none absolute inset-7 rounded-[1.5rem] border border-[#d4bc8b]/40 sm:inset-10" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f4dfb2]/15" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4bc8b]/15" />

          <div className="pointer-events-none absolute left-7 top-7 h-20 w-20 border-l border-t border-[#d4bc8b]/65" />

          <div className="pointer-events-none absolute right-7 top-7 h-20 w-20 border-r border-t border-[#d4bc8b]/65" />

          <div className="pointer-events-none absolute bottom-7 left-7 h-20 w-20 border-b border-l border-[#d4bc8b]/65" />

          <div className="pointer-events-none absolute bottom-7 right-7 h-20 w-20 border-b border-r border-[#d4bc8b]/65" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 pt-32 text-center">

            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-t from-[#26332b]/65 via-[#26332b]/25 to-transparent" />

            <div className="mx-auto max-w-md">

              <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#f4dfb2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[10px]">
                Bismillahirrahmanirrahim
              </p>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] sm:text-xs">
                Tasyakuran Khitanan & Aqiqah
              </p>

              <h1 className="font-display mt-3 whitespace-nowrap text-[2.4rem] leading-none text-[#fff8e9] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] sm:mt-2 sm:text-6xl">
                Alanza
                <span className="mx-2 font-light text-[#f4dfb2]">
                  &
                </span>
                Alana
              </h1>

              <p className="mt-2 text-[9px] font-medium tracking-[0.15em] text-[#f4dfb2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:mt-2 sm:text-xs">
                11 OKTOBER 2026
              </p>

              <button
                onClick={openInvitation}
                className="mt-4 rounded-full border border-[#f4dfb2] bg-[#d4bc8b]/95 px-8 py-2.5 text-[10px] font-semibold tracking-wide text-[#26332b] shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition duration-300 hover:scale-105 hover:bg-[#f4dfb2] active:scale-95 sm:mt-4 sm:px-10 sm:py-3 sm:text-sm"
              >
                Buka Undangan
              </button>

            </div>
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
            isPlaying ? "Matikan musik" : "Putar musik"
          }
          className={`fixed left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4bc8b]/60 bg-[#5a5145]/95 text-lg text-[#f4dfb2] shadow-[0_8px_25px_rgba(80,65,40,0.25)] backdrop-blur-sm transition duration-300 hover:border-[#f4dfb2] hover:bg-[#d4bc8b] hover:text-[#4b4032] ${isPlaying ? "animate-spin" : ""
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


          {/* =========================================
              3 TOMBOL
          ========================================== */}

          <div className="mx-auto mt-10 grid max-w-lg gap-3 sm:grid-cols-3">

            {/* LIHAT / TUTUP REKENING */}

            <button
              onClick={() => setShowGift(!showGift)}
              className={`group flex min-h-[58px] items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs font-medium transition duration-300 active:scale-95 ${showGift
                ? "border-[#8b7042] bg-[#8b7042] text-white shadow-lg"
                : "border-[#b99a62]/50 bg-white text-[#8b7042] shadow-sm hover:border-[#b99a62] hover:bg-[#faf6ec] hover:shadow-md"
                }`}
            >
              <span className="text-base">
                {showGift ? "⌃" : "▣"}
              </span>

              <span>
                {showGift
                  ? "Tutup Rekening"
                  : "Lihat Rekening"}
              </span>
            </button>


            {/* PAPAN UCAPAN */}

            <button
              onClick={() => {
                setShowWishForm(true);
                setShowGiftForm(false);
                setWishDraft("");
              }}
              className="group flex min-h-[58px] items-center justify-center gap-2 rounded-2xl border border-[#b99a62]/50 bg-white px-4 py-3 text-xs font-medium text-[#8b7042] shadow-sm transition duration-300 hover:border-[#b99a62] hover:bg-[#faf6ec] hover:shadow-md active:scale-95"
            >
              <span className="text-base transition-transform duration-300 group-hover:-translate-y-0.5">
                ♡
              </span>

              <span>
                Papan Ucapan
              </span>
            </button>


            {/* KIRIM KADO */}

            <button
              onClick={() => {
                setShowGiftForm(true);
                setShowWishForm(false);
                setGiftDraft("");
              }}
              className="group flex min-h-[58px] items-center justify-center gap-2 rounded-2xl border border-[#b99a62]/50 bg-white px-4 py-3 text-xs font-medium text-[#8b7042] shadow-sm transition duration-300 hover:border-[#b99a62] hover:bg-[#faf6ec] hover:shadow-md active:scale-95"
            >
              <span className="text-base transition-transform duration-300 group-hover:-translate-y-0.5">
                ♢
              </span>

              <span>
                Kirim Kado
              </span>
            </button>

          </div>


          {/* =========================================
              REKENING
          ========================================== */}

          {showGift && (
            <div className="mt-8 space-y-5 text-left">

              {/* BCA */}

              <div className="rounded-2xl border border-[#c8b27e]/30 bg-white p-6 shadow-xl">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a7b43]">
                      Bank
                    </p>

                    <p className="mt-2 text-xl font-medium text-[#4b594d]">
                      BCA
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ec] text-[10px] font-bold text-[#8b7042]">
                    BCA
                  </div>

                </div>

                <p className="mt-5 text-2xl font-semibold tracking-wider text-[#8b7042]">
                  8190433472
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  a.n. Bika Rajulan
                </p>

                <button
                  onClick={() =>
                    copyAccountNumber("8190433472")
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a968] bg-[#faf6ec] px-5 py-2.5 text-xs font-medium text-[#8b7042] transition hover:bg-[#c8a968] hover:text-white"
                >
                  {copiedAccount === "8190433472"
                    ? "✓ Tersalin"
                    : "▣ Salin No. Rekening"}
                </button>

              </div>


              {/* MANDIRI */}

              <div className="rounded-2xl border border-[#c8b27e]/30 bg-white p-6 shadow-xl">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a7b43]">
                      Bank
                    </p>

                    <p className="mt-2 text-xl font-medium text-[#4b594d]">
                      Mandiri
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#faf6ec] text-[8px] font-bold text-[#8b7042]">
                    MANDIRI
                  </div>

                </div>

                <p className="mt-5 text-2xl font-semibold tracking-wider text-[#8b7042]">
                  1100020863095
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  a.n. Bika Rajulan
                </p>

                <button
                  onClick={() =>
                    copyAccountNumber("1100020863095")
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a968] bg-[#faf6ec] px-5 py-2.5 text-xs font-medium text-[#8b7042] transition hover:bg-[#c8a968] hover:text-white"
                >
                  {copiedAccount === "1100020863095"
                    ? "✓ Tersalin"
                    : "▣ Salin No. Rekening"}
                </button>

              </div>


              <p className="pt-2 text-center text-xs leading-7 text-gray-500">
                Terima kasih atas perhatian, doa, dan
                tanda kasih yang diberikan untuk
                kebahagiaan Alanza & Alana.
              </p>

            </div>
          )}


          {/* =========================================
              MODAL PAPAN UCAPAN
          ========================================== */}

          {showWishForm && (
            <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/50 px-5 py-8 backdrop-blur-sm">

              <div className="relative w-full max-w-md rounded-3xl bg-[#fffdf8] p-7 text-left shadow-2xl">


                {!wishDraft ? (
                  <>
                    <div className="text-center">

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b99a62]/30 bg-[#faf6ec] text-2xl">
                        ♡
                      </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#8b7042]">
                        Papan Ucapan
                      </p>

                      <h3 className="font-display mt-3 text-3xl text-[#4b594d]">
                        Buat Draf Ucapan
                      </h3>

                      <div className="mx-auto mt-4 h-px w-12 bg-[#b99a62]" />

                      <p className="mt-5 text-xs leading-6 text-gray-500">
                        Pilih contoh ucapan atau tuliskan
                        ucapan Anda sendiri. Setelah itu,
                        salin draf dan kirimkan kepada
                        penyedia papan ucapan pilihan Anda.
                      </p>

                    </div>


                    <div className="mt-7 space-y-5">

                      {/* PILIHAN UCAPAN */}
                      <div>
                        <label className="mb-3 block text-xs font-medium text-[#6f755f]">
                          Pilih Contoh Ucapan
                        </label>

                        <div className="grid grid-cols-2 gap-2">

                          {wishTemplates.map((template) => (
                            <button
                              key={template.title}
                              type="button"
                              onClick={() => {
                                setSelectedWish(template.title);
                                setWishMessage(template.text);
                              }}
                              className={`rounded-xl border px-4 py-3 text-xs font-medium transition duration-300 active:scale-95 ${selectedWish === template.title
                                ? "border-[#b99a62] bg-[#b99a62] text-white shadow-md"
                                : "border-[#d8c9a8] bg-white text-[#8b7042] hover:border-[#b99a62] hover:bg-[#faf6ec]"
                                }`}
                            >
                              {template.title}
                            </button>
                          ))}

                        </div>
                      </div>


                      {/* NAMA */}

                      <div>

                        <label className="mb-2 block text-xs font-medium text-[#6f755f]">
                          Nama Pemesan
                        </label>

                        <input
                          type="text"
                          value={wishName}
                          onChange={(e) =>
                            setWishName(e.target.value)
                          }
                          placeholder="Nama Anda"
                          className="w-full rounded-xl border border-[#d8c9a8] bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#b99a62] focus:ring-2 focus:ring-[#b99a62]/20"
                        />

                      </div>


                      {/* UCAPAN */}

                      <div>

                        <label className="mb-2 block text-xs font-medium text-[#6f755f]">
                          Isi Ucapan
                        </label>

                        <textarea
                          value={wishMessage}
                          onChange={(e) => {
                            setWishMessage(
                              e.target.value,
                            );

                            setSelectedWish("");
                          }}
                          placeholder="Tuliskan ucapan dan doa..."
                          rows={5}
                          className="w-full resize-none rounded-xl border border-[#d8c9a8] bg-white px-4 py-3 text-sm leading-6 text-gray-700 outline-none transition focus:border-[#b99a62] focus:ring-2 focus:ring-[#b99a62]/20"
                        />

                      </div>

                      {/* LOKASI PEMASANGAN PAPAN UCAPAN */}

                      <div className="rounded-2xl border border-[#d8c9a8] bg-[#faf8f3] p-4">

                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a7b43]">
                          Lokasi Pemasangan
                        </p>

                        <p className="mt-2 whitespace-pre-line text-xs leading-6 text-gray-600">
                          {eventAddress}
                        </p>

                        <a
                          href={eventMapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#8b7042] underline underline-offset-4"
                        >
                          📍 Lihat Lokasi di Google Maps
                        </a>

                      </div>

                      <button
                        onClick={createWishDraft}
                        className="w-full rounded-full bg-[#b99a62] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#a9874b] active:scale-95"
                      >
                        📝 Buat Draf Pesanan
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowWishForm(false);
                          setWishDraft("");
                          setWishName("");
                          setWishMessage("");
                          setSelectedWish("");
                        }}
                        className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-medium text-gray-500 transition hover:bg-gray-50 hover:text-[#8b7042] active:scale-95"
                      >
                        ✕ Tutup
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#faf6ec] text-2xl">
                        ✓
                      </div>

                      <h3 className="font-display mt-4 text-3xl text-[#4b594d]">
                        Draf Siap
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-gray-500">
                        Salin draf berikut kemudian
                        kirimkan kepada penyedia papan
                        ucapan pilihan Anda.
                      </p>

                    </div>


                    <div className="mt-6 max-h-[45vh] overflow-y-auto rounded-2xl border border-[#d8c9a8] bg-[#faf8f3] p-5">

                      <pre className="whitespace-pre-wrap font-sans text-xs leading-6 text-gray-600">
                        {wishDraft}
                      </pre>

                    </div>


                    <button
                      onClick={() =>
                        copyDraft(wishDraft, "wish")
                      }
                      className="mt-5 w-full rounded-full bg-[#b99a62] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#a9874b] active:scale-95"
                    >
                      {copiedDraft === "wish"
                        ? "✓ Draf Berhasil Disalin"
                        : "▣ Salin Draf Pesanan"}
                    </button>


                    <button
                      onClick={() => setWishDraft("")}
                      className="mt-3 w-full rounded-full border border-[#b99a62]/50 bg-white px-6 py-3 text-xs font-medium text-[#8b7042] transition hover:bg-[#faf6ec]"
                    >
                      ← Ubah Data
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowWishForm(false);
                        setWishDraft("");
                        setWishName("");
                        setWishMessage("");
                        setSelectedWish("");
                      }}
                      className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-medium text-gray-500 transition hover:bg-gray-50 hover:text-[#8b7042] active:scale-95"
                    >
                      ✕ Tutup
                    </button>


                  </>
                )}

              </div>

            </div>
          )}


          {/* =========================================
              MODAL KIRIM KADO
          ========================================== */}

          {showGiftForm && (
            <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/50 px-5 py-8 backdrop-blur-sm">

              <div className="relative w-full max-w-md rounded-3xl bg-[#fffdf8] p-7 text-left shadow-2xl">


                {!giftDraft ? (
                  <>
                    <div className="text-center">

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b99a62]/30 bg-[#faf6ec] text-2xl">
                        ♢
                      </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#8b7042]">
                        Kirim Kado
                      </p>

                      <h3 className="font-display mt-3 text-3xl text-[#4b594d]">
                        Buat Draf Pengiriman
                      </h3>

                      <div className="mx-auto mt-4 h-px w-12 bg-[#b99a62]" />

                      <p className="mt-5 text-xs leading-6 text-gray-500">
                        Buat draf alamat pengiriman kado
                        yang dapat Anda salin untuk digunakan
                        saat melakukan pemesanan kepada
                        toko atau jasa pengiriman pilihan Anda.
                      </p>

                    </div>


                    <div className="mt-7 space-y-5">

                      {/* NAMA */}

                      <div>

                        <label className="mb-2 block text-xs font-medium text-[#6f755f]">
                          Nama Pengirim
                        </label>

                        <input
                          type="text"
                          value={giftName}
                          onChange={(e) =>
                            setGiftName(e.target.value)
                          }
                          placeholder="Nama Anda"
                          className="w-full rounded-xl border border-[#d8c9a8] bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#b99a62] focus:ring-2 focus:ring-[#b99a62]/20"
                        />

                      </div>


                      {/* PESAN */}

                      <div>

                        <label className="mb-2 block text-xs font-medium text-[#6f755f]">
                          Pesan / Keterangan
                        </label>

                        <textarea
                          value={giftMessage}
                          onChange={(e) =>
                            setGiftMessage(
                              e.target.value,
                            )
                          }
                          placeholder="Contoh: Mohon dikirimkan sebagai tanda kasih untuk Alanza & Alana."
                          rows={4}
                          className="w-full resize-none rounded-xl border border-[#d8c9a8] bg-white px-4 py-3 text-sm leading-6 text-gray-700 outline-none transition focus:border-[#b99a62] focus:ring-2 focus:ring-[#b99a62]/20"
                        />

                      </div>


                      {/* INFORMASI ALAMAT */}

                      <div className="rounded-2xl border border-[#d8c9a8] bg-[#faf8f3] p-4">

                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a7b43]">
                          Alamat Tujuan
                        </p>

                        <p className="mt-2 whitespace-pre-line text-xs leading-6 text-gray-600">
                          {eventAddress}
                        </p>

                        <a
                          href={eventMapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#8b7042] underline underline-offset-4"
                        >
                          📍 Buka Lokasi di Google Maps
                        </a>

                      </div>


                      <button
                        onClick={createGiftDraft}
                        className="w-full rounded-full bg-[#b99a62] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#a9874b] active:scale-95"
                      >
                        📝 Buat Draf Alamat
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowGiftForm(false);
                          setGiftDraft("");
                          setGiftName("");
                          setGiftMessage("");
                        }}
                        className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-medium text-gray-500 transition hover:bg-gray-50 hover:text-[#8b7042] active:scale-95"
                      >
                        ✕ Tutup
                      </button>

                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#faf6ec] text-2xl">
                        ✓
                      </div>

                      <h3 className="font-display mt-4 text-3xl text-[#4b594d]">
                        Alamat Siap Disalin
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-gray-500">
                        Salin draf berikut dan gunakan
                        saat melakukan pemesanan atau
                        pengiriman kado.
                      </p>

                    </div>


                    <div className="mt-6 max-h-[45vh] overflow-y-auto rounded-2xl border border-[#d8c9a8] bg-[#faf8f3] p-5">

                      <pre className="whitespace-pre-wrap font-sans text-xs leading-6 text-gray-600">
                        {giftDraft}
                      </pre>

                    </div>


                    <button
                      onClick={() =>
                        copyDraft(giftDraft, "gift")
                      }
                      className="mt-5 w-full rounded-full bg-[#b99a62] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition hover:bg-[#a9874b] active:scale-95"
                    >
                      {copiedDraft === "gift"
                        ? "✓ Draf Berhasil Disalin"
                        : "▣ Salin Draf Alamat"}
                    </button>


                    <button
                      onClick={() => setGiftDraft("")}
                      className="mt-3 w-full rounded-full border border-[#b99a62]/50 bg-white px-6 py-3 text-xs font-medium text-[#8b7042] transition hover:bg-[#faf6ec]"
                    >
                      ← Ubah Data
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowGiftForm(false);
                        setGiftDraft("");
                        setGiftName("");
                        setGiftMessage("");
                      }}
                      className="mt-3 w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-medium text-gray-500 transition hover:bg-gray-50 hover:text-[#8b7042] active:scale-95"
                    >
                      ✕ Tutup
                    </button>



                  </>
                )}

              </div>

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

      <footer className="relative overflow-hidden bg-[#5a5145] px-6 py-20 text-white">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#f4dfb2]/10" />

        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-[#f4dfb2]/10" />

        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4bc8b] to-transparent" />

        <div className="relative z-10 mx-auto max-w-xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f4dfb2] sm:text-xs">
            Tasyakuran Khitanan & Aqiqah
          </p>

          <h2 className="font-display mt-5 text-4xl text-[#fff4d6] sm:text-5xl">
            Alanza & Alana
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">

            <div className="h-px w-8 bg-[#d4bc8b]/50" />

            <div className="h-1 w-1 rotate-45 bg-[#f4dfb2]" />

            <div className="h-px w-8 bg-[#d4bc8b]/50" />

          </div>

          <p className="mx-auto mt-7 max-w-md text-xs leading-7 text-[#f8f1e4]/65 sm:text-sm">
            Terima kasih atas doa, perhatian, kasih sayang,
            dan kehadiran Bapak/Ibu/Saudara/i yang turut
            menjadi bagian dari kebahagiaan keluarga kami.
          </p>

          <div className="mx-auto mt-9 flex items-center justify-center">

            <span className="h-px w-12 bg-[#d4bc8b]/35" />

            <span className="mx-3 text-sm text-[#f4dfb2]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#d4bc8b]/35" />

          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#f4ead8]/40">
            With Love From Our Family
          </p>

        </div>

      </footer>

    </main>
  );
}
