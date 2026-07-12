import React from 'react';
import { Award, Users, BookOpen, Home } from 'lucide-react';

export default function TrustStrip() {
  const stats = [
    { icon: <Award size={36} />, value: '10+', label: 'Years of Trust' },
    { icon: <Users size={36} />, value: '500+', label: 'Happy Families' },
    { icon: <BookOpen size={36} />, value: '1,200+', label: 'Tax Returns Filed' },
    { icon: <Home size={36} />, value: '150+', label: 'Properties Handled' },
  ];

  return (
    <section className="trust-strip-section">
      <div className="container trust-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .trust-strip-section {
          background-color: var(--secondary-maroon);
          color: var(--accent-gold);
          padding: 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--shadow-md);
          position: relative;
          z-index: 1;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: center;
        }
        .stat-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 10px;
        }
        .stat-icon {
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 50%;
          border: 1px dashed rgba(212, 175, 55, 0.3);
        }
        .stat-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--bg-cream);
          font-family: var(--font-heading);
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #D1D5DB;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 992px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 576px) {
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .stat-card {
            flex-direction: column;
            text-align: center;
          }
          .stat-info {
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
