import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // State to manage modals
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [imageBase64, setImageBase64] = useState(""); // Store base64 image
  const [depositAmount, setDepositAmount] = useState(""); // Store deposit amount

  // Transaction data array with random dates

  const transactions = [
    {
      user_id: "user123",
      amount: 5000,
      date: generateRandomDate(),
      merchant_location: "Grocery Store, Downtown",
      status: "Completed",
      type: "Debit",
    },
    {
      user_id: "user123",
      amount: 1200,
      date: generateRandomDate(),
      merchant_location: "Online Shopping, Amazon",
      status: "Completed",
      type: "Debit",
    },
    {
      user_id: "user123",
      amount: 500,
      date: generateRandomDate(),
      merchant_location: "Coffee Shop, Central Plaza",
      status: "Completed",
      type: "Debit",
    },
    {
      user_id: "user123",
      amount: 2000,
      date: generateRandomDate(),
      merchant_location: "Apartment Complex, Main St.",
      status: "Completed",
      type: "Debit",
    },
    {
      user_id: "user123",
      amount: 1500,
      date: generateRandomDate(),
      merchant_location: "Restaurant, Uptown",
      status: "Completed",
      type: "Debit",
    },
    {
      user_id: "user123",
      amount: 1000,
      date: generateRandomDate(),
      merchant_location: "Movie Theater, Westside",
      status: "Completed",
      type: "Debit",
    },
  ];

  // State to manage if user wants to see more transactions
  const [showAll, setShowAll] = useState(false);

  // Handle card click to toggle view more transactions
  const toggleShowAll = () => setShowAll(!showAll);

  // Handle deposit confirmation
  const handleDeposit = () => {
    // First close the modal
    document.getElementById("my_modal_3").close();

    // Then show the confirmation message after a brief delay
    setTimeout(() => {
      setShowConfirmation(true);

      // Hide the confirmation message after 2 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }, 100); // Small delay to ensure modal closes smoothly
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImageBase64(base64String);
        document.getElementById("uploadedImage").src = base64String;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="p-5 pb-32 bg-indigo-50">
        <div className="fixed top-0 left-0 right-0 z-50 px-5 pt-3 bg-indigo-50">
          <div className="navbar bg-indigo-500 px-10 py-3 rounded-3xl drop-shadow-lg">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl text-white">ClearWay</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a className="font-bold text-white mr-5 mt-[4.5px]">
                    About Us
                  </a>
                </li>
                <li>
                  <button className="font-bold btn text-white mr-5 bg-indigo-500 hover:bg-indigo-600 rounded-full">
                    Investment
                  </button>
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
              <button
                className="btn glass w-48 hover:bg-indigo-300 bg-indigo-200 skeleton rounded-md"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Deposit Check
              </button>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="font-bold btn text-white ml-10 w-48 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Nelle
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Upload Check</h3>
                  <p className="py-4">
                    Enter deposit amount and upload check image:
                  </p>

                  {/* Deposit Amount Input */}
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="depositAmount"
                    >
                      Deposit Amount ($)
                    </label>
                    <input
                      type="number"
                      id="depositAmount"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                      placeholder="Enter amount"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="fileUpload"
                      className="flex flex-col items-center cursor-pointer p-6 bg-indigo-100 rounded-lg shadow-md hover:bg-indigo-200 transition-colors duration-300"
                    >
                      <div className="bg-white p-5 rounded-full shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-12 h-12 text-indigo-600"
                        >
                          <path d="M12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6ZM12 14C8.13401 14 5 17.134 5 20H19C19 17.134 15.866 14 12 14Z"></path>
                        </svg>
                      </div>
                      <div className="mt-4 text-indigo-600 font-medium">
                        <span>Click or Drag to Upload Check</span>
                      </div>
                      <input
                        id="fileUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <img
                      id="uploadedImage"
                      src=""
                      alt="Uploaded Preview"
                      className="max-w-full h-auto mt-4 rounded-lg shadow-md border max-h-[00px] overflow-auto"
                    />
                  </div>
                  <button className="btn mt-4" onClick={handleDeposit}>
                    Deposit Check
                  </button>
                </div>
              </dialog>

              {/* Confirmation Modal */}
              {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center z-50 ">
                  <div className="bg-white p-6 rounded-lg shadow-xl w-3/5 h-2/5">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-center mt-32 text-gray-900">
                        Thank you!
                      </h3>
                      <p className="mt-2 text-gray-600">
                        We will review your deposit and get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
                        Location
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr
                        key={index}
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
                          {transaction.merchant_location}
                        </td>
                        <td className="border-b px-6 py-4">
                          {transaction.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-36 bg-gray-50 rounded-2xl p-20">
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
