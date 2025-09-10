
import React from "react";
import { useParams } from "react-router-dom";

// import your products array or pass it via context/props
import { products } from "./Ecommerce"; 

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-yellow-600 font-bold text-2xl mb-4">
            ${product.price.toFixed(2)}
          </p>
          {product.oldPrice && (
            <p className="line-through text-gray-500 mb-4">
              ${product.oldPrice.toFixed(2)}
            </p>
          )}
          <p className="mb-6">
            Lorem ipsum description for <b>{product.name}</b>. You can expand
            this with features, highlights, and reviews.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
