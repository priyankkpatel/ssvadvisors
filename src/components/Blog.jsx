import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, CheckSquare } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: 'Essential Documents Required for New GST Registration in India',
      date: 'July 10, 2026',
      author: 'Tirth Patel',
      category: 'GST & Compliance',
      excerpt: 'Starting a new business chapter? Here is the exact checklist of identity, address, and bank proofs required to secure your GSTIN without delays.',
      content: (
        <div>
          <p>Registering for Goods and Services Tax (GST) is one of the first official compliance milestones for any business. Having the correct documentation ready prevents clarification queries (known as Show Cause Notices) from tax officers.</p>
          <h4>Primary Document Checklist:</h4>
          <ul>
            <li><strong>For Sole Proprietorship:</strong> PAN Card and Aadhaar Card of the proprietor.</li>
            <li><strong>Business Address Proof:</strong> Electricity bill, Landline bill, or Municipal Property Tax receipt (not older than 2 months).</li>
            <li><strong>If Premises is Rented:</strong> A valid Rent Agreement and a signed No Objection Certificate (NOC) from the landlord.</li>
            <li><strong>Bank Account Verification:</strong> A cancelled cheque leaf or first-page copy of the bank passbook showing the business/proprietor name, IFSC, and account details.</li>
          </ul>
          <p>At Shree Siddhivinayak, we handle the entire upload, coordinate responses to tax authorities, and deliver your GSTIN certificate (Form REG-06) smoothly.</p>
        </div>
      ),
    },
    {
      title: 'Understanding ITR Filing Deadlines, Slab Rates, and Penalty Clauses',
      date: 'June 28, 2026',
      author: 'Tirth Patel',
      category: 'Income Tax',
      excerpt: 'Missing the July 31st deadline can attract interest charges and late filing fees. Understand the new vs old tax regimes and keep your returns clean.',
      content: (
        <div>
          <p>For individuals and non-audit business cases, the standard deadline to file your Income Tax Return (ITR) is <strong>July 31st</strong> of the assessment year. Filing on time is crucial, especially if you plan to apply for Home Loans or Business Loans in the future, as banks look for a consecutive 3-year ITR log.</p>
          <h4>Key Deadlines & Penalties:</h4>
          <ul>
            <li><strong>Standard Due Date:</strong> July 31st.</li>
            <li><strong>Belated Return Limit:</strong> December 31st (Attracts late filing fees under Section 234F).</li>
            <li><strong>Late Filing Fees:</strong> ₹1,000 for income below ₹5 Lakhs; ₹5,000 for income above ₹5 Lakhs.</li>
            <li><strong>Interest on Tax Due:</strong> 1% per month under Section 234A if taxes are unpaid.</li>
          </ul>
          <p>We advise clients to reconcile Form 26AS, Annual Information Statement (AIS), and Form 16 early to ensure accurate declaration and claim maximum tax refund credits.</p>
        </div>
      ),
    },
    {
      title: 'Property Purchase in Gujarat: The Title Clearance Checklist',
      date: 'May 15, 2026',
      author: 'Tirth Patel',
      category: 'Real Estate Advisory',
      excerpt: 'Buying a shop, plot, or flat in Ahmedabad? Learn how to inspect Index-2 logs, search title documents, and ensure a safe investment.',
      content: (
        <div>
          <p>Buying real estate represents a major new chapter in your life. Ensuring that the property has a "Clear and Marketable Title" protects your investment from legal encumbrances or family partition disputes.</p>
          <h4>Crucial Verification Checklist:</h4>
          <ul>
            <li><strong>Index-2:</strong> The official registration receipt issued by the Sub-Registrar of Gujarat. Verify details of buyer, seller, and transaction amount.</li>
            <li><strong>Title Search Report:</strong> A professional search through registrar indices for the past 13 to 30 years to check for mortgages or disputes.</li>
            <li><strong>Non-Agricultural (NA) Certificate:</strong> Verify the land classification to ensure it is approved for residential or commercial use.</li>
            <li><strong>RERA Registration:</strong> If buying from a builder, check if the project is registered with Gujarat RERA (GuJRERA).</li>
          </ul>
          <p>Under our Real Estate advisory pillar, Tirth Patel coordinates with senior legal registrars to complete historical registry searches and verify titles before you sign any Agreement to Sale (Satakhat).</p>
        </div>
      ),
    },
  ];

  return (
    <div className="blog-page">
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container banner-content">
          <h1>Resources & Compliance Guides</h1>
          <p>
            Helpful tax checklists, local Ahmedabad real estate guidelines, and filing timelines to keep your compliance up-to-date.
          </p>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="section-padding blog-content-section">
        <div className="container">
          {selectedPost ? (
            /* Detailed Post View */
            <div className="detailed-post-view animate-fade-in-quick">
              <button className="btn btn-outline btn-back" onClick={() => setSelectedPost(null)}>
                ← Back to Resources
              </button>
              <div className="post-header">
                <span className="post-category-tag">{selectedPost.category}</span>
                <h2>{selectedPost.title}</h2>
                <div className="post-meta-details">
                  <span><Calendar size={14} /> {selectedPost.date}</span>
                  <span><User size={14} /> By {selectedPost.author}</span>
                </div>
              </div>
              <hr className="post-divider" />
              <div className="post-body">
                {selectedPost.content}
              </div>
              <div className="post-footer-cta">
                <h3>Have questions about this guide?</h3>
                <p>Get in touch directly with Tirth Patel for custom advice.</p>
                <a
                  href={`https://wa.me/917818098961?text=Hello%20Tirthbhai,%20I%20have%20a%20question%20regarding%20your%20guide:%20${encodeURIComponent(selectedPost.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            /* Blog Cards List */
            <>
              <div className="section-header">
                <h2>Knowledge Base</h2>
                <p>Simple legal and financial breakdowns curated by Tirth Patel.</p>
                <GaneshaSvg type="divider" />
              </div>

              <div className="card-grid blog-grid">
                {posts.map((post, idx) => (
                  <div key={idx} className="blog-card">
                    <div className="blog-card-meta">
                      <span className="blog-cat">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <button className="read-more-btn" onClick={() => setSelectedPost(post)}>
                      Read Full Guide <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <style>{`
        .blog-content-section {
          background-color: var(--bg-cream);
        }
        .blog-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          padding: 30px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(212, 175, 55, 0.3);
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .blog-cat {
          color: var(--primary-orange);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-date {
          color: var(--text-muted);
        }
        .blog-title {
          font-size: 1.3rem;
          color: var(--secondary-maroon);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .blog-excerpt {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .read-more-btn {
          background: none;
          border: none;
          color: var(--primary-orange);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
          align-self: flex-start;
        }
        .read-more-btn:hover {
          color: var(--primary-orange-hover);
          gap: 10px;
        }
        
        /* Detailed Post Styles */
        .detailed-post-view {
          background-color: var(--bg-white);
          border-radius: 16px;
          padding: 50px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          max-width: 900px;
          margin: 0 auto;
        }
        .btn-back {
          padding: 8px 20px;
          font-size: 0.85rem;
          margin-bottom: 30px;
        }
        .post-header {
          margin-bottom: 20px;
        }
        .post-category-tag {
          font-size: 0.8rem;
          background-color: rgba(232, 117, 42, 0.12);
          color: var(--primary-orange);
          padding: 4px 12px;
          border-radius: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .post-header h2 {
          font-size: 2.2rem;
          margin-top: 15px;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .post-meta-details {
          display: flex;
          gap: 20px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .post-meta-details span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .post-divider {
          border: 0;
          height: 1px;
          background-color: var(--border-color);
          margin: 20px 0 30px 0;
        }
        .post-body h4 {
          font-size: 1.25rem;
          color: var(--secondary-maroon);
          margin-top: 25px;
          margin-bottom: 12px;
        }
        .post-body p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-dark);
          margin-bottom: 15px;
        }
        .post-body ul {
          margin-left: 20px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .post-body ul li {
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .post-footer-cta {
          margin-top: 50px;
          background-color: var(--bg-cream);
          border-radius: 12px;
          padding: 30px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          text-align: center;
        }
        .post-footer-cta h3 {
          margin-bottom: 8px;
        }
        .post-footer-cta p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .detailed-post-view {
            padding: 25px;
          }
          .post-header h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
