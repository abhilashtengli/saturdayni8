import React, { useState } from "react";

const DeliveryAddress = ({ show }) => {
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  return (
    <div
      className={`container mx-auto  border-black mt-8 ${
        show ? "block" : "hidden"
      } bg-white border border-gray-300 p-6 rounded-lg shadow-lg`}
    >
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <label htmlFor="street" className="block mb-2 text-gray-600">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={addressData.street}
            onChange={handleChange}
            className="border border-gray-300 bg-blue-50  text-gray-700  px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-gray-600">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            className="border border-gray-300 bg-blue-50  text-gray-700  px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="block mb-2 text-gray-600">
            Zip Code:
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={addressData.zipCode}
            onChange={handleChange}
            className="border border-gray-300 bg-blue-50  text-gray-700  px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="country" className="block mb-2 text-gray-600">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={addressData.country}
            onChange={handleChange}
            className="border border-gray-300 bg-blue-50  text-gray-700  px-3 py-2 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
