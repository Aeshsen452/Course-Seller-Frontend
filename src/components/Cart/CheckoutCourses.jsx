// import { useState } from "react";
// import Button from "../Button/Button";
// import { RiErrorWarningLine } from "react-icons/ri";
// export default function CheckoutCourses() {
//   const [courses, setCourses] = useState([
//     { id: 1, name: "AUZ/NZ Program 1", price: 150, checked: true },
//     { id: 2, name: "AUZ/NZ Program 2", price: 150, checked: true },
//     { id: 3, name: "AUZ/NZ Program 3", price: 150, checked: true },
//   ]);

//   const handleCheck = (id) => {
//     setCourses((prev) =>
//       prev.map((course) =>
//         course.id === id ? { ...course, checked: !course.checked } : course
//       )
//     );
//   };

//   const total = courses
//     .filter((c) => c.checked)
//     .reduce((sum, c) => sum + c.price, 0);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-full max-w-2xl bg-gradient-to-r from-[#F7812A33] to-[#FFFFFF] border border-[#DADADA]  px-4 py-2 rounded-md text-center mb-10">
//         <span className="font-medium flex items-center justify-center gap-2"> 
//           <RiErrorWarningLine className="text-[#2166b7]" size={24}/>Please Choose four
//           programs to get with an offer at just
//         <strong>$500</strong>
//         </span>
//       </div>

//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold text-gray-900 mb-5">
//           Checkout for Courses
//         </h1>
//         <p className="text-gray-600 text-sm mt-1 mb-10">
//           Quick overview of Kithwork LMS. Show how easy it is to create courses,
//           assign tasks, track progress.
//         </p>
//       </div>

//       <div className="w-full max-w-2xl bg-white border border-[#DADADA] rounded-lg overflow-hidden mb-10">
//         <div className="grid grid-cols-2 bg-[#2166b7] text-white font-semibold px-4 py-3">
//           <span>Course Name</span>
//           <span className="text-right">Price</span>
//         </div>
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="grid grid-cols-2 items-center px-4 py-3 border-b last:border-0"
//           >
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={course.checked}
//                 onChange={() => handleCheck(course.id)}
//                 className="h-4 w-4 accent-[#2166b7]"
//               />
//               <span className="text-gray-800">{course.name}</span>
//             </div>
//             <span className="text-right font-medium text-gray-900">
//               ${course.price}
//             </span>
//           </div>
//         ))}

//         <div className="grid grid-cols-2 items-center px-4 py-3 bg-gray-50 font-semibold">
//           <span>Total</span>
//           <span className="text-right">${total}</span>
//         </div>
//       </div>
//         <Button text="Proceed To Checkout"   className="w-full max-w-2xl"/>
//     </div>
//   );
// }

// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Button from "../Button/Button";
// import { RiErrorWarningLine } from "react-icons/ri";

// export default function CheckoutCourses() {
//   const location = useLocation();
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     if (location.state?.courses) {
//       const formatted = location.state.courses.map((c) => ({
//         ...c,
//         checked: true,
//       }));
//       setCourses(formatted);
//     }
//   }, [location.state]);

//   const handleCheck = (id) => {
//     setCourses((prev) =>
//       prev.map((course) =>
//         course.id === id
//           ? { ...course, checked: !course.checked }
//           : course
//       )
//     );
//   };

//   const total = courses
//     .filter((c) => c.checked)
//     .reduce((sum, c) => sum + Number(c.price), 0);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-full max-w-2xl bg-gradient-to-r from-[#F7812A33] to-[#FFFFFF] border border-[#DADADA] px-4 py-2 rounded-md text-center mb-10">
//         <span className="font-medium flex items-center justify-center gap-2">
//           <RiErrorWarningLine className="text-[#2166b7]" size={24} />
//           Please Choose four programs to get with an offer at just <strong>$500</strong>
//         </span>
//       </div>

//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold mb-5">Checkout for Courses</h1>
//         <p className="text-gray-600 text-sm mb-10">
//           Quick overview of Kitehawk LMS. Show how easy it is to create courses,
//           assign tasks, track progress.
//         </p>
//       </div>

//       <div className="w-full max-w-2xl bg-white border border-[#DADADA] rounded-lg overflow-hidden mb-10">
//         <div className="grid grid-cols-2 bg-[#2166b7] text-white font-semibold px-4 py-3">
//           <span>Course Name</span>
//           <span className="text-right">Price</span>
//         </div>

//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="grid grid-cols-2 items-center px-4 py-3 border-b"
//           >
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={course.checked}
//                 onChange={() => handleCheck(course.id)}
//                 className="h-4 w-4 accent-[#2166b7]"
//               />
//               <span>{course.name}</span>
//             </div>
//             <span className="text-right font-medium">
//               ${course.price}
//             </span>
//           </div>
//         ))}

//         <div className="grid grid-cols-2 items-center px-4 py-3 bg-gray-50 font-semibold">
//           <span>Total</span>
//           <span className="text-right">${total}</span>
//         </div>
//       </div>

//       <Button text="Proceed To Checkout" className="w-full max-w-2xl" />
//     </div>
//   );
// }


import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { RiErrorWarningLine } from "react-icons/ri";
import axios from "axios";

 const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function CheckoutCourses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.courses) {
      const formatted = location.state.courses.map((c) => ({
        ...c,
        checked: true,
      }));
      setCourses(formatted);
    }
  }, [location.state]);

  const handleCheck = (id) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, checked: !course.checked }
          : course
      )
    );
  };

  const selectedCourses = courses.filter((c) => c.checked);

  const total = selectedCourses.reduce(
    (sum, c) => sum + Number(c.price),
    0
  );

  // 🔹 DISCOUNT CALCULATION
  let discount = 0;
  let planName = "Standard";

  if (total >= 600) {
    discount = Number((total / 6).toFixed(2)); // 600 -> 100, 700 -> 116.67
    planName = "Premium";
  }

  const finalAmount = Number((total - discount).toFixed(2));

  // 🔹 PURCHASE API CALL
  const handlePurchase = async () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("userToken");

      const payload = {
        courseids: selectedCourses.map((c) => c.id),
        PlanName: planName,
        TotalPurchaseAmount: finalAmount.toString(),
        discount: discount,
      };

      await axios.post(
        `${BASE_URL}/api/purchasecourses`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Courses purchased successfully ✅");
      navigate("/purchased-plans")
    } catch (error) {
      console.log(
        "Purchase error:",
        error?.response?.data || error.message
      );
      alert("Purchase failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-gradient-to-r from-[#F7812A33] to-[#FFFFFF] border border-[#DADADA] px-4 py-2 rounded-md text-center mb-10">
        <span className="font-medium flex items-center justify-center gap-2">
          <RiErrorWarningLine className="text-[#2166b7]" size={24} />
          Please Choose four programs to get with an offer at just{" "}
          <strong>$500</strong>
        </span>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-5">
          Checkout for Courses
        </h1>
        <p className="text-gray-600 text-sm mb-10">
          Quick overview of Kitehawk LMS. Show how easy it is to create courses,
          assign tasks, track progress.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white border border-[#DADADA] rounded-lg overflow-hidden mb-10">
        <div className="grid grid-cols-2 bg-[#2166b7] text-white font-semibold px-4 py-3">
          <span>Course Name</span>
          <span className="text-right">Price</span>
        </div>

        {courses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-2 items-center px-4 py-3 border-b"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={course.checked}
                onChange={() => handleCheck(course.id)}
                className="h-4 w-4 accent-[#2166b7]"
              />
              <span>{course.name}</span>
            </div>
            <span className="text-right font-medium">
              ${course.price}
            </span>
          </div>
        ))}

        <div className="grid grid-cols-2 items-center px-4 py-3 bg-gray-50 font-semibold">
          <span>Total</span>
          <span className="text-right">${total}</span>
        </div>

        {discount > 0 && (
          <div className="grid grid-cols-2 items-center px-4 py-3 bg-green-50 font-semibold text-green-700">
            <span>Discount</span>
            <span className="text-right">- ${discount}</span>
          </div>
        )}

        <div className="grid grid-cols-2 items-center px-4 py-3 bg-gray-100 font-bold">
          <span>Final Amount</span>
          <span className="text-right">${finalAmount}</span>
        </div>
      </div>

      <Button
        text={loading ? "Processing..." : "Proceed To Checkout"}
        className="w-full max-w-2xl"
        onClick={handlePurchase}
      />
    </div>
  );
}
