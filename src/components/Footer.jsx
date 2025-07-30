import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Aurela Naturals. All rights reserved.</p>
        <p>Marketed in India By Amrut Herbal Industries, Vaduj Karad Road, Satara 415512</p>
      </div>
    </footer>
  );
};

export default Footer;
