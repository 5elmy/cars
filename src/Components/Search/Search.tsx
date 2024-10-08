import { useContext, useState } from "react";
import location from "../../assets/images/search/location.png";
import { CarsContext } from "../../Context/Cars.context";
export default function Search() {
  let { getAllCars, carsList } = useContext(CarsContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search value:", searchValue);
    // You can implement your search functionality here
    getAllCars(searchValue);
  };
  return (
    <section className="flex justify-center items-center">
      <div className="w-[90%] flex gap-2 items-center h-[50px] shadow-lg border">
        <img src={location} alt="location" className="p-3" />
        <div className="relative w-full">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search By Name"
            className="w-full h-[40px] bg-transparent border-none focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute top-0 text-white right-4 w-[159px] h-[40px] rounded-[8px] bg-[--main-color] edu"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
