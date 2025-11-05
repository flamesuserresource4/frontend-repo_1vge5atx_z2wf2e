import { useMemo } from "react";
import { ShoppingCart, Check } from "lucide-react";

const currencies = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "BTC", label: "Bitcoin", symbol: "₿" },
  { code: "ETH", label: "Ethereum", symbol: "Ξ" },
  { code: "ADA", label: "Cardano", symbol: "₳" },
];

export default function PriceSelector({ baseUSD = 59.99, selected, onSelect }) {
  // Conversion rates relative to 1 USD
  // Rates are indicative for demo purposes
  const rates = {
    USD: 1,
    EUR: 0.92,
    BTC: 1 / 68000,
    ETH: 1 / 3200,
    ADA: 1 / 0.45,
  };

  const formatted = useMemo(() => {
    const values = {};
    currencies.forEach((c) => {
      const value = baseUSD * (rates[c.code] || 1);
      let display = value.toFixed(2);
      if (c.code === "BTC") display = value.toFixed(6);
      if (c.code === "ETH") display = value.toFixed(5);
      if (c.code === "ADA") display = value.toFixed(2);
      values[c.code] = display;
    });
    return values;
  }, [baseUSD]);

  const active = currencies.find((c) => c.code === selected) || currencies[0];

  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-120px] top-[-80px] h-72 w-72 rounded-full bg-gradient-to-br from-sky-600/20 to-violet-600/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8">
          <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 md:p-6">
            <h3 className="text-white text-lg font-medium mb-4">Choose your currency</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currencies.map((c) => {
                const isActive = c.code === active.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => onSelect?.(c.code)}
                    className={`group w-full text-left rounded-lg border transition p-4 bg-neutral-900/60 hover:bg-neutral-900/80 ${
                      isActive
                        ? "border-sky-500/50 ring-2 ring-sky-500/30"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-neutral-400">{c.label}</div>
                        <div className="mt-1 text-white text-xl font-semibold tracking-tight">
                          <span className="mr-1 opacity-80">{c.symbol}</span>
                          {formatted[c.code]}
                        </div>
                      </div>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-sky-300 text-xs">
                          <Check className="h-4 w-4" /> Selected
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-950/60 p-5 md:p-6 flex flex-col justify-between">
            <div>
              <p className="text-neutral-400 text-sm">Current selection</p>
              <div className="mt-1 text-3xl font-semibold tracking-tight text-white">
                <span className="mr-1 opacity-80">{active.symbol}</span>
                {formatted[active.code]}
              </div>
              <p className="mt-2 text-neutral-500 text-xs">
                Includes VAT where applicable. Prices shown for demonstration purposes.
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-sky-500 to-violet-600 text-white px-4 py-3 text-sm font-medium shadow-lg shadow-sky-900/20 hover:shadow-violet-900/20 transition">
                <ShoppingCart className="h-4 w-4" />
                Buy now
              </button>
              <button className="rounded-md border border-white/10 bg-neutral-900/60 text-neutral-200 px-4 py-3 text-sm hover:bg-neutral-900/80 transition">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
