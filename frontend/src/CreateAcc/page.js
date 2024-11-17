import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { createUser } from "../services/user"; // Assuming this is where your service is defined
import { useNavigate } from "react-router-dom";
function CreateAcc() {
  const { user } = useAuth0();
  const [fullName, setFullName] = useState("");
  const [ssn, setSsn] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const email = user.email;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    // Basic validation
    if (!fullName || !ssn || !bday || !address || !phone) {
      setErrorMessage("All fields are required");
      return;
    }

    const userData = {
      name: fullName,
      ssn,
      bday,
      address,
      email,
      phone,
    };

    try {
      // Call the createUser service
      const createdUser = await createUser(userData);
      setSuccessMessage(`Account created successfully for ${createdUser.name}`);
      setErrorMessage("");

      // Reset the form after successful submission
      setFullName("");
      setSsn("");
      setBday("");
      setAddress("");
      setPhone("");

      navigate("/customer"); // Redirect to the home page
      
    } catch (error) {
      setErrorMessage(error.message || "An error occurred while creating the account.");
      setSuccessMessage("");
    }
  };

  // Function to format SSN as XXX-XX-XXXX
  const handleSsnChange = (e) => {
    let formattedSsn = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (formattedSsn.length > 3 && formattedSsn.length <= 5) {
      formattedSsn = formattedSsn.replace(/(\d{3})(\d{1,2})/, '$1-$2');
    } else if (formattedSsn.length > 5) {
      formattedSsn = formattedSsn.replace(/(\d{3})(\d{2})(\d{1,4})/, '$1-$2-$3');
    }
    setSsn(formattedSsn);
  };

  return (
    <div className="container mx-96 px-44 my-36 flex items-center justify-between">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* SSN */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="ssn">
              SSN
            </label>
            <input
              type="text"
              id="ssn"
              value={ssn}
              onChange={handleSsnChange}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your SSN (XXX-XX-XXXX)"
              maxLength="11"
              required
            />
          </div>

          {/* Birthdate */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="bday">
              Birthdate
            </label>
            <input
              type="date"
              id="bday"
              value={bday}
              onChange={(e) => setBday(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="input input-bordered w-full max-w-xs"
              disabled
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAcc;
