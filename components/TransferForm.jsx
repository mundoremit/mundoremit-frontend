"use client";
import { useEffect, useMemo, useState } from "react";
import { getFxQuoteCHFtoKES, loadStats, saveStats } from "@/lib/api";
import RateBadge from "./RateBadge";
import { useRouter } from "next/navigation";

const DAILY_LIMIT = Number(process.env.NEXT_PUBLIC_DAILY_LIMIT_CHF || 5000);
const MONTHLY_LIMIT = Number(process.env.NEXT_PUBLIC_MONTHLY_LIMIT_CHF || 20000);
const FEE_CHF = Number(process.env.NEXT_PUBLIC_FEE_CHF || 5);
const MAX_PER_TRANSFER = Number(process.env.NEXT_PUBLIC_MAX_PER_TRANSFER_CHF || 2500);
const MARGIN_BP = Number(process.env.NEXT_PUBLIC_SECURITY_MARGIN_BP || 100); // 1%

export default function TransferForm() {
  const [amountChf, setAmountChf] = useState(100);
  const [recipient, setRecipient] = useState({ name: "", bank: "", account: "" });
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const exceedsPerTransfer = amountChf > MAX_PER_TRANSFER;
  const totals = useMemo(() => {
    if (!quote) return null;
    const fee = FEE_CHF;
    const netChf = Math.max(0, amountChf - fee);
    const kes = netChf * quote.appliedRate;
    return { fee, netChf, kes };
  }, [quote, amountChf]);

  const [stats, setStats] = useState(loadStats());

  useEffect(() => {
    setLoading(true);
    getFxQuoteCHFtoKES(amountChf, MARGIN_BP)
      .then(setQuote)
      .catch(() => setQuote(null))
      .finally(() => setLoading(false));
  }, [amountChf]);

  function validate() {
    setError("");
    if (!amountChf || amountChf <= 0) return setError("Bitte einen Betrag in CHF eingeben.");
    if (exceedsPerTransfer) return setError(`Maximalbetrag pro Überweisung ist ${MAX_PER_TRANSFER} CHF.`);
    if (!recipient.name || !recipient.account) return setError("Bitte Empfängerdaten vollständig eingeben.");
    const nextToday = (stats.todayChf || 0) + amountChf;
    const nextMonth = (stats.monthChf || 0) + amountChf;
    if (nextToday > DAILY_LIMIT) return setError(`Tageslimit überschritten (${DAILY_LIMIT} CHF).`);
    if (nextMonth > MONTHLY_LIMIT) return setError(`Monatslimit überschritten (${MONTHLY_LIMIT} CHF).`);
    return true;
  }

  function submit(e) {
    e.preventDefault();
    if (validate() !== true) return;
    const next = {
      todayChf: (stats.todayChf || 0) + amountChf,
      monthChf: (stats.monthChf || 0) + amountChf,
    };
    saveStats(next);
    setStats(next);
    // In echter App: POST an Backend, hier nur Weiterleitung
    const params = new URLSearchParams({
      amountChf: String(amountChf),
      feeChf: String(totals.fee),
      netChf: String(totals.netChf),
      rate: String(quote.appliedRate),
      kes: String(totals.kes),
      recipient: recipient.name
    });
    router.push(`/success?${params.toString()}`);
  }

  return (
    <form onSubmit={submit} className="card">
      <h1 className="text-2xl font-semibold">Geld senden – Schweiz → Kenia (CHF → KES)</h1>
      <p className="mt-2 text-slate-600">Schnell, sicher & transparent. Flat Fee {FEE_CHF} CHF. Sicherheitsmarge {MARGIN_BP/100}%.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-slate-600">Betrag in CHF</label>
          <input
            type="number"
            min={1}
            step="1"
            className="input mt-2"
            value={amountChf}
            onChange={(e) => setAmountChf(Number(e.target.value))}
            placeholder="z. B. 250"
          />
          <div className="mt-2 text-xs text-slate-500">
            Max. pro Überweisung: {MAX_PER_TRANSFER.toLocaleString("de-CH")} CHF
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-600">Empfängername</label>
          <input
            className="input mt-2"
            value={recipient.name}
            onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
            placeholder="z. B. Achieng Otieno"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="text-sm text-slate-600">Bank / Mobile Wallet</label>
              <input
                className="input mt-2"
                value={recipient.bank}
                onChange={(e) => setRecipient({ ...recipient, bank: e.target.value })}
                placeholder="z. B. M-Pesa / Equity Bank"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Konto / UPI / Telefonnummer</label>
              <input
                className="input mt-2"
                value={recipient.account}
                onChange={(e) => setRecipient({ ...recipient, account: e.target.value })}
                placeholder="z. B. 0712 123 456"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {loading ? (
          <span className="badge animate-pulse">Kurs wird abgerufen…</span>
        ) : quote ? (
          <RateBadge interbank={quote.interbank} applied={quote.appliedRate} fallback={quote.fallback} />
        ) : (
          <span className="badge">Kein Kurs verfügbar</span>
        )}
      </div>

      {quote && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-slate-500 text-sm">Gebühr</div>
            <div className="text-xl font-semibold">{FEE_CHF.toLocaleString("de-CH")} CHF</div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-slate-500 text-sm">Netto (CHF)</div>
            <div className="text-xl font-semibold">{totals?.netChf?.toLocaleString("de-CH", { maximumFractionDigits: 2 })} CHF</div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-slate-500 text-sm">Auszahlung (KES)</div>
            <div className="text-xl font-semibold">{Math.floor(totals?.kes || 0).toLocaleString("de-CH")} KES</div>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Hinweis: FX-Kurs inkl. Sicherheitsmarge. Endgültige Abwicklung erfolgt manuell via Revolut.
        </div>
        <button className="button-primary" type="submit" disabled={!quote || !!error || exceedsPerTransfer}>
          Überweisung anstoßen
        </button>
      </div>
    </form>
  );
}
