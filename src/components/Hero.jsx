import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Subtle Background elements */}
      <div className="hero-bg-accent"></div>
      <div className="hero-watermark-wrap">
        <GaneshaSvg type="hero" className="hero-ganesha-watermark" />
      </div>

      <div className="container hero-container-grid">
        {/* Left Column: Headline copy */}
        <div className="hero-copy animate-fade-in">
          <div className="trust-badge-mini">
            <span>🕉 Trusted Financial & Property Partners</span>
          </div>
          <h1>
            Shubh Shuruaat, <br />
            <span className="text-highlight">Sahi Salah</span>
          </h1>
          <p className="hero-tagline-sub">Auspicious beginnings, reliable guidance.</p>
          <p className="hero-description">
            Remove compliance complexities and property purchase obstacles. Under the guidance of <strong>Tirth Patel</strong>, we help you start new business registrations, file tax returns, secure home loans, and secure your dream real estate in Ahmedabad.
          </p>

          <div className="hero-ctas">
            <a
              href="https://wa.me/917818098961?text=Hello%20Tirthbhai,%20I%20would%20like%20to%20book%20a%20free%20consultation%20with%20Shree%20Siddhivinayak%20Associates."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} /> Book Free Consultation
            </a>
            <Link to="/tax-services" className="btn btn-outline-white">
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="quick-points">
            <div className="point-item">
              <span className="point-dot">•</span>
              <span>100% Transparent Fees</span>
            </div>
            <div className="point-item">
              <span className="point-dot">•</span>
              <span>Local Ahmedabad Office</span>
            </div>
            <div className="point-item">
              <span className="point-dot">•</span>
              <span>Government Approved Filings</span>
            </div>
          </div>
        </div>

        {/* Right Column: Mini Promo Card / Founder Info */}
        <div className="hero-card-column animate-fade-in">
          <div className="promo-card">
            <div className="promo-card-gold-accent"></div>
            <div className="promo-avatar">
              <div className="avatar-letter">T</div>
            </div>
            <div className="founder-details">
              <h4>Tirth Patel</h4>
              <p className="founder-title">Founder & Principal Advisor</p>
              <span className="location-tag">Ahmedabad, Gujarat</span>
            </div>
            
            <hr className="promo-divider" />
            
            <div className="promo-info">
              <div className="info-row">
                <span className="info-label">Consultancy:</span>
                <span className="info-val">Taxation, GST, Loans</span>
              </div>
              <div className="info-row">
                <span className="info-label">Real Estate:</span>
                <span className="info-val">Residential & Commercial</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone:</span>
                <a href="tel:+917818098961" className="info-val link-phone">+91 78180 98961</a>
              </div>
            </div>

            <a
              href="tel:+917818098961"
              className="btn btn-secondary w-full promo-cta-btn"
            >
              <Phone size={16} /> Click to Call Office
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, var(--secondary-maroon) 0%, #5E0E16 100%); /* Crimson gradient */
          color: var(--bg-cream);
          padding: 100px 0 120px 0;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-bg-accent {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(232, 117, 42, 0.15) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          pointer-events: none;
        }
        .hero-watermark-wrap {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          width: 450px;
          height: 450px;
          opacity: 0.12;
          color: var(--accent-gold);
          pointer-events: none;
          z-index: 0;
        }
        .hero-ganesha-watermark {
          width: 100%;
          height: 100%;
        }
        .hero-container-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          position: relative;
          z-index: 1;
          align-items: center;
        }
        .trust-badge-mini {
          display: inline-block;
          background-color: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--accent-gold);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--accent-gold);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .hero-copy h1 {
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--bg-cream);
          margin-bottom: 10px;
        }
        .text-highlight {
          color: var(--accent-gold);
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .hero-tagline-sub {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-style: italic;
          color: var(--primary-orange);
          margin-bottom: 25px;
          font-weight: 500;
        }
        .hero-description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #E5E7EB;
          margin-bottom: 35px;
          max-width: 650px;
        }
        .hero-ctas {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }
        .btn-outline-white {
          background-color: transparent;
          color: var(--bg-cream);
          border: 2px solid var(--bg-cream);
        }
        .btn-outline-white:hover {
          background-color: var(--bg-cream);
          color: var(--secondary-maroon);
        }
        .quick-points {
          display: flex;
          gap: 25px;
        }
        .point-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
        }
        .point-dot {
          color: var(--primary-orange);
          font-size: 1.2rem;
        }
        /* Promo Card Styling */
        .promo-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 35px;
          position: relative;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }
        .promo-card-gold-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-orange), var(--accent-gold));
        }
        .promo-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-orange), var(--secondary-maroon));
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2.5px solid var(--accent-gold);
          margin-bottom: 15px;
          box-shadow: var(--shadow-md);
        }
        .avatar-letter {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--bg-cream);
        }
        .founder-details h4 {
          color: var(--bg-cream);
          font-size: 1.4rem;
          margin-bottom: 2px;
        }
        .founder-title {
          font-size: 0.85rem;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 5px;
        }
        .location-tag {
          font-size: 0.75rem;
          background-color: rgba(232, 117, 42, 0.25);
          padding: 3px 10px;
          border-radius: 12px;
          font-weight: 600;
          color: var(--bg-cream);
        }
        .promo-divider {
          border: 0;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.15);
          margin: 20px 0;
        }
        .promo-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 25px;
          font-size: 0.9rem;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
        }
        .info-label {
          color: #9CA3AF;
          font-weight: 500;
        }
        .info-val {
          font-weight: 600;
          color: var(--bg-cream);
        }
        .info-val.link-phone {
          color: var(--accent-gold);
          transition: var(--transition-fast);
        }
        .info-val.link-phone:hover {
          color: var(--primary-orange);
        }
        .promo-cta-btn {
          font-size: 0.9rem;
        }
        @media (max-width: 992px) {
          .hero-container-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-watermark-wrap {
            width: 300px;
            height: 300px;
          }
          .hero-copy h1 {
            font-size: 2.8rem;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .quick-points {
            justify-content: center;
          }
          .promo-avatar {
            margin-left: auto;
            margin-right: auto;
          }
          .promo-info {
            text-align: left;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding: 60px 0;
          }
          .hero-copy h1 {
            font-size: 2.2rem;
          }
          .hero-tagline-sub {
            font-size: 1.25rem;
          }
          .hero-ctas {
            flex-direction: column;
            gap: 12px;
          }
          .quick-points {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
