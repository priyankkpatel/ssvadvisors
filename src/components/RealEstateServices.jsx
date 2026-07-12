import React from 'react';
import { Home, Building, CheckCircle, MapPin } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';
import InquiryForm from './InquiryForm';

export default function RealEstateServices() {

  return (
    <div className="real-estate-page">
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container banner-content">
          <h1>Real Estate Advisory & Listings</h1>
          <p>
            Find your dream home, shop, or showroom with 100% legal title clearance, transparent terms, and Vaastu alignments.
          </p>
        </div>
      </section>

      {/* Advisory Pillar Overview */}
      <section className="section-padding advisory-overview-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Property Solutions</h2>
            <p>We guide clients through every phase of property purchase, leasing, and title verification.</p>
            <GaneshaSvg type="divider" />
          </div>

          <div className="advisory-grid">
            <div className="advisory-card">
              <div className="adv-icon"><CheckCircle size={24} /></div>
              <h3>100% Legal Title Search</h3>
              <p>We thoroughly verify historical registry logs, registry indices (Index-2), and builder plans to ensure dispute-free titles.</p>
            </div>
            <div className="advisory-card">
              <div className="adv-icon"><CheckCircle size={24} /></div>
              <h3>Vaastu Compliant Selections</h3>
              <p>Aligning your new home or showroom with positive energy directions for prosperity and success.</p>
            </div>
            <div className="advisory-card">
              <div className="adv-icon"><CheckCircle size={24} /></div>
              <h3>Loan Document Bundling</h3>
              <p>Since we handle loans under the same roof, we expedite property verification with bank panels for home loan approval.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Intake Form Section */}
      <section className="section-padding form-section-bg">
        <div className="container form-max-width">
          <div className="section-header">
            <h2>Submit Property Requirement</h2>
            <p>Tell us what you are looking for (Budget, Location, Size), and we will match you with listings.</p>
            <GaneshaSvg type="divider" />
          </div>
          <InquiryForm initialMode="property" />
        </div>
      </section>

      <style>{`
        .advisory-overview-section {
          background-color: var(--bg-cream);
        }
        .advisory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .advisory-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .advisory-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(212, 175, 55, 0.3);
        }
        .adv-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--bg-cream);
          color: var(--primary-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .advisory-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--secondary-maroon);
        }
        .advisory-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .listings-section {
          background-color: var(--bg-cream-dark);
        }
        .listings-filter-bar {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }
        .filter-btn {
          padding: 10px 24px;
          border-radius: 30px;
          border: 1.5px solid var(--secondary-maroon);
          background-color: transparent;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--secondary-maroon);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .filter-btn:hover, .active-filter {
          background-color: var(--secondary-maroon);
          color: var(--bg-cream);
        }
        .property-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }
        .property-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(232, 117, 42, 0.3);
        }
        .prop-badge-wrap {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          border-bottom: 1px dashed var(--border-color);
        }
        .prop-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 12px;
          letter-spacing: 0.5px;
        }
        .badge-buy {
          background-color: rgba(232, 117, 42, 0.15);
          color: var(--primary-orange);
        }
        .badge-rent {
          background-color: rgba(122, 31, 43, 0.15);
          color: var(--secondary-maroon);
        }
        .prop-status-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .prop-body {
          padding: 20px;
          flex-grow: 1;
        }
        .prop-title {
          font-size: 1.2rem;
          color: var(--secondary-maroon);
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .prop-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .prop-desc {
          font-size: 0.9rem;
          color: var(--text-dark);
          line-height: 1.5;
        }
        .prop-footer {
          padding: 15px 20px;
          background-color: var(--bg-cream);
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .prop-price {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--secondary-maroon);
          font-family: var(--font-heading);
        }
        .btn-sm {
          padding: 8px 18px;
          font-size: 0.85rem;
        }
        .disclaimer-block {
          max-width: 900px;
          margin: 30px auto 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-muted);
          background-color: var(--bg-white);
          padding: 12px 20px;
          border-radius: 8px;
          border-left: 3px solid var(--accent-gold);
        }
        .info-icon-disc {
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        .form-section-bg {
          background-color: var(--bg-cream);
        }
        .form-max-width {
          max-width: 750px;
          margin: 0 auto;
        }
        @media (max-width: 992px) {
          .advisory-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .listings-filter-bar {
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
          }
          .filter-btn {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
