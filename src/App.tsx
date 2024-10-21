
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import Works from "./Components/Works/Works";
import { CarsProvider } from "./Context/Cars.context";
import AllCars from "./Components/Cars/AllCars";
import ChooseCar from "./Components/ChooseCar/ChooseCar";
import People from "./People/People";
import Footer from "./Components/Footer/Footer";
import Rentcar from "./Components/Rentcar/Rentcar";
import LandingPage from "./Components/LandingPage/LandingPage";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/LoginPage/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import VerificationCode from "./Components/VerificationCode/VerificationCode";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import SignUp from "./Components/SignUp/SignUp";
import CarsSection from "./Components/Cars/CarsSection";

function App() {
  const routes = createHashRouter([
    { index: true, element: <Login /> }, 
    { path:"login", element: <Login /> }, 
    { path:"forget-password", element: <ForgetPassword/> }, 
    { path:"otp", element: <VerificationCode/> }, 
    { path:"reset-password", element: <ResetPassword/> }, 
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "cars", element: <AllCars /> },
        { path: "work", element: <Works /> },
        { path: "ChooseCar", element: <ChooseCar /> },
        { path: "people", element: <People /> },
        { path: "rentcar", element: <Rentcar /> },
        { path: "footer", element: <Footer /> },
      ],
      errorElement: <NotFound />,
    },
    { path: "all", element: <LandingPage /> },
    { path: "signup", element: <SignUp /> },
    { path: "car/:id", element: <CarsSection /> }, 
  ]);

  return (
    <CarsProvider>
      <RouterProvider router={routes} />
    </CarsProvider>
  );
}

export default App;
