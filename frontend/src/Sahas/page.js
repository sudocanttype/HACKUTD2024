import React, { useState, useRef } from 'react';
import { ArrowUpDown, AlertTriangle, FileText, Search } from 'lucide-react';

const Page = () => {
  const userName = 'Sahas Sharma';
  const assetsManaged = '$1.2 Billion';
  const activeClients = 350;

  // Mock transaction data for each client
  const clientTransactions = {
    '8472-9123': [ // Sarah Johnson
      { id: 1, date: '2024-03-15', amount: 50000, type: 'Deposit', status: 'Completed' },
      { id: 2, date: '2024-03-10', amount: -15000, type: 'Withdrawal', status: 'Completed' },
      { id: 3, date: '2024-03-05', amount: 25000, type: 'Investment', status: 'Pending' },
    ],
    '8472-9124': [ // Michael Chen
      { id: 4, date: '2024-03-14', amount: 100000, type: 'Transfer', status: 'Completed' },
      { id: 5, date: '2024-03-09', amount: -30000, type: 'Withdrawal', status: 'Failed' },
      { id: 6, date: '2024-03-01', amount: 75000, type: 'Deposit', status: 'Completed' },
    ],
    '8472-9125': [ // Emily Rodriguez
      { id: 7, date: '2024-03-13', amount: 20000, type: 'Investment', status: 'Completed' },
      { id: 8, date: '2024-03-08', amount: -5000, type: 'Withdrawal', status: 'Completed' },
      { id: 9, date: '2024-03-03', amount: 15000, type: 'Deposit', status: 'Completed' },
    ],
    '8472-9126': [ // David Kim
      { id: 10, date: '2024-03-12', amount: 200000, type: 'Transfer', status: 'Pending' },
      { id: 11, date: '2024-03-07', amount: -50000, type: 'Withdrawal', status: 'Completed' },
      { id: 12, date: '2024-03-02', amount: 150000, type: 'Deposit', status: 'Completed' },
    ],
    '8472-9127': [ // Rachel Thompson
      { id: 13, date: '2024-03-11', amount: 30000, type: 'Investment', status: 'Completed' },
      { id: 14, date: '2024-03-06', amount: -10000, type: 'Withdrawal', status: 'Failed' },
      { id: 15, date: '2024-03-04', amount: 25000, type: 'Deposit', status: 'Completed' },
    ],
  };

  const clients = [
    { id: 1, name: 'Sarah Johnson', accountNumber: '8472-9123', riskLevel: 'Low' },
    { id: 2, name: 'Michael Chen', accountNumber: '8472-9124', riskLevel: 'Medium' },
    { id: 3, name: 'Emily Rodriguez', accountNumber: '8472-9125', riskLevel: 'Low' },
    { id: 4, name: 'David Kim', accountNumber: '8472-9126', riskLevel: 'High' },
    { id: 5, name: 'Rachel Thompson', accountNumber: '8472-9127', riskLevel: 'Medium' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    
    if (searchValue.length >= 2) {
      const filtered = clients.filter((client) =>
        client.name.toLowerCase().includes(searchValue) ||
        client.accountNumber.includes(searchValue)
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const handleSort = (field) => {
    const newDirection = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
    
    const sortedTransactions = [...currentTransactions].sort((a, b) => {
      if (field === 'date') {
        return newDirection === 'asc' 
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (field === 'amount') {
        return newDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
      }
      return 0;
    });
    
    setCurrentTransactions(sortedTransactions);
  };

  const openTransactionModal = (client) => {
    setSelectedClient(client);
    setCurrentTransactions(clientTransactions[client.accountNumber]);
    document.getElementById('transaction_modal').showModal();
  };

  const openFraudModal = (client) => {
    setSelectedClient(client);
    document.getElementById('fraud_modal').showModal();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-success';
      case 'Pending': return 'text-warning';
      case 'Failed': return 'text-error';
      default: return 'text-base-content';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-5 bg-gradient-to-b from-primary/30 to-base-100">
        {/* Navbar */}
        <div className="navbar bg-primary rounded-box shadow-lg">
          <div className="flex items-center justify-between w-full px-4">
            <a className="btn btn-ghost text-xl text-base-100">ClearWay</a>
            <div className="flex space-x-2">
              <button className="btn btn-ghost text-base-100">Dashboard</button>
              <button className="btn btn-ghost text-base-100">Clients</button>
              <button className="btn btn-ghost text-base-100">Reports</button>
              <button className="btn btn-ghost text-base-100">Check Validation</button>
            </div>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="card bg-base-100 shadow-xl my-6 mx-4">
          <div className="card-body">
            <h2 className="card-title text-primary">Portfolio Summary</h2>
            <div className="flex justify-between mt-4">
              <div>Total Assets Managed:</div>
              <div className="text-3xl font-semibold text-primary">{assetsManaged}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Active Clients:</div>
              <div className="text-3xl font-semibold text-primary">{activeClients}</div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mx-4 my-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <input
              type="text"
              placeholder="Search by client name or account number..."
              value={searchTerm}
              onChange={handleSearch}
              className="input input-bordered w-full pl-12 focus:input-primary"
            />
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="mt-4 card bg-base-100 shadow-xl">
              <div className="card-body p-0">
                {searchResults.length > 0 ? (
                  searchResults.map((client) => (
                    <div key={client.id} className="p-6 border-b border-base-200 last:border-none">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{client.name}</h3>
                          <p className="text-base-content/80">Account: {client.accountNumber}</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => openTransactionModal(client)}
                            className="btn btn-primary"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            View Transactions
                          </button>
                          <button
                            onClick={() => openFraudModal(client)}
                            className="btn btn-error"
                          >
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Report Suspicious
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-base-content/80">
                    No clients found matching your search.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Transaction Modal */}
        <dialog id="transaction_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-xl text-primary mb-4">
              {selectedClient && `Transaction History - ${selectedClient.name}`}
            </h3>
            
            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => handleSort('date')}
                className="btn btn-ghost btn-sm"
              >
                Sort by Date <ArrowUpDown className="h-4 w-4 ml-2" />
              </button>
              <button 
                onClick={() => handleSort('amount')}
                className="btn btn-ghost btn-sm"
              >
                Sort by Amount <ArrowUpDown className="h-4 w-4 ml-2" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{new Date(transaction.date).toLocaleDateString()}</td>
                      <td>{transaction.type}</td>
                      <td className={transaction.amount < 0 ? 'text-error' : 'text-success'}>
                        ${Math.abs(transaction.amount).toLocaleString()}
                      </td>
                      <td className={getStatusColor(transaction.status)}>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-primary">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        {/* Fraud Modal */}
        <dialog id="fraud_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-primary">Report Suspicious Activity</h3>
            <div className="alert alert-error mt-4">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <h4 className="font-bold">Important Notice</h4>
                <p className="text-sm">
                  This will flag the account for immediate review by our compliance team.
                </p>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-error">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content border-t">
        <p>Privacy Policy | Terms of Service | Copyright © 2024 ClearWay</p>
      </footer>
    </div>
  );
};

export default Page;
