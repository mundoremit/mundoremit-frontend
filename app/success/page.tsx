// app/success/page.tsx
'use client';

import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-slate-500">Lade Überweisungsdetails...</div>}>
      <SuccessContent />
    </Suspense>
  );
}