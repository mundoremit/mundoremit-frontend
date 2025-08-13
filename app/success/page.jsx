"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const sp = useSearchParams();
  const amountChf = Number(sp.get("amountChf") || 0);
  const feeChf = Number(sp.get("feeChf") || 0);
  const netChf = Number(sp.get("netChf") || 0);
  const rate = Number(sp.get("rate") || 0);
  const kes = Number(sp.get("kes") || 0);
  const recipient = sp.get("recipient") || "";

  return (
    <div className="card">
      <h1 className="text-2xl font-semibold">Überweisungsauftrag erstellt</h1>
      <p className="mt-2 text-slate-600">Die Details deiner Überweisung. Eine Bestätigung wird per SMS/E-Mail versendet.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500 text-sm">Betrag (CHF)</div>
          <div className="text-xl font-semibold">{amountChf.toLocaleString("de-CH")} CHF</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500 text-sm">Gebühr</div>
          <div className="text-xl font-semibold">{feeChf.toLocaleString("de-CH")} CHF</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500 text-sm">Netto (CHF)</div>
          <div className="text-xl font-semibold">{netChf.toLocaleString("de-CH")} CHF</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500 text-sm">Zielbetrag</div>
          <div className="text-xl font-semibold">{Math.floor(kes).toLocaleString("de-CH")} KES</div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
        Empfänger <strong>{recipient}</strong> · angewandter Kurs: <strong>{rate.toFixed(3)} KES</strong> pro CHF.
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link className="button-primary" href="/">Neue Überweisung</Link>
        <div className="text-sm text-slate-500">
          Hinweis: Der endgültige Transfer wird manuell über Revolut ausgelöst.
        </div>
      </div>
    </div>
  );
}
