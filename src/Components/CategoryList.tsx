
// Components/CategoryList.tsx
import React from "react";

interface Category {
  id: number;
  name: string;
  description: string;
}

const categories: Category[] = [
  { id: 1, name: "Beauty", description: "Skincare, makeup, and wellness products" },
  { id: 2, name: "Electronics", description: "Phones, laptops, and gadgets" },
  { id: 3, name: "Fashion", description: "Men's and women's clothing, shoes, and accessories" },
  { id: 4, name: "Home & Kitchen", description: "Furniture, appliances, and decor" },
];

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer bg-white"
        >
          <h3 className="font-semibold text-lg text-gray-800">{cat.name}</h3>
          <p className="text-sm text-gray-600">{cat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
