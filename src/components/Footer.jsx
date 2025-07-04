import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-3">Namba Kadaii</h4>
          <p className="text-sm text-gray-400">Your one-stop shop for unique essentials.</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Shop</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Home Decor</li>
            <li>Kitchen</li>
            <li>Fashion</li>
            <li>Kids</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Connect</h4>
          <p className="text-sm text-gray-400">Email: support@nambakadaii.com</p>
          <p className="text-sm text-gray-400 mt-2">Follow us on social media</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; 2025 Namba Kadaii. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
