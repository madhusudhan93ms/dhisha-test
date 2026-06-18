import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import SkeletonPropertyGrid from '../components/SkeletonCard'
import './Properties.css'

const categories = ['All', 'Residential', 'Commercial', 'Plots']

const properties = [
  {
    id: 1,
    title: 'Premium Residential Plot',
    category: 'Plots',
    location: 'Coimbatore, Tamil Nadu',
    size: '2400 sq.ft',
    price: 'On Request',
    tag: 'DTCP Approved',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    features: ['Prime Location', 'DTCP / RERA Approved', 'Excellent Road Connectivity', 'Ready for Construction'],
  },
  {
    id: 2,
    title: 'Luxury Villa',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '3800 sq.ft',
    price: 'On Request',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    features: ['Modern Architecture', 'Spacious Interiors', 'Premium Amenities', 'Secure Community Living'],
  },
  {
    id: 3,
    title: 'Commercial Office Space',
    category: 'Commercial',
    location: 'Coimbatore, Tamil Nadu',
    size: '5200 sq.ft',
    price: 'On Request',
    tag: 'Investment',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    features: ['High Visibility Location', 'Business-Friendly Environment', 'Excellent Investment Potential'],
  },
  {
    id: 4,
    title: 'Gated Community Apartment',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '1650 sq.ft',
    price: 'On Request',
    tag: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    features: ['Gated Community', 'Lift & Parking', 'Kids Play Area', 'Power Backup'],
  },
  {
    id: 5,
    title: 'Farm Land / Agricultural Plot',
    category: 'Plots',
    location: 'Pollachi, Tamil Nadu',
    size: '2 Acres',
    price: 'On Request',
    tag: 'Investment',
    image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=900&q=80',
    features: ['Clear Title', 'Water Source Available', 'Good Road Access', 'Fertile Land'],
  },
  {
    id: 6,
    title: 'Retail Shop / Showroom',
    category: 'Commercial',
    location: 'Coimbatore, Tamil Nadu',
    size: '1100 sq.ft',
    price: 'On Request',
    tag: 'High ROI',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    features: ['Main Road Frontage', 'High Footfall Area', 'Immediate Possession', 'CCTV & Security'],
  },
  {
    id: 7,
    title: 'Independent House',
    category: 'Residential',
    location: 'Coimbatore, Tamil Nadu',
    size: '2100 sq.ft',
    price: 'On Request',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    features: ['Individual House', '3 BHK', 'Car Parking', 'Solar Panel Ready'],
  },
  {
    id: 8,
    title: 'Villa Plot in Gated Layout',
    category: 'Plots',
    location: 'Coimbatore, Tamil Nadu',
    size: '3000 sq.ft',
    price: 'On Request',
    tag: 'RERA Approved',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=900&q=80',
    features: ['RERA Registered', 'Underground Electricity', 'Tar Road Layout', 'Park & Club House'],
  },
  {
    id: 9,
    title: 'Warehouse / Industrial Space',
    category: 'Commercial',
    location: 'Tirupur, Tamil Nadu',
    size: '12,000 sq.ft',
    price: 'On Request',
    tag: 'Industrial',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    features: ['Highway Connectivity', 'High Ceiling', 'Loading Bay', 'Power 3-Phase'],
  },
]

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState({})
  useScrollReveal(`${isLoading}-${activeFilter}-${query}`)

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()

    return properties.filter((p) => {
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter
      const searchableText = [
        p.title,
        p.category,
        p.location,
        p.size,
        p.tag,
        ...p.features,
      ].join(' ').toLowerCase()

      return matchesCategory && (!search || searchableText.includes(search))
    })
  }, [activeFilter, query])

  useEffect(() => {
    setIsLoading(true)
    setLoadedImages({})
    const timer = window.setTimeout(() => setIsLoading(false), 420)
    return () => window.clearTimeout(timer)
  }, [activeFilter, query])

  const markImageLoaded = (id) => {
    setLoadedImages((current) => ({ ...current, [id]: true }))
  }

  return (
    <main className="properties-page">

      {/* Page Hero */}
      <section className="page-hero props-hero">
        <div className="page-hero__deco" aria-hidden="true">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect x="600" y="50" width="240" height="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="4"/>
            <rect x="640" y="80" width="160" height="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" rx="4"/>
            <rect x="20" y="100" width="120" height="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" rx="2"/>
            <line x1="0" y1="300" x2="800" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="page-hero__content">
          <p className="section-kicker" style={{ color: 'var(--accent-light)' }}>Our Portfolio</p>
          <h1>Explore Our Properties</h1>
          <p>Browse our handpicked selection of residential plots, luxury villas, apartments, and commercial spaces.</p>
        </div>
      </section>

      {/* Info Strip */}
      <div className="props-info-strip">
        <span>✦ All properties are legally verified</span>
        <span>✦ DTCP & RERA approved options available</span>
        <span>✦ End-to-end documentation support</span>
        <span>✦ Contact us for pricing & site visits</span>
      </div>

      {/* Filters + Grid */}
      <section className="props-main">
        <div className="props-container">

          {/* Filter Tabs */}
          <div className="props-filters reveal">
            <div className="props-search">
              <label htmlFor="property-search">Search properties</label>
              <div className="props-search__field">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  id="property-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by keyword, type, location, feature..."
                  aria-label="Search properties"
                />
              </div>
            </div>

            <div className="props-filter-group">
              <p className="props-filters__label">Filter by:</p>
              <div className="props-filters__tabs" role="tablist">
                {categories.map(cat => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeFilter === cat}
                    className={`props-filter-btn${activeFilter === cat ? ' props-filter-btn--active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="props-count">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
          </div>

          {/* Grid */}
          <div className="props-results" aria-busy={isLoading}>
            {isLoading ? (
              <SkeletonPropertyGrid count={6} />
            ) : filtered.length > 0 ? (
              <div className="props-grid">
                {filtered.map((p, i) => {
                  const imageReady = Boolean(loadedImages[p.id])
                  const directionClass = i % 4 < 2 ? 'from-top' : 'from-bottom'

                  return (
                    <article
                      key={p.id}
                      className={`prop-card reveal ${directionClass} reveal-delay-${(i % 3) + 1}${imageReady ? ' prop-card--ready' : ' prop-card--loading'}`}
                    >
                      <div className="prop-card__img-wrap">
                        {!imageReady && <span className="prop-card__image-skeleton" aria-hidden="true" />}
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => markImageLoaded(p.id)}
                        />
                        <span className="prop-card__tag">{p.tag}</span>
                        <span className="prop-card__cat">{p.category}</span>
                      </div>
                      <div className="prop-card__body">
                        <h3>{p.title}</h3>
                        <p className="prop-card__location">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {p.location}
                        </p>
                        <div className="prop-card__meta">
                          <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                              <rect x="3" y="3" width="18" height="18" rx="2"/>
                              <path d="M3 9h18M9 21V9"/>
                            </svg>
                            {p.size}
                          </span>
                          <span className="prop-card__price">{p.price}</span>
                        </div>
                        <ul className="prop-card__features">
                          {p.features.map(f => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                        <Link
                          to="/contact"
                          className="btn btn-primary prop-card__cta"
                          aria-disabled={!imageReady}
                          tabIndex={imageReady ? 0 : -1}
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="props-empty reveal">
                <h2>No matching properties</h2>
                <p>Try a different keyword or switch the category filter.</p>
                <button className="btn btn-dark" onClick={() => { setQuery(''); setActiveFilter('All') }}>
                  Clear Search
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Custom Requirement Banner */}
      <section className="props-custom reveal scale">
        <div className="props-custom__content">
          <div>
            <h2>Can't Find What You're Looking For?</h2>
            <p>Tell us your requirements and we'll find the perfect property for you from our extensive network.</p>
          </div>
          <div className="props-custom__actions">
            <Link to="/contact" className="btn btn-primary">Share Your Requirements</Link>
            <a href="tel:+91XXXXXXXXXX" className="btn btn-outline">Call Us Directly</a>
          </div>
        </div>
      </section>

    </main>
  )
}
