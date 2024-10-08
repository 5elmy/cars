// import React, { createContext, ReactNode } from "react";
// interface carsContext{
//     value:string,
//     setValue:React.Dispatch<React.SetStateAction<string>>
// }
// let cars:any = createContext<carsContext | undefined>(undefined)

// interface carsTypeProvider {
//     childrens:ReactNode
// }
// export default function CarsProvider:React.FC<carsTypeProvider>({childrens}){

//     return <cars.Provider value={{}}>
//         {childrens}
//     </cars.Provider>

// }

 import  axios from "axios"
import React, { createContext, useState, ReactNode } from "react";

interface CarsContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  getAllCars?: any;
  carsList: [];
  SetcarsList?: [];
}

const CarsContext = createContext<CarsContext | undefined>(undefined);

interface CarsProviderProps {
  children: ReactNode;
}

const CarsProvider: React.FC<CarsProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("");
  const [carsList, SetcarsList] = useState<[]>([]);

  let getAllCars = async (name: ""): Promise<void> => {
    await axios
      .get(`https://freetestapi.com/api/v1/cars?search=${name}`)
      .then((res) => {
        console.log(res.data);
        SetcarsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CarsContext.Provider value={{ value, setValue, getAllCars, carsList }}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, CarsProvider };
