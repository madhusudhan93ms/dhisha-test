import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import './Home.css'

/* ── DATA ── */
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    tag: 'Luxury Villas',
    heading: 'Build Your Future\nWith Dhisha Realty',
    sub: 'Trusted Real Estate Solutions for Homes, Villas, Plots & Commercial Properties',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
    tag: 'Premium Plots',
    heading: 'Find the Perfect\nProperty for You',
    sub: 'DTCP & RERA approved residential plots in prime developing locations',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80',
    tag: 'Commercial Spaces',
    heading: 'Invest Smart,\nGrow Together',
    sub: 'Strategic commercial properties with high visibility and excellent ROI',
  },
]

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience', desc: 'Decades of market insight' },
  { value: 100, suffix: '+', label: 'Projects Completed', desc: 'Successfully delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients', desc: 'Satisfied customers' },
  { value: 400, suffix: '+', label: 'Properties Sold', desc: 'Across all categories' },
]

const services = [
  { icon: '🏠', title: 'Residential Properties', text: 'Find your dream home with carefully selected apartments, villas, and independent houses.' },
  { icon: '🌿', title: 'Residential Plots', text: 'Invest in legally approved plots in rapidly developing areas with excellent future growth.' },
  { icon: '🏢', title: 'Commercial Properties', text: 'Office spaces, retail shops, and commercial buildings in strategic business locations.' },
  { icon: '📈', title: 'Property Investment Consulting', text: 'Expert guidance on investments that maximize returns and minimize risks.' },
  { icon: '🤝', title: 'Property Selling Assistance', text: 'Sell faster with our professional marketing and extensive buyer network.' },
  { icon: '📋', title: 'Legal & Documentation Support', text: 'Property verification, documentation, registration, and full legal compliance.' },
]

const reasons = [
  { title: 'Trusted Expertise', text: 'Years of experience in understanding local real estate markets and trends.' },
  { title: 'Verified Properties', text: 'All listed properties undergo thorough verification for legal and ownership clarity.' },
  { title: 'Customer-Centric Approach', text: 'We prioritize your needs and provide personalized property recommendations.' },
  { title: 'Transparent Transactions', text: 'No hidden charges. Complete transparency throughout the buying or selling process.' },
  { title: 'End-to-End Support', text: "From property search to registration, we're with you at every stage." },
]

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Property Buyer', rating: 5, quote: 'Dhisha Realty helped us find the perfect residential plot. The entire process was transparent and professional. Truly a team you can trust.' },
  { name: 'Priya Sharma', role: 'Investor', rating: 5, quote: 'Excellent customer support and genuine property options. They guided me through every step. Highly recommended for property investments.' },
  { name: 'Arjun Nair', role: 'First-time Buyer', rating: 5, quote: 'The team guided us through every step, making our property purchase stress-free and smooth. Outstanding service from start to finish.' },
]

const faqs = [
  { q: 'What types of properties does Dhisha Realty offer?', a: 'We offer residential plots, apartments, villas, independent houses, commercial spaces, and retail properties across prime locations.' },
  { q: 'Are all listed properties legally verified?', a: 'Yes, every property listed with us undergoes thorough legal verification including title checks, DTCP/RERA approvals, and ownership documentation review.' },
  { q: 'Do you assist with home loans and financing?', a: 'We have partnerships with leading banks and financial institutions to help you secure the best loan options with competitive interest rates.' },
  { q: 'How do I schedule a property site visit?', a: 'Simply contact us via phone, email, or the contact form on our website. Our team will schedule a convenient visit at your preferred time.' },
  { q: 'What is the process for selling my property through Dhisha Realty?', a: 'We handle everything — property valuation, marketing, buyer matching, negotiations, and documentation — to ensure a quick, hassle-free sale.' },
  { q: 'Do you handle RERA registration and legal documentation?', a: 'Yes, our legal support team assists with RERA registration, sale deed drafting, stamp duty, and all related property documentation.' },
]

function StatItem({ s, i }) {
  const { display, ref } = useCountUp(s.value, 2000, s.suffix)
  return (
    <article className={`stats-band__item reveal reveal-delay-${i + 1}`}>
      <strong className="stats-band__value" ref={ref}>{display}</strong>
      <span className="stats-band__label">{s.label}</span>
      <small className="stats-band__desc">{s.desc}</small>
    </article>
  )
}

/* ── COMPONENT ── */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  useScrollReveal()

  const nextSlide = useCallback(() => {
    setActiveSlide((p) => (p + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <main className="home">

      {/* ── HERO SLIDER ── */}
      <section className="hero" aria-label="Featured property showcase">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero__slide${i === activeSlide ? ' hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay */}
        <div className="hero__overlay" />

        {/* Content */}
        <div className="hero__content">
          <p className="hero__tag">{heroSlides[activeSlide].tag}</p>
          <h1 className="hero__heading">
            {heroSlides[activeSlide].heading.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="hero__sub">{heroSlides[activeSlide].sub}</p>
          <div className="hero__actions">
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        {/* Dots */}
        <div className="hero__dots" role="tablist" aria-label="Slide navigation">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeSlide}
              className={`hero__dot${i === activeSlide ? ' hero__dot--active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-band" aria-label="Key statistics">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} i={i} />
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section className="home-section home-section--light" id="services">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title">Comprehensive Real Estate Services</h2>
            <p className="section-subtitle">
              From finding your dream property to legal documentation — we handle it all with
              expertise and transparency.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article key={s.title} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="service-card__line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="container why-section__grid">
          <div className="why-section__visual reveal from-left">
            <div className="why-section__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                alt="Modern residential building"
                loading="lazy"
              />
              <div className="why-badge">
                <strong>95%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="why-section__content">
            <p className="section-kicker reveal">Why Choose Dhisha Realty?</p>
            <h2 className="section-title reveal reveal-delay-1">Clear guidance from search to registration</h2>
            <div className="reason-list">
              {reasons.map((r, i) => (
                <article key={r.title} className={`reason-item reveal reveal-delay-${i + 1}`}>
                  <div className="reason-item__num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-kicker">Featured Properties</p>
            <h2 className="section-title">Selected Opportunities for Every Goal</h2>
          </div>
          <div className="fp-grid">
            {[
              { title: 'Premium Residential Plot', tag: 'Plots', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80', pts: ['Prime Location', 'DTCP / RERA Approved', 'Excellent Road Connectivity', 'Ready for Construction'] },
              { title: 'Luxury Villa', tag: 'Villas', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', pts: ['Modern Architecture', 'Spacious Interiors', 'Premium Amenities', 'Secure Community Living'] },
              { title: 'Commercial Space', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', pts: ['High Visibility Location', 'Business-Friendly Environment', 'Excellent Investment Potential'] },
            ].map((p, i) => (
              <article key={p.title} className={`fp-card reveal reveal-delay-${i + 1}`}>
                <div className="fp-card__img-wrap">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="fp-card__tag">{p.tag}</span>
                </div>
                <div className="fp-card__body">
                  <h3>{p.title}</h3>
                  <ul>
                    {p.pts.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                  <Link to="/properties" className="fp-card__link">View Details →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link to="/properties" className="btn btn-dark">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="home-section testimonials-section">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 52px' }}>
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Hear from homeowners, investors, and businesses who trusted Dhisha Realty.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <article key={t.name} className={`testi-card reveal reveal-delay-${i + 1}`}>
                <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote>"{t.quote}"</blockquote>
                <footer>
                  <div className="testi-card__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="home-section home-section--light">
        <div className="container faq-wrap">
          <div className="section-head reveal">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about working with Dhisha Realty.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <article
                key={i}
                className={`faq-item reveal reveal-delay-${(i % 3) + 1}${openFaq === i ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-item__icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__a">
                  <p>{faq.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner reveal scale">
        <div className="cta-banner__bg" />
        <div className="cta-banner__content">
          <p className="section-kicker" style={{ color: 'var(--accent-light)' }}>Ready to Begin?</p>
          <h2>Find Your Perfect Property Today</h2>
          <p>
            Whether you're buying your first home, investing in land, or expanding your business space,
            Dhisha Realty is here to help. <strong>Let's Build Your Future Together.</strong>
          </p>
          <div className="cta-banner__actions">
            <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
