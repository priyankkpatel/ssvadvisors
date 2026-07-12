import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <GaneshaSvg type="logo" className="logo-svg-footer" />
            <h3>Shree Siddhivinayak</h3>
          </div>
          <p className="footer-tagline">"Shubh Shuruaat, Sahi Salah"</p>
          <p className="footer-desc">
            Removing compliance and real estate obstacles, ensuring prosperous beginnings for your financial chapters and dream properties under one roof.
          </p>
          <div className="contact-list">
            <a href="tel:+917818098961" className="contact-item">
              <Phone size={16} /> <span>+91 78180 98961</span>
            </a>
            <a href="mailto:ssvadvisors0722@gmail.com" className="contact-item">
              <Mail size={16} /> <span>ssvadvisors0722@gmail.com</span>
            </a>
            <div className="contact-item align-start">
              <MapPin size={24} className="flex-shrink-0" />
              <span>A-406, Abhishek Complex-1, Haripura, Asarwa, Ahmedabad, Gujarat - 380016</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links & Services */}
        <div className="footer-col">
          <h4>Services Menu</h4>
          <ul className="footer-links">
            <li>
              <Link to="/tax-services"><ArrowUpRight size={14} /> Tax Compliance</Link>
            </li>
            <li>
              <Link to="/tax-services"><ArrowUpRight size={14} /> GST Registration & Return</Link>
            </li>
            <li>
              <Link to="/tax-services"><ArrowUpRight size={14} /> ITR Filing (Income Tax)</Link>
            </li>
            <li>
              <Link to="/tax-services"><ArrowUpRight size={14} /> MSME / Udyam Registration</Link>
            </li>
            <li>
              <Link to="/tax-services"><ArrowUpRight size={14} /> Home & Business Loans</Link>
            </li>
            <li>
              <Link to="/real-estate"><ArrowUpRight size={14} /> Real Estate Advisory</Link>
            </li>
            <li>
              <Link to="/real-estate"><ArrowUpRight size={14} /> Buy / Sell Properties</Link>
            </li>
            <li>
              <Link to="/real-estate"><ArrowUpRight size={14} /> Rental Shops & Houses</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Hours & Map */}
        <div className="footer-col map-col">
          <h4>Office Location</h4>
          <div className="hours-block">
            <Clock size={16} />
            <div>
              <p className="hours-label">Business Hours:</p>
              <p>Monday - Saturday: 10:00 AM - 7:30 PM</p>
              <p className="sunday-text">Sunday: Closed (Available on call)</p>
            </div>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Shree Siddhivinayak Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3090710665485!2d72.60742117586566!3d23.04910241530932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c18eaaaaab%3A0xe54e6aa0eb27435f!2sAbhishek%20Complex%2C%20Haripura%2C%20Asarwa%2C%20Ahmedabad%2C%20Gujarat%20380016!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <hr className="footer-divider" />
      </div>

      {/* Bottom Section with Disclaimer */}
      <div className="container footer-bottom">
        <p className="disclaimer-text">
          <strong>Disclaimer:</strong> Shree Siddhivinayak Tax Consultant & Real Estate is an independent consulting & advisory firm. Information provided on this platform is for general informational purposes only and does not constitute official legal, investment, or statutory financial advice. Property transactions and tax filings are subject to verification of title deeds, government rules, and compliance regulations. We encourage clients to conduct due diligence before execution.
        </p>
        <div className="copyright-wrap">
          <p>© {currentYear} Shree Siddhivinayak. All Rights Reserved. Managed by Tirth Patel.</p>
          <div className="ganesha-emblem">
            <span>Blessed by Siddhivinayak</span>
            <GaneshaSvg type="logo" className="logo-svg-emblem" />
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #111827; /* Dark charcoal */
          color: #E5E7EB;
          padding: 70px 0 30px 0;
          border-top: 3px solid var(--accent-gold);
          font-size: 0.9rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 50px;
          margin-bottom: 40px;
        }
        .footer-col h4 {
          color: var(--accent-gold);
          font-size: 1.2rem;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 35px;
          height: 2px;
          background-color: var(--primary-orange);
        }
        .brand-col .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        .brand-col h3 {
          color: var(--bg-cream);
          font-family: var(--font-heading);
          font-size: 1.6rem;
        }
        .logo-svg-footer {
          color: var(--accent-gold);
        }
        .footer-tagline {
          font-style: italic;
          color: var(--primary-orange);
          font-weight: 600;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }
        .footer-desc {
          color: #9CA3AF;
          margin-bottom: 25px;
          line-height: 1.5;
        }
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #D1D5DB;
          transition: var(--transition-fast);
        }
        .contact-item:hover {
          color: var(--primary-orange);
        }
        .align-start {
          align-items: flex-start;
        }
        .flex-shrink-0 {
          flex-shrink: 0;
          color: var(--accent-gold);
        }
        .footer-links {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        .footer-links li a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #9CA3AF;
          transition: var(--transition-fast);
        }
        .footer-links li a:hover {
          color: var(--accent-gold);
          transform: translateX(3px);
        }
        .hours-block {
          display: flex;
          gap: 10px;
          background-color: #1F2937;
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid var(--accent-gold);
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .hours-label {
          font-weight: 600;
          color: var(--accent-gold);
          margin-bottom: 3px;
        }
        .sunday-text {
          color: #EF4444;
          font-weight: 500;
        }
        .map-wrapper {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #374151;
        }
        .footer-divider {
          border: 0;
          height: 1px;
          background-color: #374151;
          margin: 20px 0;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: #9CA3AF;
          font-size: 0.8rem;
          line-height: 1.5;
        }
        .disclaimer-text {
          text-align: justify;
        }
        .copyright-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          border-top: 1px solid #1F2937;
          padding-top: 20px;
        }
        .ganesha-emblem {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .logo-svg-emblem {
          width: 25px;
          height: 25px;
          color: var(--accent-gold);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .copyright-wrap {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
