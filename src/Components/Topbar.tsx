import React from "react";

const Topbar: React.FC = () => {
  return (
    <div className="bg-yellow-400 text-black text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex space-x-4">
        <select className="bg-yellow-400 focus:outline-none">
          <option>ENGLISH</option>
          <option>FRENCH</option>
        </select>
        <select className="bg-yellow-400 focus:outline-none">
          <option>$ DOLLAR (US)</option>
          <option>€ EURO</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <span>WELCOME TO OUR STORE!</span>
        <a href="/BlogApp" >BLOG</a>
        <a href="/Contact">Contact</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">CONTACT US</a>
      </div>
    </div>
  );
};

export default Topbar;