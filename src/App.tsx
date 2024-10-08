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

function App() {
  let routes: any = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "home", element: <Home /> }],
      errorElement: <NotFound />,
    },
    { path: "work", element: <Works /> },
    { path: "cars", element: <AllCars /> },
    { path: "ChooseCar", element: <ChooseCar /> },
    { path: "people", element: <People /> },
    { path: "rentcar", element: <Rentcar /> },
    { path: "footer", element: <Footer /> },
    { index: "true", element: <LandingPage /> },
  ]);
  return (
    <>
      <CarsProvider>
        <RouterProvider router={routes} />
      </CarsProvider>
    </>
  );
}

export default App;
