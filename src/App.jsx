import { useState } from "react";
import Navbar from "./components/Navbar";
import GameHeader from "./components/GameHeader";
import PriceSelector from "./components/PriceSelector";
import GameDetails from "./components/GameDetails";

export default function App() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-sky-500/30 selection:text-white">
      {/* Subtle page background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-20%,rgba(56,189,248,0.12),transparent),radial-gradient(50%_50%_at_120%_20%,rgba(124,58,237,0.10),transparent)]" />
      </div>

      <Navbar />
      <main>
        <GameHeader />
        <PriceSelector selected={currency} onSelect={setCurrency} />
        <GameDetails />
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Nebula Games. This is a demo store page inspired by modern PC storefronts.
        </div>
      </footer>
    </div>
  );
}
