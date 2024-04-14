import React, { useState } from "react";

const Personaldetails = ({ show }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div
        className={`container  border-black mx-auto mt-8 md:px-12 ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 bg-blue-50  text-gray-700 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 bg-blue-50 px-3  text-gray-700  py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="birthDate" className="block mb-2 text-gray-600">
                Birth Date:
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="border border-gray-300 bg-blue-50 px-3 py-2  text-gray-700  rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block mb-2 text-gray-600"
              >
                Contact Number:
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="border border-gray-300 bg-blue-50 px-3  text-gray-700  py-2 rounded-md w-full"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block mb-2 text-gray-600">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 bg-blue-50 px-3 py-2  text-gray-700  rounded-md w-full"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personaldetails;
