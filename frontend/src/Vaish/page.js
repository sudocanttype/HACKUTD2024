import React, { useState } from "react";

// Helper function to generate random dates for the transactions
const generateRandomDate = () => {
  const start = new Date(2023, 0, 1); // January 1st, 2023
  const end = new Date(); // Current date
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toLocaleDateString();
};

const VaishPage = () => {
  // Transaction data array with random dates
  const transactions = [
    {
      id: 1,
      amount: 5000,
      description: "Grocery Store",
      date: generateRandomDate(),
    },
    {
      id: 2,
      amount: 1200,
      description: "Online Shopping",
      date: generateRandomDate(),
    },
    {
      id: 3,
      amount: 500,
      description: "Coffee Shop",
      date: generateRandomDate(),
    },
    {
      id: 4,
      amount: 2000,
      description: "Rent Payment",
      date: generateRandomDate(),
    },
    {
      id: 5,
      amount: 500,
      description: "Coffee Shop",
      date: generateRandomDate(),
    },
    {
      id: 6,
      amount: 2000,
      description: "Rent Payment",
      date: generateRandomDate(),
    },
    {
      id: 7,
      amount: 500,
      description: "Coffee Shop",
      date: generateRandomDate(),
    },
    {
      id: 8,
      amount: 2000,
      description: "Rent Payment",
      date: generateRandomDate(),
    },
    {
      id: 9,
      amount: 1500,
      description: "Dining Out",
      date: generateRandomDate(),
    },
    {
      id: 10,
      amount: 1000,
      description: "Movie Tickets",
      date: generateRandomDate(),
    },
    {
      id: 11,
      amount: 2000,
      description: "Rent Payment",
      date: generateRandomDate(),
    },
    {
      id: 12,
      amount: 500,
      description: "Coffee Shop",
      date: generateRandomDate(),
    },
    {
      id: 13,
      amount: 2000,
      description: "Rent Payment",
      date: generateRandomDate(),
    },
    {
      id: 14,
      amount: 1500,
      description: "Dining Out",
      date: generateRandomDate(),
    },
    {
      id: 15,
      amount: 1000,
      description: "Movie Tickets",
      date: generateRandomDate(),
    },
  ];

  // State to manage if user wants to see more transactions
  const [showAll, setShowAll] = useState(false);

  // Handle card click to toggle view more transactions
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <>
      <div className="p-5 pb-32 bg-indigo-50">
        <div className="navbar bg-indigo-500 px-10 py-3 rounded-3xl drop-shadow-lg">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl text-white">ClearWay</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="font-bold text-white mr-5 mt-1">About Us</a>
              </li>
              <li>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-10 my-36">
          <div className="flex justify-between items-center my-5">
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold text-gray-800">
                Welcome, Vaishnavi
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Here's your financial overview:
              </p>
              {/* Stats section */}
              <div className="my-6 bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">Current Balance</div>
                  <div className="text-3xl font-semibold text-indigo-600">
                    $89,400
                  </div>
                </div>
              </div>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn glass w-48 hover:bg-indigo-300 bg-indigo-200 skeleton rounded-md" onClick={()=>document.getElementById('my_modal_4').showModal()}>Deposit Check</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>

            <div
              className="card w-2/5 bg-white shadow-lg cursor-pointer max-h-[400px] overflow-y-auto"
              onClick={toggleShowAll}
            >
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold text-gray-800">
                  Transaction History
                </h2>
                <table className="table-auto w-full text-sm text-gray-600 mt-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through the transactions array */}
                    {transactions.map((transaction, index) => (
                      <tr
                        key={transaction.id}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-indigo-100`}
                      >
                        <td className="border-b px-6 py-4">
                          {transaction.date}
                        </td>
                        <td className="border-b px-6 py-4 text-indigo-600">
                          ${transaction.amount.toLocaleString()}
                        </td>
                        <td className="border-b px-6 py-4">
                          {transaction.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </div>

        <div className="mx-36">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Bank Statements
          </h2>
          <div className="collapse collapse-arrow bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300">
            <input type="radio" name="my-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Bank Statement for January 2024
            </div>
            <div className="collapse-content">
              <div className="bg-white p-10 rounded-lg shadow-lg text-gray-700">
                <p className="font-semibold">Dear Vaishnavi,</p>
                <p className="mt-2">
                  Here is your bank statement for January 2024:
                </p>
                <div className="mt-4">
                  <p>
                    <strong>Starting Balance:</strong> $80,000
                  </p>
                  <p>
                    <strong>Ending Balance:</strong> $89,400
                  </p>
                </div>
                <div className="mt-6">
                  <p>
                    <strong>Transactions:</strong>
                  </p>
                  <ul className="list-inside pl-4">
                    <li>Grocery Store - $5000</li>
                    <li>Online Shopping - $1200</li>
                    <li>Rent Payment - $2000</li>
                    {/* Add more transactions here if needed */}
                  </ul>
                </div>
                <div className="mt-6">
                  <p>Thank you for banking with us!</p>
                  <p>Sincerely,</p>
                  <p>The ClearWay Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat this accordion for each month with different data */}
          <div className="collapse collapse-arrow bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300 mt-4">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-xl font-medium">
              Bank Statement for February 2024
            </div>
            <div className="collapse-content">
              <div className="bg-white p-10 rounded-lg shadow-lg text-gray-700">
                <p className="font-semibold">Dear Vaishnavi,</p>
                <p className="mt-2">
                  Here is your bank statement for February 2024:
                </p>
                <div className="mt-4">
                  <p>
                    <strong>Starting Balance:</strong> $89,400
                  </p>
                  <p>
                    <strong>Ending Balance:</strong> $85,000
                  </p>
                </div>
                <div className="mt-6">
                  <p>
                    <strong>Transactions:</strong>
                  </p>
                  <ul className="list-inside pl-4">
                    <li>Movie Tickets - $1000</li>
                    <li>Dining Out - $1500</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p>Thank you for banking with us!</p>
                  <p>Sincerely,</p>
                  <p>The ClearWay Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="my-10 footer footer-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default VaishPage;
