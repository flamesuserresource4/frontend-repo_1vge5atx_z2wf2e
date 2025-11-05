import { ShoppingCart, User, Search, Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-transparent/60 bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-sky-500 to-violet-600 grid place-items-center">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Nebula Games</span>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              placeholder="Search the store"
              className="w-full pl-9 pr-3 py-2 rounded-md bg-neutral-900/80 border border-white/10 text-sm text-neutral-200 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900/80 border border-white/10 text-neutral-200 hover:bg-neutral-800/80 transition">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-sky-900/20 hover:shadow-violet-900/20 transition">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
