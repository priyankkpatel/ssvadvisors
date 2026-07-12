import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Calendar, ArrowRight } from 'lucide-react';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import ServicesPillars from './ServicesPillars';
import Testimonials from './Testimonials';
import InquiryForm from './InquiryForm';
import GaneshaSvg from './GaneshaSvg';
import ganeshaHisab from '../assets/ganesha_hisab.png';

export default function Home() {
  return (
    <div className="home-dashboard">
      {/* 1. Hero Block */}
      <Hero />

      {/* 2. Trust Counters Strip */}
      <TrustStrip />

      {/* 3. Service Pillars */}
      <ServicesPillars />

      {/* 4. Short Founder Intro Section */}
      <section className="home-about-intro section-padding">
        <div className="container intro-grid">
          <div className="intro-copy">
            <div className="trust-badge-mini">
              <span>Why Choose Shree Siddhivinayak</span>
            </div>
            <h2>Clear Obstacles & Prosper</h2>
            <p className="intro-tagline">Removing compliance complexities & securing lifetime investments.</p>
            <p>
              Under the direct leadership of <strong>Tirth Patel</strong>, we manage tax returns, GST registrations, accounting ledgers, and real estate purchases under one unified desk in Ahmedabad.
            </p>
            <p>
              We believe in transparency, ethical negotiations, and long-term relationships. Whether it is your monthly GST compliance filing or buying a family home in Asarwa, we ensure a smooth, worry-free start.
            </p>
            
            <div className="intro-benefits">
              <div className="benefit-item">
                <ShieldCheck size={20} className="b-icon" />
                <div>
                  <h4>100% Tax Compliance Audit</h4>
                  <p>Accurate GST, ITR, and accounting records, avoiding interest penalties.</p>
                </div>
              </div>
              <div className="benefit-item">
                <UserCheck size={20} className="b-icon" />
                <div>
                  <h4>Transparent Property Deals</h4>
                  <p>Historical title search and verified registrar files for dispute-free property transfers.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-secondary intro-cta">
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="intro-graphic-card">
            <div className="graphic-gold-circle">
              <img src={ganeshaHisab} alt="Lord Ganesha writing business accounts (Hisab)" className="graphic-hisab-img" />
            </div>
            <div className="graphic-badge">
              <span className="badge-num">10+</span>
              <span className="badge-text">Years of Trusted Advisory</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Carousel */}
      <Testimonials />

      {/* 6. Quick Contact Panel */}
      <section className="home-contact-form-section section-padding">
        <div className="container contact-form-grid">
          <div className="contact-form-header">
            <h2>Start Your Shubh Shuruaat</h2>
            <p className="sub-text">
              Have questions about tax filings, GST registration, home loans, or property buy/sell listings in Asarwa? Send us a quick query.
            </p>
            
            <div className="contact-summary-links">
              <p>
                <strong>Office Address:</strong> A-406, Abhishek Complex-1, Haripura, Asarwa, Ahmedabad, Gujarat - 380016
              </p>
              <p>
                <strong>Call Advisor:</strong> <a href="tel:+917818098961" className="text-link">+91 78180 98961</a>
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <InquiryForm initialMode="tax" />
          </div>
        </div>
      </section>

      <style>{`
        .home-about-intro {
          background-color: var(--bg-cream-dark);
          position: relative;
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        .intro-tagline {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--secondary-maroon);
          font-style: italic;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .intro-copy p {
          color: var(--text-muted);
          margin-bottom: 15px;
          font-size: 0.98rem;
          line-height: 1.6;
        }
        .intro-benefits {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 25px 0 35px 0;
        }
        .benefit-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }
        .b-icon {
          color: var(--primary-orange);
          flex-shrink: 0;
          background-color: rgba(232, 117, 42, 0.08);
          padding: 8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .benefit-item h4 {
          font-size: 1.1rem;
          margin-bottom: 3px;
          color: var(--text-dark);
        }
        .benefit-item p {
          font-size: 0.85rem;
          margin: 0;
        }
        .intro-cta {
          align-self: flex-start;
        }
        .intro-graphic-card {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .graphic-gold-circle {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px dashed var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-white);
          box-shadow: var(--shadow-lg);
        }
        .graphic-hisab-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--accent-gold);
          transition: var(--transition-smooth);
        }
        .graphic-gold-circle:hover .graphic-hisab-img {
          transform: scale(1.05);
        }
        .graphic-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: var(--secondary-maroon);
          color: var(--bg-cream);
          border: 2.5px solid var(--accent-gold);
          border-radius: 12px;
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-lg);
          text-align: center;
        }
        .badge-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-gold);
          font-family: var(--font-heading);
          line-height: 1;
        }
        .badge-text {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          color: #D1D5DB;
        }
        .home-contact-form-section {
          background-color: var(--bg-cream);
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 50px;
          align-items: center;
        }
        .contact-form-header h2 {
          font-size: 2.4rem;
          margin-bottom: 15px;
        }
        .contact-form-header .sub-text {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .contact-summary-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-size: 0.95rem;
          color: var(--text-dark);
          background-color: var(--bg-cream-dark);
          padding: 20px;
          border-radius: 8px;
          border-left: 3.5px solid var(--primary-orange);
        }
        .text-link {
          color: var(--secondary-maroon);
          font-weight: 700;
          transition: var(--transition-fast);
        }
        .text-link:hover {
          color: var(--primary-orange);
        }
        .contact-form-wrap {
          box-shadow: var(--shadow-xl);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .intro-graphic-card {
            order: -1;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 576px) {
          .contact-form-header h2 {
            font-size: 1.8rem;
          }
          .graphic-gold-circle {
            width: 250px;
            height: 250px;
          }
          .graphic-badge {
            position: static;
            margin-top: 15px;
          }
          .intro-graphic-card {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
