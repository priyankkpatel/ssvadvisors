import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Landmark, ShieldAlert, Award, ArrowDownToLine } from 'lucide-react';
import GaneshaSvg from './GaneshaSvg';
import LoanCalculator from './LoanCalculator';
import InquiryForm from './InquiryForm';

export default function TaxServices() {
  const [openCardIdx, setOpenCardIdx] = useState(null);

  const services = [
    {
      title: 'Income Tax Return (ITR) Filing',
      for: 'Salaried Employees, Professionals, Business Proprietors, & NRIs',
      description: 'Ensure smooth tax filing, maximize legal deductions (80C, 80D, HRA), and avoid late fees or compliance notices from the IT department.',
      documents: [
        'PAN Card & Aadhaar Card',
        'Form 16 (from employer)',
        'Bank Account Statements (all active accounts for the financial year)',
        'Investment proofs (LIC, PPF, Mutual Funds, NPS, Housing loan interest certificate)',
        'Capital Gains statement (if selling shares, mutual funds, or property)',
      ],
      steps: [
        'Document Check: Send your documents via WhatsApp or Email.',
        'Review & Estimate: We calculate your tax liability and apply all eligible exemptions.',
        'Filing: We prepare and draft your return on the income tax portal.',
        'e-Verification: The final return is verified via Aadhaar OTP to complete the filing.',
      ],
    },
    {
      title: 'GST Registration',
      for: 'Traders, Manufacturers, Service Providers, & E-commerce Sellers',
      description: 'Get your Goods & Services Tax Identification Number (GSTIN) securely. Mandatory for businesses crossing threshold turnover limits or engaging in inter-state trade.',
      documents: [
        'PAN Card of Owner/Business',
        'Aadhaar Card of Proprietor/Partners',
        'Business Address Proof (Electricity bill, Property Tax bill)',
        'Rent Agreement & landlord No Objection Certificate (NOC) (if rented)',
        'Cancelled cheque or Bank Passbook copy',
      ],
      steps: [
        'Information Gathering: Collect promoter details and business address proofs.',
        'Portal Application: Draft and upload files to the GST Common Portal.',
        'Clarification (if any): Resolve queries raised by the GST officer.',
        'GSTIN Generation: Receive GSTIN and digital registration certificate (Form REG-06).',
      ],
    },
    {
      title: 'GST Return Filing',
      for: 'All Active GST Registered Taxpayers (Regular & Composition schemes)',
      description: 'Monthly and quarterly GSTR-1, GSTR-3B, and GSTR-9 annual return filings. Maintain clean compliance to avoid invoice mismatches and interest penalties.',
      documents: [
        'Monthly Sales Register / Sales Invoices',
        'Purchase Invoices (for input tax credit matching)',
        'GST portal login credentials (we maintain strict security logs)',
        'E-Way bill summaries (if applicable)',
      ],
      steps: [
        'Sales & Purchase Log: Share invoices or Tally/Excel bookkeeping logs.',
        'ITC Reconciliation: We match your purchases with GSTR-2B to maximize input tax credits.',
        'Draft Review: Check calculations and tax payable adjustments.',
        'Return Filing: Securely file the return and generate Challans for tax payment.',
      ],
    },
    {
      title: 'Accounting & Bookkeeping',
      for: 'Freelancers, Retail Shops, Professional Firms, & Small Businesses',
      description: 'Maintain accurate financial records. We handle journal entries, bank reconciliations, profit & loss statements, and balance sheet preparation.',
      documents: [
        'Bank Statements (Excel or PDF formats)',
        'Purchase & Sales Bills',
        'Expense Vouchers (Salary, Rent, Utilities, Printing)',
        'Opening trial balance / past balance sheets',
      ],
      steps: [
        'Setup Ledger: Configure a charts of accounts tailored to your sector.',
        'Regular Entry: Post bills, payments, and receipts into accounting software.',
        'Bank Reconciliation: Match bank ledger entries with bank statement feeds.',
        'Reporting: Receive monthly or quarterly P&L and Balance Sheet reports.',
      ],
    },
    {
      title: 'MSME (Udyam) Registration',
      for: 'Micro, Small, & Medium Enterprises looking for Govt. subsidies',
      description: 'Official registration under the Ministry of MSME. Opens eligibility for lower loan interest rates, collateral-free credit, and government procurement tenders.',
      documents: [
        'Aadhaar Card of the Proprietor (Must be linked to mobile)',
        'PAN Card of the Business entity',
        'Bank Account Details (IFSC & Account number)',
        'Details of business operations and investment in machinery/equipment',
      ],
      steps: [
        'Aadhaar OTP: Verify the proprietor or partner identity.',
        'Registration Intake: Provide investment details, category, and turnover metrics.',
        'Udyam Certificate: Generate and download the official Udyam Certificate instantly.',
      ],
    },
    {
      title: 'Loans & Capital Advisory',
      for: 'Property Buyers, Businesses seeking capital, & Personal Finance',
      description: 'End-to-end guidance for securing Home Loans, Business Loans, Personal Loans, and Loans Against Property (LAP). We match you with banks offering the lowest interest rates.',
      documents: [
        'PAN, Aadhaar, and KYC documents',
        'ITR copies (Last 3 years with computation sheets)',
        'Audited Financial statements / GST Returns (Last 1 year)',
        'Bank Statements (Last 6 to 12 months)',
        'Property documents (For Home Loans or Loan Against Property)',
      ],
      steps: [
        'Eligibility Check: Evaluate credit score, income metrics, and repayment capability.',
        'Bank Matching: Identify the best banking partners (SBI, HDFC, ICICI, etc.) for your profile.',
        'Documentation: Package ITR logs and properties valuation files.',
        'Disbursement Support: Follow up through valuation, legal search, and final payout.',
      ],
    },
  ];

  const toggleCard = (idx) => {
    setOpenCardIdx(openCardIdx === idx ? null : idx);
  };

  return (
    <div className="tax-services-page">
      {/* Banner Header */}
      <section className="page-banner">
        <div className="container banner-content">
          <h1>Tax & Financial Compliance Services</h1>
          <p>
            Remove compliance obstacles and file with peace of mind. Transparent processes, timely updates, and experienced advisory.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding services-detail-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Compliance Pillars</h2>
            <p>Select a service to view required documents and step-by-step processing details.</p>
            <GaneshaSvg type="divider" />
          </div>

          <div className="services-accordion-grid">
            {services.map((service, idx) => {
              const isOpen = openCardIdx === idx;
              return (
                <div key={idx} className={`service-accordion-card ${isOpen ? 'card-open' : ''}`}>
                  <div className="accordion-header" onClick={() => toggleCard(idx)}>
                    <div className="header-left">
                      <div className="accordion-icon">
                        {service.title.includes('Loan') ? <Landmark size={22} /> : <FileText size={22} />}
                      </div>
                      <div>
                        <h3>{service.title}</h3>
                        <span className="for-badge">For: {service.for}</span>
                      </div>
                    </div>
                    <button className="accordion-toggle-btn" aria-label="Toggle details">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="accordion-body animate-fade-in-quick">
                      <p className="service-desc">{service.description}</p>
                      
                      <div className="info-split-row">
                        <div className="info-column">
                          <h4 className="column-title">📌 Required Documents</h4>
                          <ul className="info-list">
                            {service.documents.map((doc, dIdx) => (
                              <li key={dIdx}>{doc}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="info-column">
                          <h4 className="column-title">⚙️ Process Steps</h4>
                          <ol className="info-list-ordered">
                            {service.steps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      <div className="accordion-action-footer">
                        <a
                          href={`https://wa.me/917818098961?text=Hello%20Tirthbhai,%20I'm%20interested%20in%20inquiring%20about%20your%20service:%20${encodeURIComponent(service.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp"
                        >
                          Inquire via WhatsApp
                        </a>
                        <a href="#inquiry-form-section" className="btn btn-secondary">
                          Request Callback
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding calculator-section">
        <div className="container">
          <div className="section-header">
            <h2>Calculate Your Loan EMI</h2>
            <p>Planning to buy a property or expand your business? Use our slider tool to estimate monthly payments.</p>
            <GaneshaSvg type="divider" />
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="inquiry-form-section" className="section-padding form-section-bg">
        <div className="container form-max-width">
          <div className="section-header">
            <h2>Send An Inquiry</h2>
            <p>Fill out the form below, and we will get back to you with custom compliance solutions.</p>
            <GaneshaSvg type="divider" />
          </div>
          <InquiryForm initialMode="tax" />
        </div>
      </section>

      <style>{`
        .services-detail-section {
          background-color: var(--bg-cream);
        }
        .services-accordion-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 950px;
          margin: 0 auto;
        }
        .service-accordion-card {
          background-color: var(--bg-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          overflow: hidden;
        }
        .service-accordion-card:hover {
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: var(--shadow-md);
        }
        .card-open {
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-md);
        }
        .accordion-header {
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .accordion-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-cream);
          color: var(--primary-orange);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .accordion-header h3 {
          font-size: 1.25rem;
          margin-bottom: 3px;
          color: var(--secondary-maroon);
        }
        .for-badge {
          font-size: 0.8rem;
          background-color: var(--bg-cream-dark);
          color: var(--text-muted);
          padding: 2px 10px;
          border-radius: 12px;
          font-weight: 500;
        }
        .accordion-toggle-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .accordion-body {
          padding: 0 25px 25px 25px;
          border-top: 1px solid var(--border-color);
        }
        .service-desc {
          margin: 20px 0;
          color: var(--text-muted);
          font-size: 0.98rem;
        }
        .info-split-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 25px;
        }
        .column-title {
          font-size: 1.05rem;
          color: var(--secondary-maroon);
          margin-bottom: 12px;
          font-weight: 700;
        }
        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .info-list li {
          position: relative;
          padding-left: 18px;
          font-size: 0.9rem;
          color: var(--text-dark);
        }
        .info-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-orange);
          font-size: 1.2rem;
          line-height: 1;
        }
        .info-list-ordered {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 20px;
        }
        .info-list-ordered li {
          font-size: 0.9rem;
          color: var(--text-dark);
        }
        .accordion-action-footer {
          display: flex;
          gap: 15px;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }
        .calculator-section {
          background-color: var(--bg-cream-dark);
        }
        .form-section-bg {
          background-color: var(--bg-cream);
        }
        .form-max-width {
          max-width: 750px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .info-split-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .accordion-action-footer {
            flex-direction: column;
            gap: 10px;
          }
          .accordion-header {
            padding: 15px;
          }
          .accordion-body {
            padding: 0 15px 15px 15px;
          }
          .header-left {
            gap: 10px;
          }
          .accordion-icon {
            width: 36px;
            height: 36px;
          }
          .accordion-header h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
