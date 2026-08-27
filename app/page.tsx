import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-white px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7957]">
            Bismillahirrahmanirrahim
          </p>

          <h2 className="font-display mt-5 text-4xl text-[#26332b] sm:text-5xl">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500">
            Dengan memohon rahmat dan ridho Allah SWT, kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk
            menghadiri acara tasyakuran khitanan putra kami
            dan cukuran putri kami.
          </p>

          <div className="mt-10">
            <p className="font-display text-4xl text-[#657567]">
              Alanza
            </p>

            <p className="my-2 text-sm text-[#b99a62]">&</p>

            <p className="font-display text-4xl text-[#657567]">
              Alana
            </p>
          </div>
        </div>
      </section>

      <Countdown />

      <EventDetail />

      <RSVP />

      <footer className="bg-[#26332b] px-6 py-12 text-center text-white">
        <p className="font-display text-3xl text-[#d4bc8b]">
          Alanza & Alana
        </p>

        <p className="mt-3 text-xs text-white/40">
          Terima kasih atas doa dan kehadirannya.
        </p>

        <div className="mt-8 text-[10px] tracking-[0.25em] text-white/30">
          MADE WITH LOVE
        </div>
      </footer>
    </main>
  );
}
