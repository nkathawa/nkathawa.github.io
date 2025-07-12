import React from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';

const Article = () => {
  const { id } = useParams();

  const articles = {
    budgeting101: {
      title: 'Budgeting 101',
      date: 'April 12, 2024',
      category: 'Budgeting',
      readTime: '5 min read',
      content: `
        <div style="display: flex; flex-direction: column; align-items: center; padding-top: 20px; margin-bottom: 2rem;">
          <img src="/budget.jpg" alt="Budget" style="width: 100%; max-width: 600px; border-radius: 8px;" />
        </div>
        
        <p>
          I firmly believe that a budget is the foundation of good finances. I highly recommend starting any financial journey with a sound budget, as it provides the guardrails needed to gain positive momentum with your finances. Budgeting – and sticking to a budget in your spending – is more about switching your mentality rather than following strict guidelines. You first need to understand yourself and why you spend (and save) the way you do.
        </p>
        
        <p>
          When starting from square one, a great approach is to track your spending first for a few months. By doing this, you are able to see exactly where your money is going. At the end of each month, organize your transactions into "buckets" – in other words, look at each transaction and decide to which category it belongs.
        </p>
        
        <p>
          Categories are largely personal, but there are some basic buckets anyone can probably begin with:
        </p>
        
        <div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
          <img src="/budget_categories.png" alt="Budget Categories" style="width: 40%; max-width: 400px; border-radius: 8px;" />
        </div>
        
        <p>
          If you don't know where to start, this might be a good place to begin categorizing transactions. As you start to see the trends of your monthly spending, you can do two things: build your budget, and work to reduce your costs. By seeing your monthly costs for Dining/Entertainment are between $100 and $150 monthly, you can analyze your transactions and honestly decide if that is what you'd like to be spending. Only you can decide this. If you come to the conclusion that the spending is unnecessary, or you simply feel you are spending more than the joy that that category is bringing you, you can then work to reduce your spending and set a budget lower than your typical spend. In that case, you might try to set a hard cap of $100/month, and see how that goes for you.
        </p>
        
        <p>
          Little by little, you will begin to see the trends in your spending, analyze each category, and set realistic budgets, until you have a budget built out that you can stick to. As you continue to review your monthly transactions, you might find new categories to add to the budget, such as clothing, travel, etc. You may also decide to break a bucket into multiple smaller buckets for better visibility. An example would be turning Transportation into Car Payment, Gas, Car Insurance, and Regular Maintenance. By doing this, you will improve your tracking and get greater visibility into how your money is working for you.
        </p>
        
        <p>
          To give an example of how to do this practically, we'll work off a $50,000 salary. The concept of take-home pay is essentially whatever hits your bank account on a monthly basis (so less taxes, health insurance, employer-sponsored retirement plan savings, etc.). Let's say that your take-home pay is then $3,000 monthly. Your budget with simple categories could look like this:
        </p>
        
        <div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
          <img src="/budget_spend.png" alt="Budget Spending" style="width: 40%; max-width: 400px; border-radius: 8px;" />
        </div>
        
        <p>
          Note this is just an example. Every situation is unique. If you live in a high cost of living area, your housing budget may need to be significantly higher. In that case, you would need to flex other areas. Perhaps you don't need a car, as you live in New York City? That savings there could go to housing and the higher cost of groceries and restaurants in the city.
        </p>
        
        <p>
          So how can one get started with budgeting? By following the above steps, over the course of a few months, you can get to a position of greater awareness. It's only through awareness that we can make intentional decisions about our finances. For example, if you don't know that your grocery bill as a single person is $600/month, how can you ever hope to reduce that? The key to understanding is visibility. Learn your patterns, and make conscious decisions to reduce (or maintain) your spending levels in different categories. Create new categories and break out larger buckets as you learn more and more. Track and scrutinize transactions and, in time, you'll have your money working for you, rather than the other way around. And once you're there, you can begin gaining control of your finances and build an emergency fund, save more for retirement and other goals, and generally build for the future.
        </p>
      `
    },
    retirement: {
      title: 'Planning for Retirement: Start Early, Retire Comfortably',
      date: 'March 28, 2024',
      category: 'Retirement',
      readTime: '7 min read',
      content: `
        <h2>The Power of Compound Interest</h2>
        <p>The earlier you start planning for retirement, the better off you'll be. This isn't just financial advice - it's mathematical fact. Compound interest is the eighth wonder of the world, and time is your greatest ally when it comes to building wealth.</p>
        
        <h2>Why Start Early?</h2>
        <p>Let's look at a simple example: If you invest $5,000 per year starting at age 25, you could have over $1 million by age 65 (assuming a 7% annual return). But if you wait until age 35 to start, you'd need to invest over $10,000 per year to reach the same goal.</p>
        
        <h2>Understanding Retirement Accounts</h2>
        <h3>401(k) Plans</h3>
        <p>If your employer offers a 401(k), take advantage of it! These plans offer tax advantages and often include employer matching contributions. Aim to contribute at least enough to get the full employer match - it's essentially free money.</p>
        
        <h3>Individual Retirement Accounts (IRAs)</h3>
        <p>IRAs offer additional tax advantages for retirement savings. Traditional IRAs provide tax deductions on contributions, while Roth IRAs offer tax-free withdrawals in retirement.</p>
        
        <h2>How Much Should You Save?</h2>
        <p>A general rule of thumb is to save 10-15% of your income for retirement. However, this can vary based on your age, income, and retirement goals. Use online calculators to determine your specific needs.</p>
        
        <h2>Investment Strategies</h2>
        <ul>
          <li><strong>Diversification:</strong> Don't put all your eggs in one basket</li>
          <li><strong>Asset Allocation:</strong> Balance stocks, bonds, and other investments based on your age and risk tolerance</li>
          <li><strong>Regular Rebalancing:</strong> Adjust your portfolio periodically to maintain your target allocation</li>
        </ul>
        
        <h2>Common Retirement Planning Mistakes</h2>
        <ul>
          <li>Not starting early enough</li>
          <li>Not taking advantage of employer matches</li>
          <li>Being too conservative or too aggressive with investments</li>
          <li>Not considering healthcare costs in retirement</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>If you haven't started saving for retirement yet, don't panic. Start today, even if it's with a small amount. The key is consistency and time in the market.</p>
      `
    },
    investing: {
      title: 'Investing Basics: Building Wealth Through Smart Investments',
      date: 'March 15, 2024',
      category: 'Investing',
      readTime: '6 min read',
      content: `
        <h2>What is Investing?</h2>
        <p>Investing is the process of putting your money to work to generate returns over time. Unlike saving, which typically involves low-risk, low-return options like savings accounts, investing involves taking calculated risks to potentially earn higher returns.</p>
        
        <h2>Why Invest?</h2>
        <p>Investing is essential for building long-term wealth because:</p>
        <ul>
          <li>It helps you beat inflation</li>
          <li>It provides the potential for higher returns than savings accounts</li>
          <li>It's necessary for achieving major financial goals like retirement</li>
        </ul>
        
        <h2>Types of Investments</h2>
        <h3>Stocks</h3>
        <p>When you buy a stock, you're purchasing a small ownership stake in a company. Stocks offer the potential for high returns but also come with higher risk.</p>
        
        <h3>Bonds</h3>
        <p>Bonds are essentially loans you make to companies or governments. They typically offer lower returns than stocks but are generally less risky.</p>
        
        <h3>Mutual Funds and ETFs</h3>
        <p>These are collections of stocks, bonds, or other investments that allow you to diversify your portfolio with a single investment.</p>
        
        <h2>Risk vs. Reward</h2>
        <p>Understanding the relationship between risk and reward is crucial for successful investing. Generally, higher potential returns come with higher risk. Your investment strategy should align with your risk tolerance and time horizon.</p>
        
        <h2>Getting Started with Investing</h2>
        <ol>
          <li><strong>Build an Emergency Fund:</strong> Before investing, ensure you have 3-6 months of expenses saved</li>
          <li><strong>Start with Retirement Accounts:</strong> Take advantage of tax-advantaged accounts like 401(k)s and IRAs</li>
          <li><strong>Consider Index Funds:</strong> These low-cost funds track market indexes and are great for beginners</li>
          <li><strong>Dollar-Cost Averaging:</strong> Invest regularly regardless of market conditions</li>
        </ol>
        
        <h2>Common Investment Mistakes</h2>
        <ul>
          <li>Trying to time the market</li>
          <li>Investing without a plan</li>
          <li>Not diversifying your portfolio</li>
          <li>Letting emotions drive investment decisions</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Investing doesn't have to be complicated. Start simple, stay consistent, and focus on the long term. Remember, the best time to start investing was yesterday. The second best time is today.</p>
      `
    }
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <button className="btn btn-primary" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article">
      <div className="container">
        <div className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-date">{article.date}</p>
        </div>
        
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
        
        <div className="article-footer">
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article; 