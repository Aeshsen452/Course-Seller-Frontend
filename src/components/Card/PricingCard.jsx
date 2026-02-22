import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function PricingCard({
  title,
  price,
  paragraph,
  features,
}) {
  const navigate =useNavigate()
  return (
    <div className="flex flex-col justify-between rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 p-6  w-full">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-4xl font-bold text-gray-900 mb-6">{price}</p>
        <p className="mb-6 textColor">{paragraph}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 textColor">.</span>
              {feature}
            </li>
          ))}   
        </ul>
      </div>
      <Button onClick={()=>navigate("/courses#popular-courses")} text="Purchase Now" />
    </div>
  );
}
