import { Link } from "react-router-dom";
const CardComponent = ({ img, ref, title, desc,subheading }) => (
  <div className="flex flex-col w-[26%] h-96 rounded-xl shadow-2xl border">
    <div className="flex justify-center items-center w-full h-[80%]">
      <img src={img} alt="logo" className="w-48"></img>
    </div>
    <p className="text-center font-bold mb-2">{subheading}</p>
    <Link to={ref} className="flex flex-col card-styling h-[20%] gap-2 p-2 ">
      <span className="text-sm px-4">{title}</span>
      <span className="text-sm px-4">{desc}</span>
    </Link>
  </div>
);

export default CardComponent;
