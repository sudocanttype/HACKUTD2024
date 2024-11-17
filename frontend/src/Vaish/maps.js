import React, { useState } from "react";

// Define the Pin component
const Pin = ({ x, y }) => (
  <div
    className="absolute bg-blue-600 rounded-full cursor-pointer shadow-lg"
    style={{
      top: `${y}px`,
      left: `${x}px`,
      transform: "translate(-50%, -50%)",
      width: "12px",
      height: "12px",
    }}
  />
);

const Maps = () => {
  const [pins, setPins] = useState([]);

  const handleMapClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPins([...pins, { x, y }]);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 my-28 rounded-xl shadow-xl">
      <h2 className="text-center  text-2xl font-semibold mb-5">
        Find Your Nearest ClearWay Bank
      </h2>
      <p className="text-center text-gray-700 text-lg mb-8">
        We understand how important it is to be close to your bank. Click anywhere on the map to locate the nearest ClearWay Bank branch. We're here to make banking easier and more accessible for you.
      </p>

      <div
        className="relative w-full h-80 bg-white rounded-xl overflow-hidden shadow-xl"
        onClick={handleMapClick}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.68535466687!2d-96.75282222374133!3d32.98570217329093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21ff895e4aa5%3A0xd9098b32e9aa1331!2sThe%20University%20of%20Texas%20at%20Dallas!5e0!3m2!1sen!2sus!4v1731860283048!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="rounded-2xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {pins.map((pin, index) => (
          <Pin key={index} x={pin.x} y={pin.y} />
        ))}
      </div>
    </div>
  );
};

export default Maps;
