import React from 'react';
import { ShieldCheck, Award, ThumbsUp, Landmark, Flame } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';
import founder from '../assets/founder.jpg';

export default function About() {
  return (
    <div className="about-page">
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container banner-content">
          <h1>About Shree Siddhivinayak</h1>
          <p>
            Bridging trust, compliance, and wealth creation for local families and businesses in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-padding founder-section">
        <div className="container founder-grid">
          {/* Avatar / Photo mockup */}
          <div className="founder-visual">
            <div className="visual-circle">
              <img src={founder} alt="Tirth Patel - Founder & Managing Partner" className="visual-hisab-img" />
              <div className="visual-overlay-card">
                <h3>Tirth Patel</h3>
                <p>Founder & Managing Partner</p>
              </div>
            </div>
          </div>

          {/* Biography copy */}
          <div className="founder-copy">
            <div className="trust-badge-mini">
              <span>Founder's Profile</span>
            </div>
            <h2>Meet Tirth Patel</h2>
            <p className="lead-para">
              Welcome to Shree Siddhivinayak Tax Consultant & Real Estate. Under the leadership of Tirth Patel, our firm has grown as a local beacon of trust in Asarwa, Ahmedabad.
            </p>
            <p>
              We established this combined advisory practice with a simple vision: to eliminate the separate struggles clients face when managing business compliances (like GST, ITR, accounting) and making major lifetime investments (buying, selling, or renting properties and securing home loans).
            </p>
            <p>
              Tirth Patel combines years of local property advisory experience with a dedicated team of tax compliance assistants and legal liaisons. By housing both tax returns and real estate advisory under one roof, we provide clients with unparalleled continuity—verifying property registry files while coordinating the exact loan portfolios to fund them.
            </p>

            <div className="credentials-box">
              <Award size={20} className="cred-icon" />
              <div>
                <h4>Credentials & Association</h4>
                <p>Authorized MSME Udyam registrar partners, pan-bank certified loan advisors, and trusted real estate negotiators in Ahmedabad East.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="section-header">
            <h2>The Ganesha Philosophy</h2>
            <p>How the symbol of Lord Ganesha (Siddhivinayak) guides our daily corporate service standards.</p>
            <GaneshaSvg type="divider" />
          </div>

          <div className="philosophy-grid">
            <div className="ph-card">
              <div className="ph-icon-wrap"><Flame size={24} /></div>
              <h3>Vighnaharta (Obstacle Remover)</h3>
              <p>
                Compliance paperwork, tax audits, or property title disputes can feel like massive obstacles. We act as your "Vighnaharta," handling the complex drafting, filing, and vetting so your path is completely clear.
              </p>
            </div>
            <div className="ph-card">
              <div className="ph-icon-wrap"><Landmark size={24} /></div>
              <h3>Shubh Shuruaat (Auspicious Beginnings)</h3>
              <p>
                Whether incorporating your new startup with a GST number or stepping foot into your newly purchased family home, we make sure every transaction is executed with transparency and blessings.
              </p>
            </div>
            <div className="ph-card">
              <div className="ph-icon-wrap"><ShieldCheck size={24} /></div>
              <h3>Sahi Salah (Ethical & True Advice)</h3>
              <p>
                Trust is the foundation of both taxation and real estate. We practice absolute honesty in pricing, zero hidden charges, and realistic tax planning to ensure your prosperity is built on solid, legal ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .founder-section {
          background-color: var(--bg-cream);
        }
        .founder-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }
        .founder-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .visual-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--secondary-maroon) 0%, var(--primary-orange) 100%);
          border: 4px solid var(--accent-gold);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-xl);
          overflow: hidden;
        }
        .visual-hisab-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--accent-gold);
          transition: var(--transition-smooth);
        }
        .visual-circle:hover .visual-hisab-img {
          transform: scale(1.05);
        }
        .visual-overlay-card {
          position: absolute;
          bottom: 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 8px;
          padding: 12px 20px;
          box-shadow: var(--shadow-md);
          text-align: center;
          border-left: 3px solid var(--primary-orange);
        }
        .visual-overlay-card h3 {
          font-size: 1.1rem;
          margin-bottom: 2px;
        }
        .visual-overlay-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .founder-copy h2 {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        .lead-para {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--secondary-maroon);
          margin-bottom: 20px;
        }
        .founder-copy p {
          color: var(--text-muted);
          margin-bottom: 15px;
          font-size: 0.95rem;
        }
        .credentials-box {
          display: flex;
          gap: 15px;
          background-color: var(--bg-cream-dark);
          border-radius: 8px;
          padding: 20px;
          border-left: 3.5px solid var(--accent-gold);
          margin-top: 25px;
        }
        .cred-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        .credentials-box h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .credentials-box p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .philosophy-section {
          background-color: var(--bg-cream-dark);
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 20px;
        }
        .ph-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
          border: 1.5px solid var(--border-color);
          text-align: center;
          transition: var(--transition-smooth);
        }
        .ph-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-lg);
        }
        .ph-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: var(--bg-cream);
          color: var(--primary-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          box-shadow: var(--shadow-sm);
        }
        .ph-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--secondary-maroon);
        }
        .ph-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        @media (max-width: 992px) {
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
