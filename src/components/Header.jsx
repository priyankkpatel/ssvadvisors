import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tax Services', path: '/tax-services' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Banner (Quick Contacts) */}
      <div className="top-banner">
        <div className="container top-banner-container">
          <span className="banner-tagline">🕉 Shubh Shuruaat, Sahi Salah</span>
          <div className="banner-contacts">
            <a href="tel:+917818098961" className="banner-link">
              <Phone size={14} /> +91 78180 98961
            </a>
            <a
              href="https://wa.me/917818098961?text=Hello%20Shree%20Siddhivinayak%20Associates,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="banner-link whatsapp-color"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo Brand */}
          <Link to="/" className="brand-logo">
            <div className="logo-icon-wrap">
              <GaneshaSvg type="logo" className="logo-svg" />
            </div>
            <div className="brand-text">
              <span className="brand-title">Shree Siddhivinayak</span>
              <span className="brand-sub">Tax Consultant & Real Estate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item-link ${isActive(item.path) ? 'active-link' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917818098961?text=Hello,%20I'm%20interested%20in%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-header-cta"
            >
              Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isOpen ? 'drawer-open' : ''}`}>
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'mobile-active-link' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-drawer-ctas">
              <a href="tel:+917818098961" className="btn btn-secondary w-full">
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/917818098961?text=Hello,%20I'm%20interested%20in%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <MessageCircle size={18} /> WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Styles local to Header */}
      <style>{`
        .top-banner {
          background-color: var(--secondary-maroon);
          color: var(--accent-gold);
          font-size: 0.85rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1001;
          position: relative;
        }
        .top-banner-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .banner-tagline {
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .banner-contacts {
          display: flex;
          gap: 20px;
        }
        .banner-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--bg-cream);
          transition: var(--transition-fast);
        }
        .banner-link:hover {
          color: var(--accent-gold);
        }
        .banner-link.whatsapp-color {
          color: #25D366;
        }
        .banner-link.whatsapp-color:hover {
          color: #128C7E;
        }
        .main-header {
          position: sticky;
          top: 0;
          background-color: rgba(252, 249, 244, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .header-scrolled {
          box-shadow: var(--shadow-md);
          background-color: var(--bg-cream);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon-wrap {
          background-color: var(--bg-cream-dark);
          color: var(--primary-orange);
          padding: 6px;
          border-radius: 50%;
          border: 1px solid var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-svg {
          color: var(--primary-orange);
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--secondary-maroon);
          line-height: 1.15;
        }
        .brand-sub {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        .nav-item-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark);
          position: relative;
          padding: 8px 0;
          transition: var(--transition-fast);
        }
        .nav-item-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-orange);
          transition: var(--transition-smooth);
        }
        .nav-item-link:hover {
          color: var(--primary-orange);
        }
        .nav-item-link:hover::after {
          width: 100%;
        }
        .active-link {
          color: var(--primary-orange);
          font-weight: 600;
        }
        .active-link::after {
          width: 100%;
        }
        .btn-header-cta {
          padding: 8px 20px;
          font-size: 0.85rem;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--secondary-maroon);
          cursor: pointer;
          padding: 5px;
        }
        .mobile-drawer {
          position: fixed;
          top: 110px; /* Banner (32px) + Header (80px) = 112px approx */
          left: 0;
          width: 100%;
          background-color: var(--bg-cream);
          border-bottom: 0 solid var(--accent-gold);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, border-bottom 0.4s ease-in-out;
          box-shadow: none;
          z-index: 999;
        }
        .drawer-open {
          max-height: 400px;
          border-bottom: 2.5px solid var(--accent-gold);
          box-shadow: var(--shadow-lg);
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 15px;
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-dark);
        }
        .mobile-active-link {
          color: var(--primary-orange);
          border-bottom-color: var(--primary-orange);
        }
        .mobile-drawer-ctas {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }
        .w-full {
          width: 100%;
        }
        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .top-banner-container {
            justify-content: center;
          }
          .banner-tagline {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .brand-title {
            font-size: 1.1rem;
          }
          .brand-sub {
            font-size: 0.65rem;
            letter-spacing: 0.2px;
          }
          .logo-icon-wrap {
            padding: 4px;
          }
          .header-container {
            height: 70px;
          }
          .mobile-drawer {
            top: 102px;
          }
          .mobile-drawer-ctas {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
