// Components/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating?: number;
  featured?: boolean;
  gender?: "men" | "women";
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  quickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, quickView }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative group flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform"
        />
      </Link>

      {product.isSale && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">SALE</span>
      )}
      {product.isNew && (
        <span className="absolute top-2 right-2 bg-green-500 text-xs font-bold px-2 py-1 rounded">NEW</span>
      )}

      <h3 className="mt-4 font-semibold text-gray-900 text-sm">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500 font-bold">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>
        )}
        {product.discount && <span className="text-green-600 text-xs font-semibold">{product.discount}</span>}
      </div>

      {/* Overlay buttons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/30 transition-opacity group-hover:opacity-100 space-x-2">
        <button
          onClick={() => quickView(product)}
          className="bg-white text-black px-2 py-1 rounded text-xs"
        >
          Quick View
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-white text-black px-2 py-1 rounded text-xs"
        >
          Add to Cart
        </button>
        <button className="bg-white text-black px-2 py-1 rounded text-xs">Wishlist</button>
      </div>
    </div>
  );
};
