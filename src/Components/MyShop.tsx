import React, { useState } from "react";


const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$49.99",
    primaryImage: "/products/headset.jpeg",
    secondaryImage: "/products/headset2.jpeg", // add secondary images if you have
  },
  { id: 2, name: "Product 2", price: "$29.99", primaryImage: "/products/backpack.jpg", secondaryImage: "/products/backpack2.jpg" },
  { id: 3, name: "Product 3", price: "$19.99", primaryImage: "/products/hoodie.jpg", secondaryImage: "/products/hoodie2.jpg" },
  { id: 4, name: "Product 4", price: "$99.99", primaryImage: "/products/sneakers.jpg", secondaryImage: "/products/sneakers2.jpg" },
  { id: 5, name: "Product 5", price: "$199.99", primaryImage: "/products/watch.jpg", secondaryImage: "/products/watch2.jpg" },
  { id: 6, name: "Product 6", price: "$59.99", primaryImage: "/products/wirelessSpeaker.jpg", secondaryImage: "/products/wirelessSpeaker2.jpg" },
];

const MyShop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="relative overflow-hidden group bg-white rounded-lg shadow hover:shadow-lg transition">
            {/* Primary Image */}
            <img
              src={product.primaryImage}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Secondary Image */}
            {product.secondaryImage && (
              <img
                src={product.secondaryImage}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-48 object-cover rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              />
            )}

            {/* Overlay Buttons */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-100 space-x-2">
              <button className="bg-white text-black px-3 py-1 rounded">Add to Cart</button>
              <button className="bg-white text-black px-3 py-1 rounded">Quick View</button>
            </div>

            {/* Product Info */}
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-yellow-600 font-bold mb-2">{product.price}</p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyShop;
