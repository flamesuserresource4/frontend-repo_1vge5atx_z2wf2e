import { Sparkles } from "lucide-react";

export default function GameDetails() {
  return (
    <section className="relative pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-3">About this game</h3>
            <p className="text-neutral-300 leading-relaxed">
              Starbound Horizon is a modern space-faring RPG where every decision shapes your legacy. Pilot
              customizable ships, assemble a crew, and carve your path through procedurally generated star
              systems filled with mysteries, factions, and untold riches. Seamlessly blend on-foot exploration
              with intense tactical combat and deep crafting.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                  <img
                    alt={`Gameplay screenshot ${i}`}
                    src={`https://picsum.photos/seed/horizon-${i}/800/450`}
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 md:p-6">
              <h4 className="text-white font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-300" /> Features
              </h4>
              <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
                <li>Open-world galaxy with emergent storytelling</li>
                <li>Base building on planets and orbital stations</li>
                <li>Co-op multiplayer and guild systems</li>
                <li>Advanced crafting and economy simulation</li>
                <li>Photo mode and accessibility presets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
