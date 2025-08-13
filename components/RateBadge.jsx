export default function RateBadge({ interbank, applied, fallback }) {
  return (
    <div className="badge">
      <span className="font-medium">Kurs</span>
      <span>Interbank: {interbank?.toFixed(3)} KES</span>
      <span>angewandt: <strong>{applied?.toFixed(3)} KES</strong></span>
      {fallback && <span className="text-amber-600">(Demo)</span>}
    </div>
  );
}
