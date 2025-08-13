import "./globals.css";

export const metadata = {
  title: "Mundoremit – CHF → KES Transfers",
  description: "Einfach Geld von der Schweiz nach Kenia senden – schnell, sicher, transparent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen">
          <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-brand-600 text-white grid place-items-center font-bold">M</div>
                <div className="font-semibold text-lg">Mundoremit</div>
              </div>
              <nav className="text-sm text-slate-600">
                Sicher · Transparent · CHF → KES
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
          <footer className="border-t mt-10">
            <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500">
              © {new Date().getFullYear()} Mundoremit. Alle Rechte vorbehalten.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
