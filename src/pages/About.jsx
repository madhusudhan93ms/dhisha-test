import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import './About.css'

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Happy Client Journeys' },
  { value: 4000, suffix: '+', label: 'Properties Reviewed' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

const reasons = [
  { num: '01', title: 'Trusted Expertise', text: 'Years of experience in understanding local real estate markets and guiding clients to the best opportunities.' },
  { num: '02', title: 'Verified Properties', text: 'All listed properties undergo thorough verification for legal clarity, ownership status, and regulatory approvals.' },
  { num: '03', title: 'Customer-Centric Approach', text: 'We listen first. Every recommendation is tailored to match your goals, budget, and lifestyle.' },
  { num: '04', title: 'Transparent Transactions', text: 'No hidden charges, no surprises. Complete transparency throughout every step of the buying or selling process.' },
  { num: '05', title: 'End-to-End Support', text: "From the first site visit to the final registration — we're with you at every stage of your property journey." },
]

const values = [
  { icon: '◆', label: 'Integrity', desc: 'Honest and ethical in every transaction' },
  { icon: '◈', label: 'Excellence', desc: 'Delivering the highest quality service always' },
  { icon: '◉', label: 'Innovation', desc: 'Modern solutions for modern property needs' },
  { icon: '◇', label: 'Trust', desc: 'Building lasting relationships with every client' },
]

function StatItem({ s, i }) {
  const { display, ref } = useCountUp(s.value, 2000, s.suffix)
  return (
    <article className={`about-stat reveal reveal-delay-${i + 1}`}>
      <strong ref={ref}>{display}</strong>
      <span>{s.label}</span>
    </article>
  )
}

export default function About() {
  useScrollReveal()

  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero__deco" aria-hidden="true">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="700" cy="100" r="300" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <circle cx="700" cy="100" r="200" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <circle cx="700" cy="100" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <rect x="50" y="200" width="160" height="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" transform="rotate(15 130 280)"/>
            <rect x="100" y="250" width="80" height="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(15 140 290)"/>
            <line x1="0" y1="400" x2="800" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="0" y1="500" x2="800" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="page-hero__content">
          <p className="section-kicker" style={{ color: 'var(--accent-light)' }}>About Us</p>
          <h1>Welcome to Dhisha Realty</h1>
          <p>A customer-focused real estate company dedicated to helping individuals and businesses find the right property solutions with transparency and trust.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section about-story">
        <div className="about-container">
          <div className="about-story__grid">
            <div className="about-story__text reveal from-left">
              <p className="section-kicker">Our Story</p>
              <h2 className="section-title">Built on Trust, Driven by Purpose</h2>
              <p>
                Dhisha Realty was founded with a simple yet powerful mission — to make property transactions
                transparent, hassle-free, and customer-first. We understand that buying or selling a property
                is one of the most significant decisions in your life, and we take that responsibility seriously.
              </p>
              <p>
                Our experienced team understands market trends and works closely with clients to ensure a
                smooth and hassle-free property journey. With a commitment to transparency, integrity, and
                customer satisfaction, we assist clients in buying, selling, and investing in premium real
                estate opportunities.
              </p>
              <p>
                From our roots as a local real estate consultancy, Dhisha Realty has grown into a trusted
                name — backed by thousands of satisfied clients and a portfolio that spans residential plots,
                luxury villas, commercial spaces, and everything in between.
              </p>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: '8px' }}>
                Talk to Our Team
              </Link>
            </div>

            {/* Decorative Visual */}
            <div className="about-story__visual reveal from-right" aria-hidden="true">
              <div className="deco-box">
                <div className="deco-box__main">
                  <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Building silhouette */}
                    <rect x="60" y="100" width="180" height="240" fill="var(--ink)" rx="4"/>
                    <rect x="80" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="135" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="190" y="120" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="2"/>
                    <rect x="80" y="180" width="30" height="40" fill="rgba(255,255,255,0.1)" rx="2"/>
                    <rect x="135" y="180" width="30" height="40" fill="var(--accent)" rx="2" opacity="0.9"/>
                    <rect x="190" y="180" width="30" height="40" fill="rgba(255,255,255,0.1)" rx="2"/>
                    <rect x="80" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="135" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="190" y="240" width="30" height="40" fill="rgba(255,255,255,0.08)" rx="2"/>
                    <rect x="120" y="300" width="60" height="40" fill="var(--accent)" rx="2"/>
                    {/* Roof detail */}
                    <polygon points="60,100 150,40 240,100" fill="var(--ink-light)" />
                    <circle cx="150" cy="68" r="8" fill="var(--accent)"/>
                    {/* Decorative rings */}
                    <circle cx="150" cy="180" r="130" stroke="var(--accent)" strokeWidth="0.8" opacity="0.15" strokeDasharray="6 4"/>
                    <circle cx="150" cy="180" r="155" stroke="var(--ink)" strokeWidth="0.8" opacity="0.08" strokeDasharray="4 6"/>
                  </svg>
                </div>
                {/* Corner accents */}
                <div className="deco-box__accent deco-box__accent--tl"/>
                <div className="deco-box__accent deco-box__accent--br"/>
                <div className="deco-box__dots" aria-hidden="true">
                  {Array.from({length: 25}).map((_,i) => <span key={i}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-band">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} i={i} />
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="about-section about-mv">
        <div className="about-container">
          <div className="section-head reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 52px' }}>
            <p className="section-kicker">What Drives Us</p>
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>
          <div className="mv-grid">
            <article className="mv-card reveal reveal-delay-1">
              <div className="mv-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <circle cx="30" cy="30" r="18" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
                  <circle cx="30" cy="30" r="7" fill="var(--accent)"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide reliable, transparent, and value-driven real estate services that help our
                clients make confident property decisions. We strive to remove the complexity from
                property transactions and replace it with clarity and trust.
              </p>
            </article>
            <article className="mv-card reveal reveal-delay-2">
              <div className="mv-card__icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <polygon points="30,5 55,45 5,45" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                  <polygon points="30,18 44,40 16,40" stroke="var(--accent)" strokeWidth="1" opacity="0.5" fill="none"/>
                  <circle cx="30" cy="32" r="4" fill="var(--accent)"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted name in the real estate industry by delivering exceptional customer
                experiences and quality property solutions. We envision a future where every property
                journey is guided, transparent, and fulfilling.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-values">
        <div className="about-container">
          <div className="section-head reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 52px' }}>
            <p className="section-kicker">Core Values</p>
            <h2 className="section-title">The Principles We Live By</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <article key={v.label} className={`value-card reveal reveal-delay-${i + 1}`}>
                <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                <h3>{v.label}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section about-why">
        <div className="about-container">
          <div className="about-why__grid">
            <div className="reveal from-left">
              <p className="section-kicker">Why Choose Us</p>
              <h2 className="section-title">Clear guidance from search to registration</h2>
              <p style={{ marginTop: 16, maxWidth: 460 }}>
                We combine local market knowledge with genuine care for our clients — making us
                the preferred choice for thousands of property buyers and investors.
              </p>
            </div>
            <div className="about-reasons reveal from-right">
              {reasons.map((r, i) => (
                <article key={r.num} className={`about-reason reveal-delay-${i + 1}`}>
                  <span className="about-reason__num">{r.num}</span>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal scale">
        <div className="about-cta__deco" aria-hidden="true">
          <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="500" cy="100" r="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <circle cx="100" cy="100" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="about-cta__content">
          <h2>Ready to Start Your Property Journey?</h2>
          <p>Let Dhisha Realty be your trusted guide in finding the perfect property.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
