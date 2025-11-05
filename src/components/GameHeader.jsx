import { Star } from "lucide-react";

export default function GameHeader() {
  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-700/30 via-fuchsia-500/20 to-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-700/30 via-teal-500/20 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-stretch">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60">
            <div className="aspect-[16/9] w-full bg-neutral-900 relative">
              <img
                alt="Game key art"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1974&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    Starbound Horizon
                  </h1>
                  <p className="mt-1 text-neutral-400 text-sm md:text-base">
                    An expansive sci‑fi action RPG. Explore, craft, and conquer across a living galaxy.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-neutral-900/70 border border-white/10 px-3 py-1.5 rounded-md">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">4.8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 md:p-6">
            <h2 className="text-white text-lg font-medium mb-3">What you get</h2>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Base game</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-500" /> Digital artbook</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Soundtrack (FLAC)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Early access updates</li>
            </ul>
            <p className="mt-4 text-neutral-400 text-xs">Playable on Windows, macOS, and Linux. Controller and cloud saves supported.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
