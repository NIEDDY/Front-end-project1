
import { useState } from 'react'
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Ecommerce from "./Components/Ecommerce";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LayoutHandling from "./Components/LayoutFolder/Layout";
import Sidebar from "./Components/Sidebar";
import BlogApp from"./Components/BlogApp";
import ContactUs from "./Components/Contact";
import MyShop from "./Components/MyShop";
import MyCart from "./Components/MyCart";
import WishList from "./Components/WishList";
import Orders from "./Components/Orders";
import MyAccount from "./Components/MyAccount";
import ProductDetail from "./Components/ProductDetail";
import Shop from "./Components/shop";
import Element from "./Components/Element";



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const categories = [
    { name: "Men's Clothing", hasSubmenu: true, icon: "/icons/men.jpg" },
    { name: "Women's Clothing", hasSubmenu: true, icon: "/icons/women.jpg" },
    { name: "Accessories", hasSubmenu: true, icon: "/icons/accessories.jpg" },
    { name: "Shoes", hasSubmenu: true, icon: "/icons/shoes.jpg" },
    { name: "Jewellery", hasSubmenu: true, icon: "/icons/jewellery.jpg" },
    { name: "Bags & Backpacks", hasSubmenu: true, icon: "/icons/bags.png" },
    { name: "Watches", hasSubmenu: true, icon: "/icons/watches.jpg" },
    { name: "Dresses", hasSubmenu: false, icon: "/icons/dresses.jpg" },
    
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryName)) {
        newExpanded.delete(categoryName);
      } else {
        newExpanded.add(categoryName);
      }
      return newExpanded;
    });
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutHandling/>}>
      <Route index element={<Ecommerce/>}/>
      <Route path="/ecommerce" element={<Ecommerce/>}/>
      <Route path="/Sidebar" element={<Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        categories={categories} 
        expandedCategories={expandedCategories} 
        toggleCategory={toggleCategory} 
      />}/>
      <Route path="/BlogApp" element={<BlogApp/>}/>
      <Route path="/Contact" element={<ContactUs/>}/>
      {/* <Route path="/About" element={<About/>}/> */}
      <Route path="/myshop" element={<MyShop/>}/>
      <Route path="/mycart" element={<MyCart/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/myaccount" element={<MyAccount/>}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Element" element={<Element />} /> {/* ✅ used here */}


      </Route>
    </Routes>
     
  
    </BrowserRouter>
  )
}

export default App
