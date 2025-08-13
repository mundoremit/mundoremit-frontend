import TransferForm from "@/components/TransferForm";
import LimitNotice from "@/components/LimitNotice";

export default function Page() {
  const daily = Number(process.env.NEXT_PUBLIC_DAILY_LIMIT_CHF || 5000);
  const monthly = Number(process.env.NEXT_PUBLIC_MONTHLY_LIMIT_CHF || 20000);
  return (
    <div className="grid grid-cols-1 gap-6">
      <section className="card">
        <h2 className="text-xl font-semibold">Willkommen bei Mundoremit</h2>
        <p className="text-slate-600 mt-2">
          Sende Geld von der Schweiz nach Kenia in wenigen Minuten. Transparente Kurse, fixe Gebühr, klare Limits.
        </p>
      </section>
      <TransferForm />
      <LimitNotice daily={daily} monthly={monthly} />
    </div>
  );
}
