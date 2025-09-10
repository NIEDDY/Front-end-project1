// Sidebar.tsx
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  categories: { name: string; hasSubmenu: boolean; icon: string }[];
  expandedCategories: Set<string>;
  toggleCategory: (categoryName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  categories,
  expandedCategories,
  toggleCategory,
}) => {
  return (
    <aside className={`w-64 bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
      <button onClick={toggleSidebar} className="p-2 bg-yellow-400">
        Close
      </button>

      <ul>
        {categories.map((cat) => (
          <li
            key={cat.name}
            onClick={() => toggleCategory(cat.name)}
            className="cursor-pointer flex items-center p-2 hover:bg-gray-100"
          >
            <img src={cat.icon} alt={cat.name} className="w-6 h-6 mr-2" />
            <span>{cat.name}</span>
            {expandedCategories.has(cat.name) && <span> - expanded</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
