import React from 'react';

/**
 * A highly polished, professional SVG line-art Ganesha symbol.
 * Prop `type` can be: 'logo', 'hero', 'divider', or 'watermark'.
 */
export default function GaneshaSvg({ type = 'logo', className = '', ...props }) {
  if (type === 'logo') {
    return (
      <svg
        width="45"
        height="45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE89C" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A88216" />
          </linearGradient>
          <linearGradient id="saffron-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA05E" />
            <stop offset="100%" stopColor="#E8752A" />
          </linearGradient>
        </defs>

        {/* Outer Premium Circular Seal */}
        <circle cx="50" cy="50" r="47" stroke="url(#gold-grad)" strokeWidth="2.5" opacity="0.95" />
        <circle cx="50" cy="50" r="43" stroke="url(#gold-grad)" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />

        {/* 1. Open Ledger Book/Register at the bottom (Hisab) */}
        {/* Book pages backdrop and outline */}
        <path
          d="M 28 78 C 34 73, 48 73, 48 79 C 48 73, 62 73, 68 78 L 68 86 C 62 81, 48 81, 48 87 C 48 81, 34 81, 28 86 Z"
          fill="#FFF"
          stroke="url(#gold-grad)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Center fold line */}
        <path d="M 48 79 V 87" stroke="url(#gold-grad)" strokeWidth="1.5" />
        
        {/* Text lines in ledger representing accounting rows (Hisab) */}
        <path d="M 32 77 H 42" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />
        <path d="M 32 80 H 44" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />
        <path d="M 32 83 H 40" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />
        <path d="M 54 77 H 64" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />
        <path d="M 52 80 H 64" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />
        <path d="M 54 83 H 62" stroke="var(--secondary-maroon)" strokeWidth="1" opacity="0.7" />

        {/* 2. Ganesha Gaze & Face details */}
        {/* Left Ear */}
        <path
          d="M 41 38 C 33 38 27 43 27 50 C 27 57 35 59 41 57"
          stroke="url(#saffron-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Right Ear */}
        <path
          d="M 59 38 C 67 38 73 43 73 50 C 73 57 65 59 59 57"
          stroke="url(#saffron-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Crown (Mukut) */}
        <path
          d="M 44 38 L 50 18 L 56 38 H 44Z"
          fill="url(#gold-grad)"
          stroke="url(#gold-grad)"
          strokeWidth="1.2"
        />
        <path d="M 47 38 L 50 26 L 53 38" stroke="#FFF" strokeWidth="1.5" />
        <circle cx="50" cy="14" r="2.5" fill="#E8752A" />

        {/* Head/Face profile */}
        <path
          d="M 50 38 C 47 43 47 47 50 51"
          stroke="url(#saffron-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        
        {/* Trunk curving down to the book */}
        <path
          d="M 50 51 C 52 53 54 57 54 62 C 54 67 47 69 43 69"
          stroke="url(#saffron-grad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Small Tusk */}
        <path d="M 44 54 H 39" stroke="url(#gold-grad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Tilak */}
        <path d="M 50 28 V 33" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="36" r="1.2" fill="url(#gold-grad)" />

        {/* 3. Peacock Quill Pen (Writing Hisab) */}
        {/* Feather plume */}
        <path
          d="M 64 36 C 60 36 57 41 57 47 C 57 53 61 57 65 57 C 69 57 72 52 71 46 C 70 40 67 36 64 36 Z"
          fill="url(#gold-grad)"
          opacity="0.85"
        />
        {/* Eye of peacock feather */}
        <path
          d="M 64 42 C 62 42 61 44 61 46 C 61 48 62 50 64 50 C 66 50 67 48 67 46 C 67 44 66 42 64 42 Z"
          fill="url(#saffron-grad)"
        />
        {/* Quill Shaft meeting the page */}
        <path
          d="M 64 46 L 52 75"
          stroke="url(#gold-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'hero') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="hero-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE89C" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A88216" />
          </linearGradient>
          <linearGradient id="hero-saffron-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA05E" />
            <stop offset="100%" stopColor="#E8752A" />
          </linearGradient>
        </defs>

        {/* Background halo */}
        <circle cx="100" cy="100" r="88" stroke="url(#hero-gold-grad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
        <circle cx="100" cy="100" r="78" stroke="url(#hero-gold-grad)" strokeWidth="0.75" opacity="0.3" />
        
        {/* Detailed Premium Ganesha Line-art */}
        <g strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Head & Ears */}
          <path d="M100 35C90 35 65 42 65 75C65 92 78 100 88 103C95 105 97 112 97 118C97 128 85 135 72 135C58 135 55 128 55 125" stroke="url(#hero-saffron-grad)" />
          <path d="M100 35C110 35 125 42 125 70C125 90 112 105 105 115C101 120 101 125 104 128C108 132 118 132 130 132C145 132 150 122 150 115" stroke="url(#hero-saffron-grad)" />
          
          {/* Left Ear Outer Ring */}
          <path d="M66 65C52 68 45 78 45 90C45 105 55 110 65 110" stroke="url(#hero-gold-grad)" strokeWidth="2.5" opacity="0.7"/>
          {/* Right Ear Outer Ring */}
          <path d="M124 63C138 65 145 74 145 85C145 100 135 105 125 105" stroke="url(#hero-gold-grad)" strokeWidth="2.5" opacity="0.7"/>
          
          {/* Crown (Mukut) */}
          <path d="M82 35L100 12L118 35H82Z" fill="url(#hero-gold-grad)" stroke="url(#hero-gold-grad)" strokeWidth="2" />
          <path d="M88 35L100 20L112 35" stroke="var(--bg-cream)" strokeWidth="2.5" />
          <circle cx="100" cy="8" r="4.5" fill="url(#hero-saffron-grad)" />
          
          {/* Trunk curve detailing */}
          <path d="M98 103C104 105 108 109 108 115C108 120 102 123 98 123" stroke="url(#hero-saffron-grad)" strokeWidth="3.5" />
        </g>
        
        {/* Tilak */}
        <path d="M100 45V58" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="65" r="4.5" fill="url(#hero-gold-grad)" />
        
        {/* Modak symbol */}
        <path d="M152 135C148 135 142 130 142 122C142 114 148 110 152 110C156 110 162 114 162 122C162 130 156 135 152 135Z" fill="url(#hero-gold-grad)" opacity="0.9"/>
      </svg>
    );
  }

  if (type === 'divider') {
    return (
      <div className={`divider-container ${className}`} {...props}>
        <div className="divider-line"></div>
        <div className="divider-icon">
          {/* Elegant Diya / Lamp motif */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3C12 3 9 7.5 9 9.5C9 11.2 10.3 12.5 12 12.5C13.7 12.5 15 11.2 15 9.5C15 7.5 12 3 12 3Z"
              fill="var(--primary-orange)"
            />
            <path
              d="M4 14C4 18 7.5 21 12 21C16.5 21 20 18 20 14H4Z"
              fill="var(--secondary-maroon)"
            />
            <path
              d="M6 14C6 16.5 8.7 18.5 12 18.5C15.3 18.5 18 16.5 18 14H6Z"
              fill="var(--accent-gold)"
            />
          </svg>
        </div>
        <div className="divider-line"></div>
      </div>
    );
  }

  return null;
}
