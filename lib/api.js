const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Ruft einen FX-Quote ab. Falls keine API erreichbar ist, wird ein Fallback genutzt.
 * @param {number} amountChf  Betrag in CHF
 * @param {number} marginBp   Sicherheitsmarge in Basispunkten (z.B. 100 = 1.00%)
 */
export async function getFxQuoteCHFtoKES(amountChf, marginBp = 100) {
  const marginFactor = 1 - (marginBp / 10000);
  try {
    if (!API_URL) throw new Error("No API_URL configured");
    const u = new URL("/fx/quote", API_URL);
    u.searchParams.set("from", "CHF");
    u.searchParams.set("to", "KES");
    u.searchParams.set("amount", String(amountChf));
    const res = await fetch(u.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error("Non-200 from API");
    const data = await res.json();
    // Erwartete Antwort: { rate: number } (Interbank)
    const interbank = Number(data.rate);
    if (!interbank || interbank <= 0) throw new Error("Invalid rate");
    const appliedRate = interbank * marginFactor;
    return { interbank, appliedRate };
  } catch {
    // Fallback: konservativer, statischer Kurs (nur vorläufig)
    const interbank = 150; // Beispiel: 1 CHF = 150 KES (PLATZHALTER!)
    const appliedRate = interbank * marginFactor;
    return { interbank, appliedRate, fallback: true };
  }
}

/** simple store in localStorage for demo limits */
export function loadStats() {
  if (typeof window === "undefined") return { todayChf: 0, monthChf: 0 };
  try {
    const raw = localStorage.getItem("mr_stats");
    return raw ? JSON.parse(raw) : { todayChf: 0, monthChf: 0 };
  } catch {
    return { todayChf: 0, monthChf: 0 };
  }
}

export function saveStats(next) {
  if (typeof window === "undefined") return;
  localStorage.setItem("mr_stats", JSON.stringify(next));
}
