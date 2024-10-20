
//  import  axios from "axios"
// import React, { createContext, useState, ReactNode } from "react";

// interface CarsContext {
//   value: string;
//   setValue: React.Dispatch<React.SetStateAction<string>>;
//   getAllCars?: any;
//   carsList: [];
//   SetcarsList?: [];
//   getspecificCar?:any;
//   specificCar:{}
// }

// const CarsContext = createContext<CarsContext | undefined>(undefined);

// interface CarsProviderProps {
//   children: ReactNode;
// }

// const CarsProvider: React.FC<CarsProviderProps> = ({ children }) => {
//   const [value, setValue] = useState<string>("");
//   const [carsList, SetcarsList] = useState<[]>([]);
//   const [specificCar , setSpecificCar]= useState<object>({})

//   let getAllCars = async (): Promise<void> => {
//     await axios
//       .get(`https://myfakeapi.com/api/cars`)
//       .then((res) => {
//         console.log(res.data);
//         SetcarsList(res.data.cars);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   let getspecificCar = async(id:number):Promise<void>=>{
//     await axios.get(`https://myfakeapi.com/api/cars/${id}`).then(res=>{
//       console.log(res);
//       setSpecificCar(res.data.Car)
      

//     }).catch(err=>{
//       console.log(err);
      
//     })

//   }

//   return (
//     <CarsContext.Provider value={{ value, setValue, getAllCars, carsList , SetcarsList , getspecificCar , specificCar}}>
//       {children}
//     </CarsContext.Provider>
//   );
// };

// export { CarsContext, CarsProvider };

import axios from "axios";
import React, { createContext, useState, ReactNode } from "react";

// Define Car interface
interface Car {
  id: number;
  availability: boolean;
  car: string;
  car_color: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  owners: number;
  horsepower: number;
}

// Define the CarsContext interface
interface CarsContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  getAllCars?: () => Promise<void>;
  carsList: Car[]; // Array of Car objects
  SetcarsList?: React.Dispatch<React.SetStateAction<Car[]>>; // Function to set carsList
  getspecificCar?: (id: number) => Promise<void>;
  specificCar: Car | {}; // Car object or empty object when not loaded
}

// Create the context
const CarsContext = createContext<CarsContextType | undefined>(undefined);

interface CarsProviderProps {
  children: ReactNode;
}

const CarsProvider: React.FC<CarsProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("");
  const [carsList, SetcarsList] = useState<Car[]>([]); // Set initial type as Car[]
  const [specificCar, setSpecificCar] = useState<Car | {}>({}); // Allow empty object initially

  // Fetch all cars
  const getAllCars = async (): Promise<void> => {
    try {
      const res = await axios.get(`https://myfakeapi.com/api/cars`);
      console.log(res.data);
      SetcarsList(res.data.cars);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch a specific car by ID
  const getspecificCar = async (id: number): Promise<void> => {
    try {
      const res = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
      console.log(res);
      setSpecificCar(res.data.Car);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CarsContext.Provider
      value={{
        value,
        setValue,
        getAllCars,
        carsList,
        SetcarsList,
        getspecificCar,
        specificCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, CarsProvider };
