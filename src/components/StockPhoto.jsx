/**
 * StockPhoto — licensed stock/reference photography.
 *
 * Confirmed with the person supplying these: not photographs of Zanokuhle's
 * own learners or programmes, and no documented parental/guardian consent
 * exists for them (see SAFEGUARDING_NOTE in data/org.js). Used here as
 * generic scene-setting imagery only — alt text stays descriptive of the
 * scene, never naming a specific Zanokuhle programme, learner or location,
 * so nothing on the page implies these are identified participants.
 * Replace with real, consented Zanokuhle photography as it becomes
 * available; PhotoPlaceholder remains the right choice for any slot that
 * doesn't yet have a suitable photo at all.
 */
export default function StockPhoto({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={`/images/${src}`} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    </div>
  )
}
