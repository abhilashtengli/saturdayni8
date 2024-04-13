import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between border-t-2 border-gray-200 p-10 pb-24 text-gray-700 px-52">
        <ul className="mx-10">
          <h1 className="text-xl tracking-widest mb-5">Get to know us</h1>
          <li className="text-sm tracking-widest ">Contact Us</li>
          <li className="text-sm tracking-widest ">FAQ's</li>
          <li className="text-sm tracking-widest ">Terms & Conditions</li>
        </ul>
        <ul className="mx-10">
          <h1 className="text-xl tracking-widest mb-5">
            Track / Exchange order
          </h1>
          <li className="text-sm tracking-widest">Track order</li>
          <li className="text-sm tracking-widest">Exchange / Return Request</li>
          <li className="text-sm tracking-widest">Exchange / Return Policy</li>
        </ul>
        <ul className="mx-10">
          <h1 className="text-xl tracking-widest mb-5">Customer care</h1>
          <li className="text-sm tracking-widest">
            Timings: 10 AM - 7 PM (Mon - Sat)
          </li>
          <li className="text-sm tracking-widest">Whatsapp : +91 4315999999</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
