import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ee]">

      {/* Hero */}
      <Hero />

      {/* Pembuka */}
      <section
  id="undangan"
  className="bg-white px-6 py-20 sm:py-28"
>

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Bismillahirrahmanirrahim
          </p>

          <h2 className="font-display mt-5 text-4xl leading-tight text-[#26332b] sm:text-5xl">
            Assalamu’alaikum
            <br />
            Warahmatullahi Wabarakatuh
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#b99a62]" />

          <p className="mt-8 text-sm leading-8 text-gray-500 sm:text-base">
            Dengan memohon rahmat dan ridho Allah SWT, kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk
            menghadiri acara tasyakuran khitanan putra kami
            dan cukuran putri kami.
          </p>

          {/* Nama */}
          <div className="mt-10">
            <p className="font-display text-5xl font-semibold text-[#657567] sm:text-6xl">
              Saguna Alanza Rajulan
            </p>

            <p className="my-2 font-display text-3xl text-[#b99a62]">
              &
            </p>

            <p className="font-display text-5xl font-semibold text-[#657567] sm:text-6xl">
              Saquena Alana Rajulan
            </p>
          </div>

          <p className="mt-8 text-sm leading-8 text-gray-500 sm:text-base">
            Putra & Putri tercinta dari keluarga
            <br />
            <span className="font-medium text-gray-500">
              Bapak Bika Rajulan S.Kom & Ibu Sri Wahyuni S.pd
            </span>
          </p>

        </div>
      </section>

      {/* Countdown */}
      <Countdown />

      {/* Detail Acara */}
      <EventDetail />

      {/* RSVP */}
      <RSVP />

      {/* Penutup */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto mb-8 h-px w-16 bg-[#b99a62]" />

          <p className="font-display text-3xl leading-relaxed text-[#26332b] sm:text-4xl">
            “Semoga menjadi anak yang sholeh dan sholehah,
            berbakti kepada orang tua, serta menjadi
            kebanggaan keluarga.”
          </p>

          <p className="mt-8 text-sm leading-7 text-gray-500">
            Merupakan suatu kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
            doa terbaik untuk Alanza dan Alana.
          </p>

          <p className="mt-8 text-sm text-gray-400">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26332b] px-6 py-14 text-center text-white">

        <p className="text-xs uppercase tracking-[0.3em] text-[#d4bc8b]">
          Tasyakuran Khitanan & Cukuran
        </p>

        <h2 className="font-display mt-4 text-4xl text-[#f4dfb2]">
          Alanza & Alana
        </h2>

        <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-white/50">
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
