import React, { useState, useRef, useEffect} from 'react';
import { ArrowUpDown, AlertTriangle, FileText, Search, CheckCircle, XCircle } from 'lucide-react';
import { getAllUsers } from '../services/user';
import getTransactions from "../services/transaction.js";
import { getPendingChecks } from '../services/deposit_check';

function formatSource(b64){
  // return b64;
  return `data:image/png;base64,${b64}`
}

const Page = () => {
  const userName = 'Sahas Sharma';
  const assetsManaged = '$1.2 Billion';
  const activeClients = 350;
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const [pendingChecks, setPendingChecks] = useState([])

  const [selectedCheck, setSelectedCheck] = useState(null);

  const openCheckModal = () => {
    setSelectedCheck(pendingChecks[0]); // For demo
    document.getElementById('check_modal').showModal();
  };

  const handleCheckDecision = (approved) => {
    console.log(`Check ${selectedCheck.id} was ${approved ? 'approved' : 'denied'}`);
    document.getElementById('check_modal').close();
  };
  const [clients, setClients] = useState([])

  // Complete mock 
  const [users, setusers] = useState([])
  const [transactions, setTransactions] = useState([])

  const fetchTransactions = async (userID) => {
    const transactions = await getTransactions(userID);
    console.log(transactions)
    setTransactions(transactions);
    setCurrentTransactions(transactions);
  };
  useEffect(() => {

  const fetchChecks = async () => {
    const checks = await getPendingChecks();
    console.log(checks['data']['check_deposits'])
    setPendingChecks(checks['data']['check_deposits']);
  };
  const fetchUsers = async () => {
    const users = await getAllUsers();
    setusers(users);
    console.log(users);
    setClients(users);

    setSearchResults(clients);
    setShowResults(true);
  };
    fetchUsers();
    fetchChecks();
  }, []);

  const openTransactionModal = (client) => {
    setSelectedClient(client);
    fetchTransactions(client.id)

    console.log(currentTransactions)
    document.getElementById('transaction_modal').showModal();
  };

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
      const filtered = users.filter((client) =>
        client.name.toLowerCase().includes(searchValue) ||
        client.email.includes(searchValue)
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(true);
      setSearchResults(clients);
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };



  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-5 bg-gradient-to-b from-primary/50 to-base-100">
        {/* Navbar - moved to top */}
        <div className="navbar bg-primary rounded-box shadow-lg mb-6">
          <div className="flex items-center justify-between w-full px-4">
            <a className="btn btn-ghost text-xl text-base-100">ClearWay</a>
            <div className="flex space-x-2">
              <button className="btn btn-ghost text-base-100">Dashboard</button>
              <button className="btn btn-ghost text-base-100">Clients</button>
              <button className="btn btn-ghost text-base-100">Reports</button>
              <button 
                className="btn btn-ghost text-base-100"
                onClick={openCheckModal}
              >
                Check Validation
              </button>
            </div>
          </div>
        </div>

        {/* Welcome Banner - moved below navbar */}
        <div className="mb-6 p-4 bg-base-100 rounded-box shadow-lg">
          <h1 className="text-2xl font-bold text-primary">Welcome Back, {userName}</h1>
          <p className="text-base-content/80 mt-1">
            {getGreeting()}. Lovely weather today.
          </p>
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
              placeholder="Search by client name, account number, or email..."
              value={searchTerm}
              onChange={handleSearch}
              className="input input-bordered w-full pl-12 focus:input-primary"
            />
          </div>

          {/* Search Results (continuing from showResults &&) */}
          {showResults && (
            <div className="mt-4 card bg-base-100 shadow-xl">
              <div className="card-body p-0">
                {searchResults.length > 0 ? (
                  searchResults.map((client) => (
                    <div key={client.id} className="p-6 border-b border-base-200 last:border-none hover:bg-base-200/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{client.name}</h3>
                          <p className="text-base-content/80">Account: {client.id}</p>
                          <p className="text-base-content/70">{client.email}</p>
                          <div className="flex gap-2 mt-1">
                            <span className={`badge ${
                              client.riskLevel === 'High' ? 'badge-error' : 
                              client.riskLevel === 'Medium' ? 'badge-warning' : 
                              'badge-success'
                            }`}>
                              {client.riskLevel} Risk
                            </span>
                            <span className="badge badge-primary">
                              {formatCurrency(client.balance)}
                            </span>
                          </div>
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
                    <tr key={transaction.transaction_id}>
                      <td>{new Date(transaction.date).toLocaleDateString()}</td>
                      <td>{transaction.type}</td>
                      <td className={transaction.amount < 0 ? 'text-error' : 'text-success'}>
                        {formatCurrency(Math.abs(transaction.amount))}
                      </td>
                      <td className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </td>
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
            {selectedClient && (
              <div className="my-4">
                <p className="font-medium">Client: {selectedClient.name}</p>
                <p className="text-sm text-base-content/70">Account: {selectedClient.accountNumber}</p>
              </div>
            )}
            <div className="alert alert-error mt-4">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <h4 className="font-bold">Important Notice</h4>
                <p className="text-sm">
                  This will flag the account for immediate review by our compliance team.
                  Please ensure you have sufficient evidence before proceeding.
                </p>
              </div>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Reason for Report</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="Describe the suspicious activity..."
              ></textarea>
            </div>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <button className="btn btn-ghost">Cancel</button>
                <button className="btn btn-error">Submit Report</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* Add Check Detection Modal */}
      <dialog id="check_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-xl text-primary mb-4">Check Validation</h3>
            
            {selectedCheck && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p><strong>Client:</strong> {selectedCheck.user_id.name}</p>
                    <p><strong>Account:</strong> {selectedCheck.user_id.id}</p>
                    <p><strong>Amount:</strong> {formatCurrency(selectedCheck.transaction_id.amount)}</p>
                    <p><strong>Date Received:</strong> {new Date(selectedCheck.transaction_id.date).toLocaleDateString()}</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-base-200">
                    <img
                      src={formatSource(selectedCheck.image_b64)}
                      alt="Check"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>

                <div className="alert alert-info">
                  <p className="text-sm">
                    Please verify the check details, signature, and amount before approval.
                  </p>
                </div>

                <div className="flex justify-end gap-4">
                  <button 
                    onClick={() => handleCheckDecision(false)}
                    className="btn btn-error gap-2"
                  >
                    <XCircle className="h-4 w-4" />
                    Deny Check
                  </button>
                  <button 
                    onClick={() => handleCheckDecision(true)}
                    className="btn btn-success gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve Check
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Account</th>
                      <th>Amount</th>
                      <th>Date Received</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingChecks.map(check => (
                      <tr key={check.id} className="hover:bg-base-200 cursor-pointer" onClick={() => setSelectedCheck(check)}>
                        <td>{check.user_id.name}</td>
                        <td>{check.user_id.id}</td>
                        <td>{formatCurrency(check.transaction_id.amount)}</td>
                        <td>{new Date(check.transaction_id.date).toLocaleDateString()}</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-ghost">Close</button>
              </form>
            </div>
          </div>
        </dialog>


      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content border-t">
        <p>Privacy Policy | Terms of Service | Copyright © 2024 ClearWay</p>
      </footer>
    </div>
  );
};

export default Page;
          
