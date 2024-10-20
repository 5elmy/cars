
import location from "../../assets/images/search/location.png";

export default function Search({handleSearchInputChange , searchQuery}:any) {

  return (
    <section className="flex justify-center items-center ">
      <div className="w-[90%] flex gap-2 items-center h-[50px] shadow-lg border">
        <img src={location} alt="location" className="p-3" />
        <div className="relative w-full">
          <input
           
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by car name or model"
            className="w-full h-[40px] bg-transparent border-none focus:outline-none"

          />

        </div>
      </div>
    </section>
  );
}
