export default function LimitNotice({ daily, monthly }) {
  return (
    <div className="card mt-4">
      <div className="flex items-center justify-between">
        <div className="text-slate-700 font-medium">Überweisungslimits</div>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500">Tageslimit</div>
          <div className="text-slate-800 font-semibold">{daily.toLocaleString("de-CH")} CHF</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-slate-500">Monatslimit</div>
          <div className="text-slate-800 font-semibold">{monthly.toLocaleString("de-CH")} CHF</div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        * Die Einhaltung der Limits erfolgt serverseitig. Diese Anzeige ist eine Vorschau des Frontends.
      </p>
    </div>
  );
}
