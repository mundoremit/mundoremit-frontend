# Mondoremit – Frontend (Next.js + Tailwind)

**Ziel:** CHF → KES Transfers mit klarer Gebühr, Sicherheitsmarge und Limits.  
Bereit für Vercel-Deployment. Backend optional via Render (API-URL per ENV).

---

## 1) Lokal starten

Voraussetzung: Node.js 18+

```bash
npm install
npm run dev
# http://localhost:3000
```

Optionale ENV (erstelle `.env.local` – siehe `.env.local.example`):
```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SECURITY_MARGIN_BP=100
NEXT_PUBLIC_FEE_CHF=5
NEXT_PUBLIC_MAX_PER_TRANSFER_CHF=2500
NEXT_PUBLIC_DAILY_LIMIT_CHF=5000
NEXT_PUBLIC_MONTHLY_LIMIT_CHF=20000
```

Ohne API wird ein **Demo-Kurs** verwendet.

---

## 2) In GitHub hochladen (Schritt für Schritt)

1. Neues (leeres) Repository in deinem Account erstellen: `mundoremit-frontend`
2. Im Projektordner:

```bash
git init
git remote add origin https://github.com/mundoremit/mundoremit-frontend.git
git branch -M main
git add .
git commit -m "Initial commit: Mundoremit Frontend MVP"
git push -u origin main
```

> Falls GitHub nach einem Passwort fragt: Personal Access Token verwenden.

---

## 3) Bei Vercel deployen

1. Auf https://vercel.com einloggen (mit GitHub)
2. **"Add New" → "Project" → Import Git Repository"**
3. Wähle `mundoremit-frontend`
4. Framework Preset: **Next.js**
5. (Optional) Umgebungsvariablen setzen (aus `.env.local.example`)
6. Deploy klicken

**Domains verbinden:**
- `www.mondoremit.ch` als Domain in *Project → Settings → Domains* hinzufügen
- DNS bei deinem Hoster:
  - `www` → CNAME → `cname.vercel-dns.com`
  - `@` → A → `76.76.21.21`
- Danach in Vercel auf **Verify** klicken

---

## 4) Nächste Schritte

- Backend auf Render bereitstellen → `NEXT_PUBLIC_API_URL` setzen
- KYC/AML & Revolut-Flow anbinden
- Admin-Dashboard (Transaktionen, Limits, Status)

---

## Hinweise

- Alle Limits werden **serverseitig** verbindlich geprüft. Diese App zeigt nur eine Vorschau.
- Der **Fallback-FX-Kurs** ist nur zu Demo-Zwecken.
- Design in Tailwind: modern, mobil-freundlich, barrierearm.
