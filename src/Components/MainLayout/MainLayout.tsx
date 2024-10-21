
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <div className="">
        <Navbar bol={true} />
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
}
