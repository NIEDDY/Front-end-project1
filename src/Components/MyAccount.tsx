import React, { useState } from 'react';
import SignUp from './SignUp';

const MyAccount: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <p className="text-gray-600">Manage your account details here.</p>
          {/* Add account form or details */}
          <button
            onClick={() => setShowSignUp(!showSignUp)}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded"
          >
            {showSignUp ? 'Hide Sign Up' : 'Show Sign Up'}
          </button>
          {showSignUp && <SignUp />}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <p className="text-gray-600">View your past orders.</p>
          {/* Add order history */}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
