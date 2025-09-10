import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Topbar from "../Topbar";
import MyAccount from "../MyAccount";
function LayoutHandling() {
  return (
   <>
   <Topbar/>
   <Navbar/>
   <Outlet/>
   <Footer/>
   <MyAccount/>
   </>
  );
}
export default LayoutHandling;  