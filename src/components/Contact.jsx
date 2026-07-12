import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';
import InquiryForm from './InquiryForm';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container banner-content">
          <h1>Contact Us</h1>
          <p>
            Visit our office in Asarwa, Ahmedabad or consult online via call/WhatsApp. Start your shubh shuruaat today.
          </p>
        </div>
      </section>

      {/* Main Grid section */}
      <section className="section-padding contact-main-section">
        <div className="container contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-panel">
            <div className="trust-badge-mini">
              <span>Office Details</span>
            </div>
            <h2>Get in Touch</h2>
            <p className="contact-panel-desc">
              For return filings, business registrations, home loans, or property queries, contact our Asarwa desk directly.
            </p>

            <div className="info-cards-stack">
              {/* Card 1: Phone */}
              <div className="info-card">
                <div className="info-card-icon"><Phone size={20} /></div>
                <div className="info-card-text">
                  <h4>Call Us</h4>
                  <a href="tel:+917818098961" className="info-link">+91 78180 98961</a>
                  <p className="sub-text">Mon - Sat, 10:00 AM - 7:30 PM</p>
                </div>
              </div>

              {/* Card 2: WhatsApp */}
              <div className="info-card">
                <div className="info-card-icon whatsapp-accent"><MessageSquare size={20} /></div>
                <div className="info-card-text">
                  <h4>WhatsApp Chat</h4>
                  <a
                    href="https://wa.me/917818098961?text=Hello%20Tirthbhai,%20I'd%20like%20to%20consult%20regarding%20tax%20or%20property%20deal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link whatsapp-color-text"
                  >
                    Click to Chat (Pre-filled template)
                  </a>
                  <p className="sub-text">Quick response within 2 hours</p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="info-card">
                <div className="info-card-icon"><Mail size={20} /></div>
                <div className="info-card-text">
                  <h4>Email Address</h4>
                  <a href="mailto:ssvadvisors0722@gmail.com" className="info-link">ssvadvisors0722@gmail.com</a>
                  <p className="sub-text">Send document scans securely</p>
                </div>
              </div>

              {/* Card 4: Address */}
              <div className="info-card">
                <div className="info-card-icon"><MapPin size={20} /></div>
                <div className="info-card-text">
                  <h4>Our Office</h4>
                  <p className="address-text">
                    A-406, Abhishek Complex-1, <br />
                    Haripura, Asarwa, <br />
                    Ahmedabad, Gujarat - 380016
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            <div className="form-wrapper-shadow">
              <InquiryForm initialMode="tax" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section-full">
        <iframe
          title="Shree Siddhivinayak Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3090710665485!2d72.60742117586566!3d23.04910241530932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c18eaaaaab%3A0xe54e6aa0eb27435f!2sAbhishek%20Complex%2C%20Haripura%2C%20Asarwa%2C%20Ahmedabad%2C%20Gujarat%20380016!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <style>{`
        .contact-main-section {
          background-color: var(--bg-cream);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: flex-start;
        }
        .contact-info-panel h2 {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }
        .contact-panel-desc {
          color: var(--text-muted);
          margin-bottom: 30px;
          font-size: 0.98rem;
        }
        .info-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          display: flex;
          gap: 15px;
          background-color: var(--bg-white);
          padding: 20px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .info-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-cream);
          color: var(--secondary-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-card-icon.whatsapp-accent {
          background-color: rgba(37, 211, 102, 0.1);
          color: #25D366;
        }
        .info-card-text h4 {
          font-size: 1.05rem;
          margin-bottom: 4px;
          color: var(--text-dark);
        }
        .info-link {
          font-weight: 700;
          color: var(--secondary-maroon);
          font-size: 1rem;
          transition: var(--transition-fast);
        }
        .info-link:hover {
          color: var(--primary-orange);
        }
        .whatsapp-color-text {
          color: #128C7E;
        }
        .sub-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 3px;
        }
        .address-text {
          font-size: 0.95rem;
          color: var(--text-dark);
          line-height: 1.5;
          font-weight: 500;
        }
        .contact-form-panel {
          position: sticky;
          top: 130px;
        }
        .form-wrapper-shadow {
          box-shadow: var(--shadow-lg);
          border-radius: 12px;
          overflow: hidden;
        }
        .map-section-full {
          border-top: 3px solid var(--accent-gold);
          border-bottom: 1px solid var(--border-color);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-panel {
            position: static;
          }
        }
      `}</style>
    </div>
  );
}
