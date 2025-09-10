import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate a subscription process
      setIsSubscribed(true);
      setEmail("");
      // Here, you would typically handle the subscription logic (e.g., API call)
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">INFORMATION</h3>
          <ul className="space-y-1">
            <li>
  <Link to="/Contact" className="hover:text-yellow-500">
    Contact Us
  </Link>
</li>
            <li><Link to="#" className="hover:text-yellow-500">Store Location</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Shipping & Delivery</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Latest News</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Our Sitemap</Link></li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">OUR SERVICE</h3>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:text-yellow-500">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Terms of Sale</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Customer Service</Link></li>
            <li><Link to="#" className="hover:text-yellow-500">Payments</Link></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">MY ACCOUNT</h3>
          <ul className="space-y-1">
            <li><Link to="/myaccount" className="hover:text-yellow-500">My Account</Link></li>
            <li><Link to="/myshop" className="hover:text-yellow-500">My Shop</Link></li>
            <li><Link to="/mycart" className="hover:text-yellow-500">My Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-yellow-500">My Wishlist</Link></li>
            <li><Link to="/orders" className="hover:text-yellow-500">Tracking Order</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to our mailing list to get the new updates!</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-blue-300 p-2 w-full mb-2 md:mb-0 md:w-2/3 rounded-l"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded-r w-full md:w-auto"
            >
              {isSubscribed ? "Subscribed!" : "SIGN UP"}
            </button>
          </form>
        </div>
      </div>


      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-yellow-500">Facebook</a>
        <a href="#" className="hover:text-yellow-500">Twitter</a>
        <a href="#" className="hover:text-yellow-500">Instagram</a>
        <a href="#" className="hover:text-yellow-500">LinkedIn</a>
      </div>
      
    </div>
    
  );
};

export default Footer;
