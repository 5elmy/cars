import e404 from "../../assets/images/NotFound/404-not-found.png";
export default function NotFound() {
  return (
    <div className=" flex justify-center items-center">
      <img src={e404} alt="error 404" className="w-full h-[100vh]" />
    </div>
  );
}
