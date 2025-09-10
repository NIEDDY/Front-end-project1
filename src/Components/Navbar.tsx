import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md">
      {/* Make "kapee." clickable */}
      <Link to="/" className="text-2xl font-bold hover:text-blue-600">
        kapee.
      </Link>

      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 border border-gray-300 px-3 py-2 rounded-l"
        />
        <button className="bg-yellow-400 px-4 rounded-r">
          <Search />
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/BlogApp" className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
          Blog
        </Link>
        <Link to="/myshop" className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
          My Shop
        </Link>
        <Link to="/mycart" className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
          My Cart
        </Link>
        <Link to="/wishlist" className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
          Wish List
        </Link>
        <Link to="/orders" className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
          Orders
        </Link>

        <div className="flex items-center space-x-1 cursor-pointer">
          <User />
          <span className="text-sm">Hello, <span className="font-semibold">Sign In</span></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm">$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
