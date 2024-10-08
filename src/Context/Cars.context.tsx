
 import  axios from "axios"
import React, { createContext, useState, ReactNode } from "react";

interface CarsContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  getAllCars?: any;
  carsList: [];
  SetcarsList?: [];
  getspecificCar?:any;
  specificCar:{}
}

const CarsContext = createContext<CarsContext | undefined>(undefined);

interface CarsProviderProps {
  children: ReactNode;
}

const CarsProvider: React.FC<CarsProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("");
  const [carsList, SetcarsList] = useState<[]>([]);
  const [specificCar , setSpecificCar]= useState<object>({})

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

  let getspecificCar = async(id:number):Promise<void>=>{
    await axios.get(`https://freetestapi.com/api/v1/cars/${id}`).then(res=>{
      console.log(res);
      setSpecificCar(res.data)
      

    }).catch(err=>{
      console.log(err);
      
    })

  }

  return (
    <CarsContext.Provider value={{ value, setValue, getAllCars, carsList  , getspecificCar , specificCar}}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, CarsProvider };
