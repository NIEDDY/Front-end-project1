import React from 'react';

const Orders: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <p className="text-gray-600">View your past orders and their status.</p>
        {/* Add order history details and tracking */}
      </div>
    </div>
  );
};

export default Orders;
