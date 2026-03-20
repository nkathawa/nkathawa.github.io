import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, BarChart3, Target, CreditCard } from "lucide-react";
import { BookOpen, PenLine, Lightbulb, Wrench } from "lucide-react";
import { Link } from 'react-router-dom';
import './Finances.css';

const Finances = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const navigate = useNavigate();

  const [currentAge, setCurrentAge] = React.useState('');
  const [retirementAge, setRetirementAge] = React.useState('');
  const [lifeExpectancy, setLifeExpectancy] = React.useState('');
  const [currentAssets, setCurrentAssets] = React.useState('');
  const [returnRate, setReturnRate] = React.useState('');
  const [income, setIncome] = React.useState('');
  const [savingsRate, setSavingsRate] = React.useState('');
  const [monthlyRetirementIncome, setMonthlyRetirementIncome] = React.useState(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const r = returnRate / 100;
    const annualSavings = income * (savingsRate / 100);

    let projectedAssets = currentAssets;

    for (let i = 0; i < yearsToRetirement; i++) {
      projectedAssets = projectedAssets * (1 + r) + annualSavings;
    }

    const annualRetirementIncome = projectedAssets * 0.04;
    const monthlyIncome = annualRetirementIncome / 12;

    setMonthlyRetirementIncome(monthlyIncome);
  };

  const articles = [
    {
      id: 'budgeting101',
      title: 'Budgeting 101: The Foundation of Financial Success',
      date: 'April 12, 2024',
      excerpt: 'I firmly believe that a budget is the foundation of good finances. Learn how to create a budget that works for you and your lifestyle.',
      readTime: '5 min read',
      category: 'Budgeting'
    },
  ];

  const financialTips = [
    {
      icon: Wallet,
      title: "Emergency Fund",
      description: "Build an emergency fund covering 3-6 months of expenses",
    },
    {
      icon: BarChart3,
      title: "Track Spending",
      description: "Monitor your expenses to identify areas for improvement",
    },
    {
      icon: Target,
      title: "Set Goals",
      description: "Define clear financial goals and create a plan to achieve them",
    },
    {
      icon: CreditCard,
      title: "Debt Management",
      description: "Prioritize high-interest debt and create a payoff strategy",
    },
  ];

  return (
    <div className="finances">
      <div className="container">
        {/* Navigation Tabs */}
        <div className="finance-nav">
          <button 
            className={`nav-btn ${activeSection === 'intro' ? 'active' : ''}`}
            onClick={() => setActiveSection('intro')}
          >
            <BookOpen
              size={18}
              strokeWidth={1.8}
              style={{ marginRight: '8px', position: 'relative', top: '3px' }}
            />
            Introduction
          </button>

          <button 
            className={`nav-btn ${activeSection === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveSection('tips')}
          >
            <Lightbulb 
              size={18} 
              strokeWidth={1.8} 
              className="nav-icon"
              style={{ marginRight: '8px', position: 'relative', top: '3px' }} 
            />
            Financial Tips
          </button>

          <button 
            className={`nav-btn ${activeSection === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveSection('tools')}
          >
            <Wrench 
              size={18} 
              strokeWidth={1.8} 
              className="nav-icon"
              style={{ marginRight: '8px', position: 'relative', top: '3px' }}
            />
            Tools
          </button>
        </div>

        {/* Content Sections */}
        <div className="finance-content">
          {activeSection === 'intro' && (
            <section className="intro-section">
              <div className="intro-header">
                <h1>Personal Finances</h1>
                <p className="intro-subtitle">Empowering you to achieve financial freedom through smart strategies and practical advice</p>
              </div>
              
              <div className="intro-content">
                <div className="intro-text">
                  <h2>Welcome to My Financial Journey</h2>
                  <p>
                    Thank you for visiting my personal finances page. My name is Navin, and I'm passionate about helping others reach their financial goals. 
                    I firmly believe that financial freedom can be achieved through the implementation of simple principles. It requires work, dedication, and sacrifice, 
                    but is absolutely attainable.
                  </p>
                  <p>
                    Half the battle is mental – overcoming mental hurdles,
                    gaining new knowledge that can empower you to take control of your finances – these are the building blocks of sound personal finance.
                  </p>
                  <p>
                    I have no formal financial education – I am completely self-taught. I believe in everything that I share here, not simply because it makes sense to me, 
                    but because I live it. I implement these strategies in my own life, and it has brought about a degree of financial peace I never thought was possible.
                  </p>
                  <p>
                    Especially in these current times of high inflation and high cost of living, along with wages not keeping up with either of those, 
                    there is no more important time to make every dollar count. 
                  </p>
                  <p>
                    If you're interested in learning more, head over to {' '}
                    <Link to="/blog" className="inline-link">my Blog page</Link>, 
                    where we'll discuss how to make your life inflation-proof, how to live within 
                    (and below!) your means, and strategies for saving money.
                  </p>
                </div>
                
                <div className="intro-stats">
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Self-Taught</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">{new Date().getFullYear() - 2018}+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'tips' && (
            <section className="tips-section">
              <h2>Essential Financial Tips</h2>
              <div className="tips-grid">
                {financialTips.map((tip, index) => {
                  const Icon = tip.icon;

                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold">{tip.title}</h3>
                        <p className="text-sm text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="resources-section">
                <h3>Additional Resources</h3>
                <div className="resources-grid">
                  <div className="resource-card">
                    <h4>Recommended Books</h4>
                    <ul>
                      <li>"The Simple Path to Wealth" by JL Collins</li>
                      <li>"Rich Dad Poor Dad" by Robert Kiyosaki</li>
                    </ul>
                  </div>
                  <div className="resource-card">
                    <h4>Useful Tools</h4>
                    <ul>
                      <li>
                        <a 
                          href="https://actualbudget.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Actual Budget
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.bankrate.com/mortgages/mortgage-calculator//" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Mortgage Calculator
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'tools' && (
            <div className="tool-card">
              <h3 style={{ paddingBottom: '8px' }}>Retirement Calculator</h3>

              <form
                className="retirement-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  calculateRetirement();
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label>Current Age</label>
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Retirement Age</label>
                    <input
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Life Expectancy</label>
                    <input
                      type="number"
                      value={lifeExpectancy}
                      onChange={(e) => setLifeExpectancy(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Current Assets ($)</label>
                    <input
                      type="number"
                      value={currentAssets}
                      onChange={(e) => setCurrentAssets(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Real Investment Return (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Pre-Tax Income ($)</label>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Savings Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#16a34a',
                    color: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#15803d'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#16a34a'}
                  onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
                  onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Calculate Retirement Income
                </button>
              </form>

              {monthlyRetirementIncome !== null && (
                <div className="retirement-result">
                  <h4 style={{ paddingTop: '16px' }}>Estimated Monthly Retirement Income</h4>
                  <div className="income-amount">
                    $
                    {monthlyRetirementIncome.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </div>
                  <small>Based on the 4% withdrawal rule</small>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Finances; 