import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Plus, X, Award, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import GaneshaSvg from './GaneshaSvg';

const defaultReviews = [
  {
    name: 'Amit Bafna',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "We have been outsourcing our GST returns and annual bookkeeping to Tirth Patel. He is extremely thorough with GST compliance and provides prompt updates on tax regulations. Very professional and reliable service in Ahmedabad.",
  },
  {
    name: 'Ankur Bafna',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Managing business accounting and filing GST on time used to be a major hassle for us. Shree Siddhivinayak team streamlined our entire process. Their tax planning advisory helped us optimize our returns legally.",
  },
  {
    name: 'Kalpesh Mali',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Highly satisfied with their Income Tax Return (ITR) filing service. Tirthbhai explained all the tax deductions clearly and filed our returns swiftly. For any tax-related advice, they are the best.",
  },
  {
    name: 'Bhavesh Motwani',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Getting our new business GST registration and MSME setup done was seamless with Tirth Patel. He handled the documentation perfectly and cleared all registry compliance without any delays.",
  },
  {
    name: 'Abhishek Gandhi Mehta',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Shree Siddhivinayak manages our complete corporate accounting and bookkeeping. Their monthly accounting reports are highly accurate, and they ensure our GST returns are filed well before the due dates.",
  },
  {
    name: 'Praveen Kumar Salecha',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Tirth Patel has been managing our company's tax audits and quarterly GST compliance. His expert knowledge in tax laws has resolved complex audit queries smoothly. Highly recommended for tax consultancy.",
  },
  {
    name: 'Ayan Patel',
    role: '',
    location: 'Ahmedabad',
    rating: 5,
    text: "Great experience with their ITR filing and accounting services. They are prompt, transparent, and always available on WhatsApp for quick tax queries. A trusted partner for our business compliance.",
  },
];

export default function Testimonials() {
  const location = useLocation();
  const showAdminButton = location.search.includes('admin=true') || location.hash.includes('admin=true');

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('siddhivinayak_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...defaultReviews, ...parsed];
      } catch (e) {
        return defaultReviews;
      }
    }
    return defaultReviews;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: 'Asarwa, Ahmedabad',
    rating: 5,
    text: '',
  });
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (pinInput === '7818098961') {
      setIsAdmin(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    // Do not auto-scroll if the form is open to avoid disrupting the user
    if (!showAddForm) {
      timeoutRef.current = setTimeout(
        () =>
          setActiveIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
          ),
        6000
      );
    }
    return () => resetTimeout();
  }, [activeIndex, reviews.length, showAddForm]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (ratingValue) => {
    setFormData((prev) => ({ ...prev, rating: ratingValue }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      alert('Please fill out the client name and review text.');
      return;
    }

    // Save locally
    const customList = JSON.parse(localStorage.getItem('siddhivinayak_reviews') || '[]');
    const newReviewItem = { ...formData, rating: Number(formData.rating) };
    const updatedCustom = [...customList, newReviewItem];
    localStorage.setItem('siddhivinayak_reviews', JSON.stringify(updatedCustom));

    // Update state
    setReviews([...defaultReviews, ...updatedCustom]);
    setFormSuccess(true);
    
    // Clear form
    setFormData({
      name: '',
      role: '',
      location: 'Asarwa, Ahmedabad',
      rating: 5,
      text: '',
    });

    // Point slider to the newly added review
    setTimeout(() => {
      setActiveIndex(reviews.length); // Next index will be the new one
      setFormSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What our clients in Ahmedabad say about our tax compliance and property advisory services.
          </p>
          <GaneshaSvg type="divider" />
        </div>

        {/* Carousel Slider */}
        <div className="slider-container">
          <Quote className="quote-icon" size={60} />
          
          <div className="slides-wrapper">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === activeIndex ? 'slide-active' : ''}`}
              >
                <div className="rating-stars">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} size={18} fill="var(--accent-gold)" stroke="var(--accent-gold)" />
                  ))}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
                <div className="client-info">
                  <span className="client-name">{review.name}</span>
                  {review.role && <span className="client-role">{review.role}</span>}
                  <span className="client-location">{review.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous Review">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next Review">
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="slider-dots">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === activeIndex ? 'dot-active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Provision for Client to Add Reviews (Local Storage Manager) */}
        {showAdminButton && (
          <div className="testimonial-admin-panel">
            {!showAddForm ? (
              <button className="btn btn-outline admin-trigger-btn" onClick={() => setShowAddForm(true)}>
                <Plus size={16} /> Add Client Testimonial (Admin Entry)
              </button>
            ) : (
              <div className="add-review-card animate-fade-in-quick">
                <div className="card-header-flex">
                  <h3>Add New Testimonial</h3>
                  <button className="close-form-btn" onClick={() => { setShowAddForm(false); setIsAdmin(false); setPinInput(''); setPinError(false); }}>
                    <X size={20} />
                  </button>
                </div>

                {!isAdmin ? (
                  /* Admin PIN Gate */
                  <form onSubmit={handleVerifyPin} className="admin-pin-gate-form">
                    <p className="admin-gate-info">This form is restricted to administrators. Please enter your security PIN to continue.</p>
                    <div className="pin-input-row">
                      <input
                        type="password"
                        placeholder="Enter Admin PIN (Phone No.)"
                        value={pinInput}
                        onChange={(e) => setPinInput(e.target.value)}
                        className={`form-input pin-field ${pinError ? 'pin-field-error' : ''}`}
                      />
                      <button type="submit" className="btn btn-secondary">Verify PIN</button>
                    </div>
                    {pinError && <p className="error-text">❌ Invalid PIN. Please try again.</p>}
                  </form>
                ) : formSuccess ? (
                  <div className="form-success-alert">
                    <CheckCircle size={32} className="success-check-icon" />
                    <div>
                      <h4>Review Added Successfully!</h4>
                      <p>Updating the testimonial carousel now...</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="admin-review-form">
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Client Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Designation / Business Title</label>
                        <input
                          type="text"
                          name="role"
                          placeholder="e.g. Founder, RK Enterprises"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Client Location</label>
                        <input
                          type="text"
                          name="location"
                          placeholder="e.g. Asarwa, Ahmedabad"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Star Rating</label>
                        <div className="star-rating-picker">
                          {[1, 2, 3, 4, 5].map((starVal) => (
                            <button
                              type="button"
                              key={starVal}
                              onClick={() => handleRatingChange(starVal)}
                              className="star-pick-btn"
                            >
                              <Star
                                size={24}
                                fill={starVal <= formData.rating ? 'var(--accent-gold)' : 'none'}
                                stroke={starVal <= formData.rating ? 'var(--accent-gold)' : 'var(--text-muted)'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Review / Feedback *</label>
                      <textarea
                        name="text"
                        required
                        placeholder="Type the customer review here..."
                        value={formData.text}
                        onChange={handleInputChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <div className="form-footer-actions">
                      <button type="button" className="btn btn-outline" onClick={() => setShowAddForm(false)}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-secondary">
                        Save Testimonial
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-cream-dark);
          position: relative;
          overflow: hidden;
        }
        .slider-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--bg-white);
          border-radius: 20px;
          padding: 50px 70px;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(212, 175, 55, 0.2);
          text-align: center;
        }
        .quote-icon {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(122, 31, 43, 0.08);
          pointer-events: none;
        }
        .slides-wrapper {
          position: relative;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testimonial-slide {
          position: absolute;
          opacity: 0;
          transform: scale(0.95);
          pointer-events: none;
          transition: opacity 0.5s ease, transform 0.5s ease;
          width: 100%;
        }
        .slide-active {
          position: relative;
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .rating-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 20px;
        }
        .testimonial-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-dark);
          font-style: italic;
          margin-bottom: 25px;
        }
        .client-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .client-name {
          font-weight: 700;
          color: var(--secondary-maroon);
          font-size: 1.1rem;
        }
        .client-role {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .client-location {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-orange);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--bg-cream);
          border: 1px solid var(--border-color);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-maroon);
          cursor: pointer;
          transition: var(--transition-fast);
          outline: none;
        }
        .slider-arrow:hover {
          background-color: var(--secondary-maroon);
          color: var(--bg-white);
          border-color: var(--secondary-maroon);
        }
        .arrow-left {
          left: -22px;
        }
        .arrow-right {
          right: -22px;
        }
        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--border-color);
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
        }
        .dot-active {
          width: 24px;
          border-radius: 4px;
          background-color: var(--primary-orange);
        }

        /* Testimonial Admin Panel styling */
        .testimonial-admin-panel {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .admin-trigger-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--bg-white);
          border: 1.5px dashed var(--secondary-maroon);
          color: var(--secondary-maroon);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 10px 20px;
          border-radius: 8px;
        }
        .admin-trigger-btn:hover {
          background-color: rgba(122, 31, 43, 0.05);
          border-style: solid;
        }
        .add-review-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          padding: 30px;
          width: 100%;
          max-width: 800px;
          text-align: left;
        }
        .card-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 15px;
        }
        .card-header-flex h3 {
          font-size: 1.3rem;
          color: var(--secondary-maroon);
        }
        .close-form-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
          transition: var(--transition-fast);
        }
        .close-form-btn:hover {
          color: #EF4444;
        }
        .admin-review-form .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .star-rating-picker {
          display: flex;
          gap: 5px;
          align-items: center;
          height: 45px;
        }
        .star-pick-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
        }
        .form-footer-actions {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          margin-top: 25px;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }
        .form-success-alert {
          display: flex;
          align-items: center;
          gap: 15px;
          background-color: rgba(37, 211, 102, 0.1);
          color: #128C7E;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #25D366;
        }
        .success-check-icon {
          color: #25D366;
        }
        .admin-pin-gate-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 10px 0;
        }
        .admin-gate-info {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .pin-input-row {
          display: flex;
          gap: 15px;
          max-width: 500px;
        }
        .pin-field {
          flex: 1;
        }
        .pin-field-error {
          border-color: #EF4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        .error-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #EF4444;
          margin-top: -5px;
        }
        @media (max-width: 768px) {
          .slider-container {
            padding: 40px 25px;
          }
          .slider-arrow {
            display: none;
          }
          .testimonial-text {
            font-size: 1rem;
          }
          .admin-review-form .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .pin-input-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
