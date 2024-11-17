import React from "react";
import { useNavigate } from "react-router-dom";

const DigitalInvestmentPage = () => {
  const navigate = useNavigate();

  const userProfile = {
    fullName: "Vaishnavi Sharma",
    email: "vaishnavi.sharma@example.com",
    address: "123 Tech Park Avenue, Silicon Valley, CA 94025",
    phone: "(555) 123-4567",
    accountType: "ClearWay Banking",
    DOB: "January 2020",
  };
  const bankers = [
    {
      name: "Michael Chen",
      title: "Senior Robo-Advisory Specialist",
      email: "m.chen@clearway.com",
      phone: "(555) 234-5678",
      availability: "Mon-Fri, 9AM-5PM EST",
      expertise: "Automated Portfolio Management",
    },
    {
      name: "Sarah Jenkins",
      title: "Cryptocurrency Investment Manager",
      email: "s.jenkins@clearway.com",
      phone: "(555) 345-6789",
      availability: "Mon-Fri, 8AM-6PM EST",
      expertise: "Digital Assets & DeFi",
    },
    {
      name: "David Rodriguez",
      title: "P2P Lending Coordinator",
      email: "d.rodriguez@clearway.com",
      phone: "(555) 456-7890",
      availability: "Mon-Fri, 9AM-7PM EST",
      expertise: "Alternative Lending Solutions",
    },
  ];
  const digitalInvestments = [
    {
      id: "robo_advisor_modal",
      title: "Robo-Advisor Portfolios",
      description: "AI-powered investment strategies tailored to your goals",
      risk: "Customizable",
      minInvestment: "$10",
      expectedReturns: "7-15% annually",
      features: [
        "Automated rebalancing",
        "Tax-loss harvesting",
        "Smart asset allocation",
        "24/7 portfolio monitoring",
      ],
      details:
        "Robo-advisor portfolios use advanced AI algorithms to design and manage your investments, ensuring your portfolio aligns with your financial goals. Perfect for hands-off investors who want optimized returns without daily involvement.",
      contact:
        "Contact us at roboadvisors@clearway.com or call (555) 789-0123.",
    },
    {
      id: "crypto_modal",
      title: "Cryptocurrency",
      description:
        "Digital asset investments in major cryptocurrencies and tokens",
      risk: "High",
      minInvestment: "$1",
      expectedReturns: "Variable",
      features: [
        "Instant trading",
        "Cold storage security",
        "Multiple crypto pairs",
        "DeFi integration",
      ],
      details:
        "Dive into the world of digital currencies with our secure platform. Trade major cryptocurrencies like Bitcoin and Ethereum while ensuring your assets are protected with state-of-the-art security.",
      contact: "Contact us at crypto@clearway.com or call (555) 234-5678.",
    },
    {
      id: "p2p_lending_modal",
      title: "P2P Lending",
      description: "Direct peer-to-peer lending with automated loan selection",
      risk: "Medium",
      minInvestment: "$25",
      expectedReturns: "8-12% annually",
      features: [
        "Automated loan diversification",
        "Monthly income streams",
        "Multiple risk grades",
        "Secondary market trading",
      ],
      details:
        "Empower borrowers while earning steady returns. Our P2P lending platform offers a unique opportunity to invest in vetted loans with varying risk grades.",
      contact: "Contact us at p2plending@clearway.com or call (555) 345-6789.",
    },
  ];

  const detailedInvestments = {
    roboAdvisor: {
      overview:
        "Our Robo-Advisor leverages sophisticated algorithms and machine learning to create and manage diversified investment portfolios tailored to your specific goals and risk tolerance.",
      process: [
        "Complete an investment profile questionnaire",
        "Receive a personalized portfolio recommendation",
        "Fund your account",
        "Automatic rebalancing and optimization begins",
      ],
      portfolioTypes: [
        "Conservative (20% Stocks / 80% Bonds)",
        "Moderate (50% Stocks / 50% Bonds)",
        "Aggressive (80% Stocks / 20% Bonds)",
        "Custom allocation available",
      ],
      fees: [
        "0.25% annual management fee",
        "No trading commissions",
        "No account minimum fees",
        "Free tax-loss harvesting",
      ],
      requirements:
        "Government-issued ID, US bank account, minimum $10 initial deposit",
    },
    crypto: {
      overview:
        "Access the world of digital assets through our secure cryptocurrency investment platform. Trade major cryptocurrencies and tokens with institutional-grade security and advanced trading features.",
      supportedAssets: [
        "Bitcoin (BTC)",
        "Ethereum (ETH)",
        "Solana (SOL)",
        "Cardano (ADA)",
        "30+ additional cryptocurrencies",
      ],
      securityFeatures: [
        "Multi-signature wallets",
        "Cold storage for 95% of assets",
        "24/7 security monitoring",
        "Regular security audits",
        "Two-factor authentication",
      ],
      tradingFeatures: [
        "Real-time market data",
        "Advanced charting tools",
        "Limit and market orders",
        "Dollar-cost averaging",
        "API access available",
      ],
      fees: [
        "0.1% trading fee",
        "Free deposits",
        "Network fees for withdrawals",
        "No monthly account fees",
      ],
    },
    p2pLending: {
      overview:
        "Earn consistent returns through our peer-to-peer lending platform. Our automated loan selection system helps you build a diversified portfolio of consumer and business loans.",
      loanTypes: [
        "Personal loans",
        "Business loans",
        "Real estate loans",
        "Education financing",
        "Medical loans",
      ],
      riskGrades: [
        "A+ (lowest risk, 6-8% returns)",
        "A (8-10% returns)",
        "B (10-12% returns)",
        "C (12-14% returns)",
        "D (14-16% returns)",
      ],
      features: [
        "Automated loan selection",
        "Portfolio diversification tools",
        "Secondary market trading",
        "Monthly income distributions",
        "Detailed loan performance analytics",
      ],
      protection: [
        "Reserve fund for defaults",
        "Multiple payment collection methods",
        "Strict borrower verification",
        "Legal recovery process",
      ],
    },
  };
  const faqItems = [
    {
      question: "How is digital investing different from traditional banking?",
      answer:
        "Digital investing eliminates traditional banking intermediaries, offering lower fees, 24/7 access, automated portfolio management, and instant account setup. You maintain full control of your investments through our secure platform.",
    },
    {
      question: "Is digital investing safe?",
      answer:
        "We implement bank-level security measures including 256-bit encryption, two-factor authentication, and regular security audits. All cash holdings are FDIC insured up to $250,000, and securities are protected by SIPC up to $500,000.",
    },
    {
      question: "How quickly can I start investing?",
      answer:
        "You can start investing within minutes. Simply verify your identity, connect your bank account, and make your first investment. There's no paperwork or branch visits required.",
    },
    {
      question: "Can I withdraw my money at any time?",
      answer:
        "Most investments can be liquidated and withdrawn within 2-3 business days. Some P2P lending investments may have longer holding periods. There are no withdrawal penalties except for early termination of fixed-term investments.",
    },
    {
      question: "What are the fees?",
      answer:
        "Our robo-advisor charges 0.25% annually. Crypto trading has a 0.1% fee per trade. P2P lending has no platform fees - you receive 100% of the interest earned minus loan servicing fees.",
    },
  ];

  const statsHighlights = [
    { label: "Users Worldwide", value: "2M+" },
    { label: "Assets Under Management", value: "$5B+" },
    { label: "Average Annual Return", value: "12.8%" },
    { label: "Investment Options", value: "1000+" },
  ];
  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Existing content remains the same until the Investment Options section */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 pt-3 bg-white/80 backdrop-blur-sm">
        <div className="navbar bg-indigo-500 px-10 py-3 rounded-3xl shadow-sm">
          <div className="flex-1">
            <a
              className="btn btn-ghost text-xl text-white"
              onClick={() => navigate("/customer")}
            >
              ClearWay
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <div
                  className="cursor-pointer mr-2 mt-[2.5px] flex items-center"
                  onClick={() =>
                    document.getElementById("question_modal").showModal()
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M9.09 9a3 3 0 113.91 3.41l-.16.09c-.44.26-.73.76-.73 1.3v1M12 22a10 10 0 100-20 10 10 0 000 20z"
                    />
                  </svg>
                </div>
              </li>

              <li>
                <a className="font-bold text-white mr-5 mt-[4.5px]">
                  About Us
                </a>
              </li>
              <li>
                <button className="font-bold btn bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
                  Investment
                </button>
              </li>
              <li>
                <div
                  className="avatar cursor-pointer"
                  onClick={() =>
                    document.getElementById("profile_modal").showModal()
                  }
                >
                  <div className=" ml-5 ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <dialog id="profile_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex items-center space-x-4 mb-6">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {userProfile.fullName}
              </h3>
              <p className="text-indigo-600">{userProfile.accountType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </h4>
              <p className="text-gray-800">{userProfile.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Mailing Address
              </h4>
              <p className="text-gray-800">{userProfile.address}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Phone Number
              </h4>
              <p className="text-gray-800">{userProfile.phone}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Date of Birth
              </h4>
              <p className="text-gray-800">{userProfile.DOB}</p>
            </div>
          </div>
        </div>
      </dialog>{" "}
      <dialog id="profile_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex items-center space-x-4 mb-6">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {userProfile.fullName}
              </h3>
              <p className="text-indigo-600">{userProfile.accountType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </h4>
              <p className="text-gray-800">{userProfile.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Mailing Address
              </h4>
              <p className="text-gray-800">{userProfile.address}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Phone Number
              </h4>
              <p className="text-gray-800">{userProfile.phone}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Date of Birth
              </h4>
              <p className="text-gray-800">{userProfile.DOB}</p>
            </div>
          </div>
        </div>
      </dialog>
      <dialog id="question_modal" className="modal">
  <div className="modal-box max-w-lg">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      Need Help? We've Got You!
    </h3>
    <p className="text-gray-600 mb-4">
      We understand that online banking can feel overwhelming sometimes. 
      Don't worry—we're here to help you navigate through any confusion. 
      Book a meeting with one of our friendly advisors to get clear, 
      step-by-step guidance tailored to your needs!
    </p>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select a Date:
      </label>
      <input type="date" className="input input-bordered w-full" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Pick a Time Slot:
      </label>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Choose a time slot
        </option>
        <option>10:00 AM - 10:30 AM</option>
        <option>11:00 AM - 11:30 AM</option>
        <option>2:00 PM - 2:30 PM</option>
      </select>
    </div>
    <button
      className="btn bg-indigo-500 hover:bg-indigo-600 text-white w-full"
      onClick={() => alert("Meeting link: https://zoom.us/j/123456789")}
    >
      Book Your Meeting
    </button>
  </div>
</dialog>

      {/* Hero Section */}
      <div className="hero text-gray-900 pt-32 pb-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Invest in Your Future, Digitally
            </h1>
            <p className="py-6 text-gray-600">
              Skip the banks. Start investing in minutes with as little as $1.
            </p>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-white">
          {statsHighlights.map((stat, index) => (
            <div key={index} className="stat">
              <div className="stat-title text-gray-500">{stat.label}</div>
              <div className="stat-value text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Updated Investment Options section with modal triggers */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Digital Investment Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalInvestments.map((option, index) => (
            <div
              key={index}
              className="card bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="card-body">
                <h3 className="card-title text-gray-900">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
                <div className="space-y-3">
                  <div className="badge bg-gray-100 text-gray-700 border-none">{`Risk Level: ${option.risk}`}</div>
                  <div className="badge bg-gray-100 text-gray-700 border-none">{`Min Investment: ${option.minInvestment}`}</div>
                  <div className="badge bg-gray-100 text-gray-700 border-none">{`Returns: ${option.expectedReturns}`}</div>
                </div>
                <ul className="menu bg-gray-50 rounded-box mt-4">
                  {option.features.map((feature, idx) => (
                    <li key={idx}>
                      <a className="text-gray-700 hover:bg-gray-100">
                        {feature}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn bg-indigo-600 hover:bg-gray-800 text-white border-none rounded-full w-full"
                    onClick={() =>
                      document.getElementById(`modal_${index}`).showModal()
                    }
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Robo-Advisor Modal */}
      <dialog id="modal_0" className="modal">
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl mb-6">
            Robo-Advisor Investment Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Overview</h4>
                <p className="text-gray-600">
                  {detailedInvestments.roboAdvisor.overview}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Investment Process
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.roboAdvisor.process.map((step, idx) => (
                    <li key={idx} className="mb-1">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Portfolio Types</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.roboAdvisor.portfolioTypes.map(
                    (type, idx) => (
                      <li key={idx} className="mb-1">
                        {type}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Fee Structure</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.roboAdvisor.fees.map((fee, idx) => (
                    <li key={idx} className="mb-1">
                      {fee}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">
                  Your Dedicated Advisor
                </h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{bankers[0].name}</p>
                  <p className="text-gray-600">{bankers[0].title}</p>
                  <p className="text-gray-600">{bankers[0].email}</p>
                  <p className="text-gray-600">{bankers[0].phone}</p>
                  <p className="text-gray-600">
                    Available: {bankers[0].availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg">
                  Start your automated investment journey
                </h4>
                <p className="text-gray-600">Begin with just $10</p>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-outline rounded-full">
                  Schedule Demo
                </button>
                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                  Create Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* Cryptocurrency Modal */}
      <dialog id="modal_1" className="modal max-h-[900px]">
        <div className="modal-box max-w-4xl ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl mb-6">
            Cryptocurrency Investment Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Overview</h4>
                <p className="text-gray-600">
                  {detailedInvestments.crypto.overview}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Supported Assets</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.crypto.supportedAssets.map(
                    (asset, idx) => (
                      <li key={idx} className="mb-1">
                        {asset}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Security Features
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.crypto.securityFeatures.map(
                    (feature, idx) => (
                      <li key={idx} className="mb-1">
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Trading Features</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.crypto.tradingFeatures.map(
                    (feature, idx) => (
                      <li key={idx} className="mb-1">
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Fee Structure</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.crypto.fees.map((fee, idx) => (
                    <li key={idx} className="mb-1">
                      {fee}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">
                  Your Crypto Specialist
                </h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{bankers[1].name}</p>
                  <p className="text-gray-600">{bankers[1].title}</p>
                  <p className="text-gray-600">{bankers[1].email}</p>
                  <p className="text-gray-600">{bankers[1].phone}</p>
                  <p className="text-gray-600">
                    Available: {bankers[1].availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg">
                  Enter the world of digital assets
                </h4>
                <p className="text-gray-600">Start trading with $1</p>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-outline rounded-full">
                  Watch Tutorial
                </button>
                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                  Start Trading
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* P2P Lending Modal */}
      <dialog id="modal_2" className="modal">
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl mb-6">
            P2P Lending Investment Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Overview</h4>
                <p className="text-gray-600">
                  {detailedInvestments.p2pLending.overview}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Loan Types</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.p2pLending.loanTypes.map((type, idx) => (
                    <li key={idx} className="mb-1">
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Risk Grades & Returns
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.p2pLending.riskGrades.map(
                    (grade, idx) => (
                      <li key={idx} className="mb-1">
                        {grade}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Platform Features
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.p2pLending.features.map(
                    (feature, idx) => (
                      <li key={idx} className="mb-1">
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Investor Protection
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {detailedInvestments.p2pLending.protection.map(
                    (item, idx) => (
                      <li key={idx} className="mb-1">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">
                  Your P2P Lending Specialist
                </h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{bankers[2].name}</p>
                  <p className="text-gray-600">{bankers[2].title}</p>
                  <p className="text-gray-600">{bankers[2].email}</p>
                  <p className="text-gray-600">{bankers[2].phone}</p>
                  <p className="text-gray-600">
                    Available: {bankers[2].availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section for P2P Modal */}
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg">
                  Ready to start investing?
                </h4>
                <p className="text-gray-600">
                  Get started with as little as $25
                </p>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-outline rounded-full">
                  Schedule Consultation
                </button>
                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                  Open Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-white">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-gray-900">
                  {item.question}
                </div>
                <div className="collapse-content text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="hero bg-indigo-900 text-white py-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">
              Ready to Start Your Digital Investment Journey?
            </h2>
            <p className="py-6">
              Join millions of investors who have already made the switch to
              digital investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalInvestmentPage;
