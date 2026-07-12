import React, { useState } from 'react';
import { IndianRupee, HelpCircle } from 'lucide-react';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000); // Default 10 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // Default 8.5% p.a.
  const [tenureYears, setTenureYears] = useState(15); // Default 15 years

  // Calculate EMI
  const P = loanAmount;
  const r = interestRate / 12 / 100; // monthly rate
  const n = tenureYears * 12; // monthly tenure

  let emi = 0;
  if (r > 0) {
    emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  } else {
    emi = P / n;
  }

  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  // Format currency in Indian Style (Lakhs/Crores)
  const formatIndianCurrency = (num) => {
    const rounded = Math.round(num);
    const str = rounded.toString();
    if (str.length <= 3) return str;
    const lastThree = str.substring(str.length - 3);
    const otherNumbers = str.substring(0, str.length - 3);
    const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
    return `₹${res}`;
  };

  return (
    <div className="calculator-card">
      <div className="calc-header">
        <h3>Loan Eligibility & EMI Estimator</h3>
        <p>Plan your new financial chapters or property purchases with confidence.</p>
      </div>

      <div className="calc-grid">
        {/* Sliders Area */}
        <div className="sliders-panel">
          {/* Loan Amount */}
          <div className="slider-group">
            <div className="slider-labels">
              <label>Loan Amount</label>
              <span className="slider-value-display">{formatIndianCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="100000"
              max="50000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="calc-range-slider"
            />
            <div className="range-limits">
              <span>1 Lakh</span>
              <span>5 Crores</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="slider-group">
            <div className="slider-labels">
              <label>Interest Rate (% p.a.)</label>
              <span className="slider-value-display">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="18"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="calc-range-slider"
            />
            <div className="range-limits">
              <span>5% p.a.</span>
              <span>18% p.a.</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="slider-group">
            <div className="slider-labels">
              <label>Tenure (Years)</label>
              <span className="slider-value-display">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="calc-range-slider"
            />
            <div className="range-limits">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="results-panel">
          <div className="result-item main-emi-result">
            <span className="result-label">Monthly EMI</span>
            <span className="result-value emi-amount">{formatIndianCurrency(emi)}</span>
          </div>

          <hr className="calc-divider" />

          <div className="other-results">
            <div className="result-item">
              <span className="result-label">Principal Amount</span>
              <span className="result-value">{formatIndianCurrency(loanAmount)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Total Interest Payable</span>
              <span className="result-value text-accent">{formatIndianCurrency(totalInterest)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Total Payment</span>
              <span className="result-value">{formatIndianCurrency(totalPayment)}</span>
            </div>
          </div>

          <div className="calc-note">
            <HelpCircle size={14} />
            <span>Note: This is an estimate. Actual rates depend on credit score and bank terms.</span>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-card {
          background: var(--bg-white);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          padding: 40px;
          max-width: 950px;
          margin: 40px auto 0 auto;
          position: relative;
        }
        .calc-header {
          text-align: center;
          margin-bottom: 35px;
        }
        .calc-header h3 {
          font-size: 1.8rem;
          margin-bottom: 5px;
        }
        .calc-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
        }
        .sliders-panel {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .slider-group {
          display: flex;
          flex-direction: column;
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .slider-value-display {
          font-weight: 700;
          color: var(--secondary-maroon);
          font-size: 1.1rem;
        }
        .calc-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: var(--border-color);
          border-radius: 5px;
          outline: none;
          margin-bottom: 8px;
        }
        .calc-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary-orange);
          cursor: pointer;
          border: 2px solid var(--bg-white);
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
          transition: transform 0.1s ease;
        }
        .calc-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .range-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .results-panel {
          background-color: var(--bg-cream-dark);
          border-radius: 12px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .main-emi-result {
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 20px;
        }
        .result-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }
        .result-value {
          font-weight: 600;
          color: var(--text-dark);
        }
        .emi-amount {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--secondary-maroon);
          margin-top: 5px;
          font-family: var(--font-heading);
        }
        .text-accent {
          color: var(--primary-orange);
        }
        .calc-divider {
          border: 0;
          height: 1px;
          background-color: var(--border-color);
          margin: 15px 0;
        }
        .other-results {
          margin-bottom: 15px;
        }
        .calc-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .calculator-card {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
}
