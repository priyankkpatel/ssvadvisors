import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Home, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';

export default function ServicesPillars() {
  const pillars = [
    {
      title: 'Tax & Compliance',
      subtitle: 'Financial Security & Legal Compliance',
      icon: <FileText size={32} />,
      desc: 'Removing compliance obstacles to pave the way for your financial growth and business success.',
      bullets: [
        'Income Tax Return (ITR) Filing',
        'GST Registration & Monthly Returns',
        'Accounting & Bookkeeping Services',
        'MSME (Udyam) Registration',
        'Home, Business & Personal Loans',
      ],
      link: '/tax-services',
      btnText: 'Explore Tax Services',
      color: 'maroon',
    },
    {
      title: 'Real Estate Advisory',
      subtitle: 'Auspicious Properties & Transparent Deals',
      icon: <Home size={32} />,
      desc: 'Guiding you through new beginnings in finding your dream home, shop, or showroom space.',
      bullets: [
        'Property Sale & Purchase',
        'Residential Houses & Tenements',
        'Commercial Shops & Showrooms',
        'Property Rental & Leasing',
        'Title Verification & Advisory',
      ],
      link: '/real-estate',
      btnText: 'Explore Properties',
      color: 'orange',
    },
  ];

  return (
    <section className="pillars-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Service Pillars</h2>
          <p className="section-subtitle">
            Combining corporate compliance expertise with transparent real estate advisory under one auspicious roof.
          </p>
          <GaneshaSvg type="divider" />
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`pillar-card ${pillar.color === 'maroon' ? 'pillar-maroon' : 'pillar-orange'}`}>
              <div className="pillar-top">
                <div className="pillar-icon-wrap">{pillar.icon}</div>
                <div className="pillar-title-block">
                  <h3>{pillar.title}</h3>
                  <span className="pillar-sub">{pillar.subtitle}</span>
                </div>
              </div>
              
              <p className="pillar-desc">{pillar.desc}</p>
              
              <ul className="pillar-bullets">
                {pillar.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={16} className="bullet-check" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pillar-footer">
                <Link to={pillar.link} className={`btn ${pillar.color === 'maroon' ? 'btn-secondary' : 'btn-primary'} w-full`}>
                  {pillar.btnText} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-section {
          background-color: var(--bg-cream);
          position: relative;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 20px;
        }
        .pillar-card {
          background-color: var(--bg-white);
          border-radius: 16px;
          padding: 40px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
        }
        .pillar-maroon::before {
          background-color: var(--secondary-maroon);
        }
        .pillar-orange::before {
          background-color: var(--primary-orange);
        }
        .pillar-maroon:hover {
          border-color: rgba(122, 31, 43, 0.3);
        }
        .pillar-orange:hover {
          border-color: rgba(232, 117, 42, 0.3);
        }
        .pillar-top {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }
        .pillar-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-white);
        }
        .pillar-maroon .pillar-icon-wrap {
          background-color: var(--secondary-maroon);
          box-shadow: 0 4px 10px rgba(122, 31, 43, 0.2);
        }
        .pillar-orange .pillar-icon-wrap {
          background-color: var(--primary-orange);
          box-shadow: 0 4px 10px rgba(232, 117, 42, 0.2);
        }
        .pillar-title-block h3 {
          font-size: 1.6rem;
          margin-bottom: 3px;
        }
        .pillar-sub {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pillar-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .pillar-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 35px;
          flex-grow: 1;
        }
        .pillar-bullets li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--text-dark);
          font-weight: 500;
        }
        .bullet-check {
          flex-shrink: 0;
        }
        .pillar-maroon .bullet-check {
          color: var(--secondary-maroon);
        }
        .pillar-orange .bullet-check {
          color: var(--primary-orange);
        }
        .w-full {
          width: 100%;
        }
        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 576px) {
          .pillar-card {
            padding: 25px;
          }
          .pillar-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .pillar-title-block h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
