import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

export default function InquiryForm({ initialMode = 'tax' }) {
  const [mode, setMode] = useState(initialMode); // 'tax' or 'property'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceTax: 'ITR Filing',
    reTransaction: 'Buy',
    rePropertyType: 'Flat',
    reLocation: 'Asarwa',
    reBudget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const taxServices = [
    'Income Tax Return (ITR) Filing',
    'GST Registration',
    'GST Return Filing',
    'MSME (Udyam) Registration',
    'Accounting & Bookkeeping Services',
    'Home Loan',
    'Business Loan',
    'Property Loan / LAP',
    'Personal Loan',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Pre-formatted WhatsApp Message Generator
  const generateWhatsAppLink = (data) => {
    const phoneNum = '917818098961';
    let text = `*New Inquiry - Shree Siddhivinayak*\n\n`;
    text += `*Client Name:* ${data.name}\n`;
    text += `*Phone:* ${data.phone}\n`;
    if (data.email) text += `*Email:* ${data.email}\n`;
    
    if (mode === 'tax') {
      text += `*Inquiry For:* Tax & Compliance\n`;
      text += `*Service Needed:* ${data.serviceTax}\n`;
    } else {
      text += `*Inquiry For:* Real Estate Advisory\n`;
      text += `*Transaction Type:* ${data.reTransaction}\n`;
      text += `*Property Type:* ${data.rePropertyType}\n`;
      text += `*Preferred Location:* ${data.reLocation}\n`;
      if (data.reBudget) text += `*Budget Range:* ${data.reBudget}\n`;
    }
    
    if (data.message) text += `*Message:* ${data.message}\n`;
    text += `\n_Please schedule a consultation callback._`;

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e, target = 'callback') => {
    e.preventDefault();
    
    // Simple Validation
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }

    if (target === 'whatsapp') {
      const link = generateWhatsAppLink(formData);
      window.open(link, '_blank');
      return;
    }

    // Live Email Submission using Web3Forms AJAX API
    setIsSubmitting(true);
    
    const emailPayload = {
      access_key: "a35d5319-9cf0-4ce7-a6e0-03f583eabba7",
      subject: `New Lead - Shree Siddhivinayak (${formData.name})`,
      from_name: "Shree Siddhivinayak Website",
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email || 'Not Provided',
      Inquiry_Type: mode === 'tax' ? 'Tax & Compliance' : 'Real Estate',
      Service_Requested: mode === 'tax' ? formData.serviceTax : 'N/A',
      Transaction_Type: mode === 'property' ? formData.reTransaction : 'N/A',
      Property_Type: mode === 'property' ? formData.rePropertyType : 'N/A',
      Location_Preference: mode === 'property' ? formData.reLocation : 'N/A',
      Budget_Range: mode === 'property' ? (formData.reBudget || 'Not Stated') : 'N/A',
      Message: formData.message || 'No additional message',
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(emailPayload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceTax: 'ITR Filing',
          reTransaction: 'Buy',
          rePropertyType: 'Flat',
          reLocation: 'Asarwa',
          reBudget: '',
          message: '',
        });
      } else {
        throw new Error(data.message || "Web3Forms submission failed");
      }
    })
    .catch(err => {
      console.error("Email submission error:", err);
      alert("There was an issue sending your email request. We will open WhatsApp for you to submit directly.");
      const link = generateWhatsAppLink(formData);
      window.open(link, '_blank');
      setIsSubmitting(false);
    });
  };

  return (
    <div className="inquiry-form-container">
      {/* Form Tabs */}
      <div className="form-tabs">
        <button
          type="button"
          className={`tab-btn ${mode === 'tax' ? 'active-tab' : ''}`}
          onClick={() => { setMode('tax'); setIsSuccess(false); }}
        >
          📄 Tax & Compliance Inquiry
        </button>
        <button
          type="button"
          className={`tab-btn ${mode === 'property' ? 'active-tab' : ''}`}
          onClick={() => { setMode('property'); setIsSuccess(false); }}
        >
          🏡 Real Estate Inquiry
        </button>
      </div>

      {isSuccess ? (
        <div className="form-success-message">
          <CheckCircle size={56} className="success-icon" />
          <h3>Thank You for Reaching Out!</h3>
          <p>
            Your inquiry has been successfully recorded. Tirth Patel & associates will review your requirements and call you back within 24 business hours.
          </p>
          <button type="button" className="btn btn-outline" onClick={() => setIsSuccess(false)}>
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form className="inquiry-form">
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number (WhatsApp preferred) *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                maxLength="10"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Conditional Fields based on Mode */}
          {mode === 'tax' ? (
            <div className="form-group animate-fade-in-quick">
              <label className="form-label" htmlFor="serviceTax">Service Required</label>
              <select
                id="serviceTax"
                name="serviceTax"
                value={formData.serviceTax}
                onChange={handleInputChange}
                className="form-select"
              >
                {taxServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="animate-fade-in-quick">
              <div className="form-row-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="reTransaction">I want to:</label>
                  <select
                    id="reTransaction"
                    name="reTransaction"
                    value={formData.reTransaction}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Buy">Buy Property</option>
                    <option value="Sell">Sell Property</option>
                    <option value="Rent">Rent Property</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="rePropertyType">Property Type</label>
                  <select
                    id="rePropertyType"
                    name="rePropertyType"
                    value={formData.rePropertyType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Flat">Flat / Apartment</option>
                    <option value="Tenement">Tenement / Bungalow</option>
                    <option value="Shop">Shop</option>
                    <option value="Showroom">Showroom</option>
                    <option value="Office Space">Office Space</option>
                    <option value="Plot / Land">Plot / Land</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reLocation">Preferred Location</label>
                  <select
                    id="reLocation"
                    name="reLocation"
                    value={formData.reLocation}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Asarwa">Asarwa (Ahmedabad)</option>
                    <option value="Haripura">Haripura (Ahmedabad)</option>
                    <option value="Nikol">Nikol (Ahmedabad)</option>
                    <option value="Bapunagar">Bapunagar (Ahmedabad)</option>
                    <option value="Naroda">Naroda (Ahmedabad)</option>
                    <option value="Gota">Gota (Ahmedabad)</option>
                    <option value="Other">Other Area in Ahmedabad</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reBudget">Budget Range (e.g., ₹20 Lakhs - ₹50 Lakhs, or ₹15,000/month)</label>
                <input
                  type="text"
                  id="reBudget"
                  name="reBudget"
                  placeholder="Enter budget limits"
                  value={formData.reBudget}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message / Details</label>
            <textarea
              id="message"
              name="message"
              placeholder={mode === 'tax' ? "Explain your financial query (e.g. MSME business details, ITR year...)" : "Provide details about property size, facing, or lease requirements..."}
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-ctas">
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={(e) => handleFormSubmit(e, 'callback')}
              className="btn btn-secondary flex-grow justify-center"
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'} <Send size={16} />
            </button>
            <button
              type="button"
              onClick={(e) => handleFormSubmit(e, 'whatsapp')}
              className="btn btn-whatsapp flex-grow justify-center"
            >
              Send WhatsApp <MessageSquare size={16} />
            </button>
          </div>
        </form>
      )}

      <style>{`
        .inquiry-form-container {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        .form-tabs {
          display: flex;
          background-color: var(--bg-cream-dark);
          border-bottom: 1.5px solid var(--accent-gold);
        }
        .tab-btn {
          flex: 1;
          padding: 15px;
          border: none;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-muted);
          background-color: transparent;
          cursor: pointer;
          transition: var(--transition-fast);
          outline: none;
        }
        .tab-btn:hover {
          color: var(--secondary-maroon);
          background-color: rgba(122,31,43,0.03);
        }
        .active-tab {
          color: var(--bg-white);
          background-color: var(--secondary-maroon);
        }
        .active-tab:hover {
          color: var(--bg-white);
          background-color: var(--secondary-maroon);
        }
        .inquiry-form {
          padding: 30px;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-row-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
        }
        @media (min-width: 769px) {
          .form-row-2 .form-label,
          .form-row-3 .form-label {
            min-height: 48px;
            display: flex;
            align-items: flex-end;
            margin-bottom: 8px;
            padding-bottom: 2px;
          }
        }
        .form-ctas {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        .flex-grow {
          flex: 1;
        }
        .form-success-message {
          padding: 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .success-icon {
          color: #25D366;
        }
        .form-success-message h3 {
          font-size: 1.5rem;
        }
        .form-success-message p {
          color: var(--text-muted);
          max-width: 450px;
          margin-bottom: 15px;
        }
        .animate-fade-in-quick {
          animation: fadeIn 0.4s ease forwards;
        }
        @media (max-width: 768px) {
          .form-row-2, .form-row-3 {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .form-ctas {
            flex-direction: column;
            gap: 10px;
          }
          .inquiry-form {
            padding: 20px;
          }
        }
        @media (max-width: 480px) {
          .form-tabs {
            flex-direction: column;
            border-bottom: none;
          }
          .tab-btn {
            font-size: 0.85rem;
            padding: 12px 10px;
            border-bottom: 1.5px solid var(--accent-gold);
            text-align: center;
          }
          .active-tab {
            border-bottom: 1.5px solid var(--secondary-maroon);
          }
          .inquiry-form {
            padding: 15px;
          }
          .form-input, .form-textarea, .form-select {
            padding: 10px 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
