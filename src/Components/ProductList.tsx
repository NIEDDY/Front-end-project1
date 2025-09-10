
// Components/ProductList.tsx
import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product 1",
    price: "$29.99",
    image: "https://via.placeholder.com/200",
    description: "This is a placeholder product description.",
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: "$49.99",
    image: "https://via.placeholder.com/200",
    description: "Another placeholder product description.",
  },
  {
    id: 3,
    name: "Sample Product 3",
    price: "$19.99",
    image: "https://via.placeholder.com/200",
    description: "Affordable and stylish product placeholder.",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <p className="text-yellow-600 font-bold">{product.price}</p>
          <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded transition">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
