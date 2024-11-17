import React from 'react';

const InvestmentPage = () => {
  const investmentOptions = [
    {
      title: "Stock Market",
      description: "Invest in publicly traded companies through our stock trading platform",
      risk: "Medium to High",
      minInvestment: "$100",
      expectedReturns: "8-12% annually",
      features: [
        "Real-time market data",
        "Commission-free trading",
        "Expert analysis and insights",
        "Diversification tools"
      ]
    },
    {
      title: "Mutual Funds",
      description: "Professionally managed investment pools with diversified portfolios",
      risk: "Low to Medium",
      minInvestment: "$500",
      expectedReturns: "6-10% annually",
      features: [
        "Professional management",
        "Automatic diversification",
        "Lower risk profile",
        "Regular rebalancing"
      ]
    },
    {
      title: "Fixed Deposits",
      description: "Secure, fixed-term deposits with guaranteed returns",
      risk: "Low",
      minInvestment: "$1,000",
      expectedReturns: "4-5% annually",
      features: [
        "Guaranteed returns",
        "Fixed investment term",
        "FDIC insured",
        "No market risk"
      ]
    }
  ];

  const educationalResources = [
    {
      title: "Investment Basics",
      topics: [
        "Understanding Risk vs Return",
        "Portfolio Diversification",
        "Asset Allocation Strategies",
        "Market Analysis Fundamentals"
      ]
    },
    {
      title: "Market Insights",
      topics: [
        "Current Market Trends",
        "Economic Indicators",
        "Industry Analysis",
        "Global Market Overview"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-indigo-50 p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Investment Opportunities</h1>
        <p className="text-xl text-gray-600">Grow your wealth with our diverse investment options</p>
      </div>

      {/* Investment Options */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Investment Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentOptions.map((option, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{option.title}</h2>
                <p className="text-gray-600">{option.description}</p>
                <div className="space-y-2 mt-4">
                  <p><span className="font-semibold">Risk Level:</span> {option.risk}</p>
                  <p><span className="font-semibold">Minimum Investment:</span> {option.minInvestment}</p>
                  <p><span className="font-semibold">Expected Returns:</span> {option.expectedReturns}</p>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Key Features:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-primary w-full">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Resources */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationalResources.map((resource, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{resource.title}</h2>
                <ul className="space-y-2">
                  {resource.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-outline btn-primary w-full">Access Resources</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;