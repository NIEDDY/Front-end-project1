import React from "react";
import { Menu, ChevronDown, ShoppingCart } from "lucide-react";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";



interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
  icon: string;
}

// Product type
interface Product {
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

// Navigation items
const navigationItems = [
  { name: "HOME", hasDropdown: true, route: "/" },
  { name: "SHOP", hasDropdown: true, route: "/shop" },
  { name: "PAGES", hasDropdown: true, route: "/pages" },
  { name: "BLOG", hasDropdown: true, route: "/BlogApp" },
  { name: "ELEMENTS",  hasDropdown: true,route: "/element" },
  { name: "BUY NOW", hasDropdown: false, route: "/buy-now" },
];

// Categories list
const categories: CategoryItem[] = [
  { name: "Men", hasSubmenu: false, icon: "/icons/men.jpg" },
  { name: "Women", hasSubmenu: false, icon: "/icons/women.jpg" },
  { name: "Shoes", hasSubmenu: false, icon: "/icons/Shoes.jpg" },
  { name: "Bags & Backpacks", hasSubmenu: false, icon: "/icons/bags.png" },
  { name: "Watches", hasSubmenu: false, icon: "/icons/watches.jpg" },
  { name: "Jewellery", hasSubmenu: false, icon: "/icons/jewellery.jpg" },
  { name: "Accessories", hasSubmenu: false, icon: "/icons/accessories.jpg" },
  { name: "Dresses", hasSubmenu: false, icon: "/icons/dresses.jpg" },
  { name: "Tops", hasSubmenu: false, icon: "/icons/tops.jpg" },
  { name: "Lingerie & Nightwear", hasSubmenu: false, icon: "/icons/Lingeries.jpg" },
];

// Sample products
export const products: Product[] = [
  {
    id: 1,
    name: "Men's Hoodie Navy Blue",
    category: "Men",
    image: "/products/hoodie.jpg",
    price: 50,
    oldPrice: 100,
    discount: "50% OFF",
    rating: 4,
    featured: true,
    gender: "men",
    isSale: true,
  },
  {
    id: 2,
    name: "Luxury Silver Watch",
    category: "Watches",
    image: "/products/watch.jpg",
    price: 400,
    oldPrice: 600,
    discount: "42% OFF",
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Women Off White Printed Blouse",
    category: "Women",
    image: "/products/blouse.jpg",
    price: 47,
    rating: 3,
    featured: true,
    gender: "women",
  },
  {
    id: 4,
    name: "Unisex SkyCraft Backpack",
    category: "Bags & Backpacks",
    image: "/products/backpack.jpg",
    price: 15,
    rating: 4,
    featured: true,
  },
  {
    id: 5,
    name: "Men's Casual Sneakers",
    category: "Shoes",
    image: "/products/sneakers.jpg",
    price: 45,
    rating: 4,
    featured: true,
    gender: "men",
  },
  {
    id: 6,
    name: "Wireless Speaker",
    category: "Accessories",
    image: "products/wirelessSpeaker.jpg",
    price: 45,
    rating: 4,
    featured: true,
    gender: "men",
  },
];

// Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 fill-current ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

const Ecommerce: React.FC = () => {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [cart, setCart] = React.useState<Product[]>([]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryName)) {
        newExpanded.delete(categoryName);
      } else {
        newExpanded.add(categoryName);
      }
      return newExpanded;
    });
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleShop = () => {
    navigate("/shop");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 flex items-center gap-3 font-semibold transition-colors"
            >
              <Menu className="w-5 h-5" />
              SHOP BY CATEGORIES
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.route}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 cursor-pointer relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className=" -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          categories={categories}
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
        />

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-6 overflow-auto">
          {/* Hero Section */}
          <div className="relative h-96 flex items-center justify-between px-12 mb-8">
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-yellow-500 font-bold text-lg tracking-wide">BEATS EP ON-EAR</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                PERSONALIZED <br />
                HEADPHONES
              </h1>
              <p className="text-2xl text-gray-700 mb-8 font-medium">Min. 40-80% Off</p>
              <button  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-transform duration-200 hover:scale-105">
                BUY NOW
              </button>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative">
                <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                  <img src="/headset.png" alt="Headset" className="object-contain w-full h-full drop-shadow-2xl" />
                </div>
                <div className=" top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                <div className=" bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="top-32 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Category Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center cursor-pointer">
                <img src={category.icon} alt={category.name} className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm font-semibold">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Featured Products</h2>
              <button className="text-blue-600 font-semibold hover:underline">VIEW ALL</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.filter((p) => p.featured).map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
                  <div className="relative">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                    </Link>
                    {product.isSale && <span className="top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">SALE</span>}
                    {product.isNew && <span className="solute top-2 right-2 bg-green-500 text-xs font-bold px-2 py-1 rounded">NEW</span>}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-yellow-500 font-bold">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>}
                    {product.discount && <span className="text-green-600 text-xs font-semibold">{product.discount}</span>}
                  </div>
                  <div className="flex items-center mt-2">
                    <StarRating rating={product.rating || 0} />
                  </div>
                  <button
              onClick={() => navigate('/shop')}
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
>
Buy
                   </button>

                </div>
              ))}
            </div>
          </section>

          {/* Men's Fashion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Men's Fashion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 flex items-center">
                <img src="/products/mens-fashion.jpg" alt="Men's Fashion" className="w-48 h-48 object-cover rounded mr-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Men's Clothings Up To 50% Off</h3>
                  <ul className="text-gray-700 mb-4">
                    <li>Watches</li>
                    <li>T-Shirts</li>
                    <li>Shirts</li>
                    <li>Jeans</li>
                    <li>Jackets & Coats</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {products.filter((p) => p.gender === "men").map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                    </Link>
                    <h3 className="mt-4 font-semibold text-gray-900">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-yellow-500 font-bold">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>}
                      {product.discount && <span className="text-green-600 text-xs font-semibold">{product.discount}</span>}
                    </div>
                    <div className="flex items-center mt-2">
                      <StarRating rating={product.rating || 0} />
                    </div>
                    <button onClick={handleShop} className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                      Buy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        

          {/* Women's Fashion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Women's Fashion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 flex items-center">
                <img src="/products/womens-fashion.jpg" alt="Women's Fashion" className="w-48 h-48 object-cover rounded mr-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">New Arrival Up To 70% Off</h3>
                  <ul className="text-gray-700 mb-4">
                    <li>Trousers & Capris</li>
                    <li>Tops</li>
                    <li>Shorts & Skirts</li>
                    <li>Lingerie & Nightwear</li>
                    <li>Dresses</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {products.filter((p) => p.gender === "women").map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                    </Link>
                    <h3 className="mt-4 font-semibold text-gray-900">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-yellow-500 font-bold">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>}
                      {product.discount && <span className="text-green-600 text-xs font-semibold">{product.discount}</span>}
                    </div>
                    <div className="flex items-center mt-2">
                      <StarRating rating={product.rating || 0} />
                    </div>
                    <button onClick={() => addToCart(product)} className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                      Buy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
