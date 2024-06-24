import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <img
            src="public/logo.png"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <p className="text-gray-400 text-xl"> 
          &copy; 2024 todos os direitos reservados <span>Gama<span className="text-secondary-gama2 text-xl">Flix</span></span>
          </p>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:underline">Campaigns</a>
          <a href="#" className="hover:underline">Email Marketing</a>
          <a href="#" className="hover:underline">Branding</a>
          <a href="#" className="hover:underline">Offline</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
