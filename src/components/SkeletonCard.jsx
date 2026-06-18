import './SkeletonCard.css'

export function SkeletonPropertyCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line skeleton-line--short" />
        <div className="skeleton-meta">
          <div className="skeleton skeleton-chip" />
          <div className="skeleton skeleton-chip skeleton-chip--wide" />
        </div>
        <div className="skeleton skeleton-btn" />
      </div>
    </div>
  )
}

export default function SkeletonPropertyGrid({ count = 6 }) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonPropertyCard key={i} />
      ))}
    </div>
  )
}
