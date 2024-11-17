import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "./maps";
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
 
  const [depositAmounStore, setDepositAmountStore] = useState(""); // For deposit amount
  const [uploadedImage, setUploadedImage] = useState(null); // For uploaded image

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", dollars: "" });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = event.target.email.value;
    const dollars = event.target.dollars.value;

    // Store the data in the state
    setFormData({ email, dollars });

    // Optionally, log the data or send it to an API
    console.log("Stored Data:", { email, dollars });

    // Close the modal if needed
    document.getElementById("my_modal_3").close();
  };
  // State to manage modals
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [imageBase64, setImageBase64] = useState(""); // Store base64 image
  const [depositAmount, setDepositAmount] = useState(""); // Store deposit amount

  // Transaction data array with random dates
  const userProfile = {
    fullName: "Vaishnavi Sharma",
    email: "vaishnavi.sharma@example.com",
    address: "123 Tech Park Avenue, Silicon Valley, CA 94025",
    phone: "(555) 123-4567",
    accountType: "ClearWay Banking",
    DOB: "January 2020",
  };
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
    // Close the modal
    document.getElementById("my_modal_4").close();

    // Store the contents (deposit amount and uploaded image)
    const depositData = {
      amount: depositAmount,
      image: uploadedImage,
    };

    // Log the deposit data or send it to the server
    console.log("Deposit Data:", depositData);

    // Optionally, show a confirmation message
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
        setUploadedImage(reader.result); // Save the base64 image to state
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
                  <button
                    className="font-bold btn text-white mr-5 bg-indigo-500 hover:bg-indigo-600 rounded-full"
                    onClick={() => navigate("/investment")}
                  >
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
                    <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
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
        </dialog>
        <dialog id="question_modal" className="modal">
  <div className="modal-box ">
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

        <div className="mx-10 my-44">
          <div className="flex justify-between items-center my-5">
            <div className="w-1/2 mx-5">
              <h1 className="text-4xl  font-semibold text-gray-800">
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
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Deposit Check
              </button>
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
                  <form onSubmit={handleSubmit}>
                    {/* Close button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <h3 className="font-bold text-lg">Nelle</h3>
                    <p className="py-4">Send money to people you know</p>

                    {/* Email input */}
                    <label
                      className="block mb-2 text-sm font-medium"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input input-bordered w-full mb-4"
                      placeholder="Enter your email"
                      required
                    />

                    {/* Dollar input */}
                    <label
                      className="block mb-2 text-sm font-medium"
                      htmlFor="dollars"
                    >
                      Amount in dollars:
                    </label>
                    <input
                      type="number"
                      id="dollars"
                      name="dollars"
                      className="input input-bordered w-full mb-4"
                      placeholder="Enter the amount"
                      min="1"
                      required
                    />

                    {/* Send button */}
                    <button
                      className="btn btn-primary w-full mt-4"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </dialog>

              <dialog id="my_modal_4" className="modal">
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

                    {/* Image Preview */}
                    {uploadedImage && (
                      <img
                        id="uploadedImage"
                        src={uploadedImage}
                        alt="Uploaded Preview"
                        className="max-w-full h-auto mt-4 rounded-lg shadow-md border max-h-[300px] overflow-auto"
                      />
                    )}
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
              className="card w-2/5  bg-white shadow-lg cursor-pointer max-h-[400px] overflow-y-auto"
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
     <Map/>

        <div className="mx-36 bg-white rounded-2xl p-20 shadow-lg shadow-stone-300">
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
          Privacy Policy | Terms of Service | Copyright © 2024 ClearWay
          </p>
        </aside>
      </footer>
    </>
  );
};

export default VaishPage;
