import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Layout() {
  return (
    <div className="h-[932px] relative">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
