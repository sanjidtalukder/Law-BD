import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  
  

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <Navbar />

     <Outlet></Outlet>

      <Footer />
    </div>
  );
};

export default MainLayout;
