// export default function PurchasedPlans() {
//   const plans = [
//     {
//       id: 1,
//       name: "AUS/NZ Program 1",
//       amount: "$150",
//       purchasedDate: "10 Aug 2025",
//       expireOn: "10 Sep 2025",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "AUS/NZ Program 2",
//       amount: "$150",
//       purchasedDate: "08 Aug 2025",
//       expireOn: "09 Sep 2025",
//       status: "Expired",
//     },
//     {
//       id: 3,
//       name: "AUS/NZ Program 3",
//       amount: "$150",
//       purchasedDate: "12 Jul 2025",
//       expireOn: "12 Aug 2025",
//       status: "Expired",
//     },
//     {
//       id: 4,
//       name: "USA Program 4",
//       amount: "$150",
//       purchasedDate: "10 Jun 2025",
//       expireOn: "10 Jul 2025",
//       status: "Expired",
//     },
//   ];
//   return (
//     <div className="w-full px-4 py-10  flex flex-col items-center">
//       <h1 className="text-2xl md:text-5xl font-bold text-black mb-5">
//         Purchased Plans
//       </h1>
//       <p className="text-gray-600 text-center mb-10">
//         Quick overview of Kitehawk LMS. Show how easy it is to create courses,
//         assign tasks, track progress.
//       </p>

//       <div className="hidden md:block w-full max-w-5xl bg-white shadow rounded-lg overflow-hidden border">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="primaryColor text-left">
//               <th className="px-4 py-3 text-sm font-semibold">S No</th>
//               <th className="px-4 py-3 text-sm font-semibold">
//                 Purchased Plan
//               </th>
//               <th className="px-4 py-3 text-sm font-semibold">Amount</th>
//               <th className="px-4 py-3 text-sm font-semibold">
//                 Purchased Date
//               </th>
//               <th className="px-4 py-3 text-sm font-semibold">Expire on</th>
//               <th className="px-4 py-3 text-sm font-semibold">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {plans.map((plan, index) => (
//               <tr
//                 key={plan.id}
//                 className="border-t text-gray-700 hover:bg-gray-50 transition"
//               >
//                 <td className="px-4 py-3">{index + 1}</td>
//                 <td className="px-4 py-3">{plan.name}</td>
//                 <td className="px-4 py-3">{plan.amount}</td>
//                 <td className="px-4 py-3">{plan.purchasedDate}</td>
//                 <td className="px-4 py-3">{plan.expireOn}</td>
//                 <td className="px-4 py-3">
//                   {plan.status === "Active" ? (
//                     <span className="flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-green-500"></span>
//                       <span className="text-green-600 text-sm font-medium">
//                         Active
//                       </span>
//                     </span>
//                   ) : (
//                     <span className="flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
//                       <span className="text-red-600 text-sm font-medium">
//                         Expired
//                       </span>
//                     </span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="block md:hidden w-full max-w-2xl space-y-4">
//         {plans.map((plan, index) => (
//           <div
//             key={plan.id}
//             className="bg-white shadow rounded-lg border p-4 space-y-2"
//           >
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">S No</span>
//               <span className="font-medium">{index + 1}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Purchased Plan</span>
//               <span className="font-medium">{plan.name}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Amount</span>
//               <span className="font-medium">{plan.amount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Purchased Date</span>
//               <span className="font-medium">{plan.purchasedDate}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Expire on</span>
//               <span className="font-medium">{plan.expireOn}</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-500 text-sm">Status</span>
//               {plan.status === "Active" ? (
//                 <span className="flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500"></span>
//                   <span className="text-green-600 text-sm font-medium">
//                     Active
//                   </span>
//                 </span>
//               ) : (
//                 <span className="flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-red-500"></span>
//                   <span className="text-red-600 text-sm font-medium">
//                     Expired
//                   </span>
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://kitehawk-api.onrender.com";

// export default function PurchasedPlans() {
//   const [plans, setPlans] = useState([]);

//   useEffect(() => {
//     fetchPurchaseHistory();
//   }, []);

//   const fetchPurchaseHistory = async () => {
//     try {
//       const token = localStorage.getItem("userToken");

//       const res = await axios.get(
//         `${BASE_URL}/api/getallpurchasehistory`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = res.data?.data || [];

//       const formatted = data.map((item, index) => ({
//         id: item._id,
//         name: item.PlanName,
//         amount: `$${item.TotalPurchaseAmount}`,
//         purchasedDate: new Date(item.createdAt).toLocaleDateString(
//           "en-GB",
//           { day: "2-digit", month: "short", year: "numeric" }
//         ),
//         expireOn: new Date(item.ExpiryDate).toLocaleDateString(
//           "en-GB",
//           { day: "2-digit", month: "short", year: "numeric" }
//         ),
//         status: item.Status,
//       }));

//       setPlans(formatted);
//     } catch (error) {
//       console.log(
//         "Purchase history error:",
//         error?.response?.data || error.message
//       );
//     }
//   };

//   return (
//     <div className="w-full px-4 py-10 flex flex-col items-center">
//       <h1 className="text-2xl md:text-5xl font-bold text-black mb-5">
//         Purchased Plans
//       </h1>
//       <p className="text-gray-600 text-center mb-10">
//         Quick overview of Kitehawk LMS. Show how easy it is to create courses,
//         assign tasks, track progress.
//       </p>

//       {/* DESKTOP TABLE */}
//       <div className="hidden md:block w-full max-w-5xl bg-white shadow rounded-lg overflow-hidden border">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="primaryColor text-left">
//               <th className="px-4 py-3 text-sm font-semibold">S No</th>
//               <th className="px-4 py-3 text-sm font-semibold">
//                 Purchased Plan
//               </th>
//               <th className="px-4 py-3 text-sm font-semibold">Amount</th>
//               <th className="px-4 py-3 text-sm font-semibold">
//                 Purchased Date
//               </th>
//               <th className="px-4 py-3 text-sm font-semibold">Expire on</th>
//               <th className="px-4 py-3 text-sm font-semibold">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {plans.map((plan, index) => (
//               <tr
//                 key={plan.id}
//                 className="border-t text-gray-700 hover:bg-gray-50 transition"
//               >
//                 <td className="px-4 py-3">{index + 1}</td>
//                 <td className="px-4 py-3">{plan.name}</td>
//                 <td className="px-4 py-3">{plan.amount}</td>
//                 <td className="px-4 py-3">{plan.purchasedDate}</td>
//                 <td className="px-4 py-3">{plan.expireOn}</td>
//                 <td className="px-4 py-3">
//                   {plan.status === "Active" ? (
//                     <span className="flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-green-500"></span>
//                       <span className="text-green-600 text-sm font-medium">
//                         Active
//                       </span>
//                     </span>
//                   ) : (
//                     <span className="flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
//                       <span className="text-red-600 text-sm font-medium">
//                         Expired
//                       </span>
//                     </span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="block md:hidden w-full max-w-2xl space-y-4">
//         {plans.map((plan, index) => (
//           <div
//             key={plan.id}
//             className="bg-white shadow rounded-lg border p-4 space-y-2"
//           >
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">S No</span>
//               <span className="font-medium">{index + 1}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Purchased Plan</span>
//               <span className="font-medium">{plan.name}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Amount</span>
//               <span className="font-medium">{plan.amount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Purchased Date</span>
//               <span className="font-medium">{plan.purchasedDate}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">Expire on</span>
//               <span className="font-medium">{plan.expireOn}</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-500 text-sm">Status</span>
//               {plan.status === "Active" ? (
//                 <span className="flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500"></span>
//                   <span className="text-green-600 text-sm font-medium">
//                     Active
//                   </span>
//                 </span>
//               ) : (
//                 <span className="flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-red-500"></span>
//                   <span className="text-red-600 text-sm font-medium">
//                     Expired
//                   </span>
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";

 const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function PurchasedPlans() {
  const [plans, setPlans] = useState([]);
  const [openPlanId, setOpenPlanId] = useState(null);

  useEffect(() => {
    fetchPurchaseHistory();
  }, []);

  const fetchPurchaseHistory = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const res = await axios.get(
        `${BASE_URL}/api/getallpurchasehistory`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data?.data || [];

      /**
       * GROUPING SAME PLAN PURCHASES
       */
      const grouped = {};

      data.forEach((item) => {
        const key = `${item.PlanName}_${item.tokenid}`;

        if (!grouped[key]) {
          grouped[key] = {
            id: key,
            name: item.PlanName,
            amount: `$${item.TotalPurchaseAmount}`,
            purchasedDate: new Date(item.createdAt).toLocaleDateString(
              "en-GB",
              { day: "2-digit", month: "short", year: "numeric" }
            ),
            expireOn: new Date(item.ExpiryDate).toLocaleDateString(
              "en-GB",
              { day: "2-digit", month: "short", year: "numeric" }
            ),
            courses: [],
          };
        }

        grouped[key].courses.push({
          purchaseId: item._id,
          courseId: item.courseid?._id,
          coursePrice: item.courseid?.courseprice,
          status: item.Status,
        });
      });

      setPlans(Object.values(grouped));
    } catch (error) {
      console.log(
        "Purchase history error:",
        error?.response?.data || error.message
      );
    }
  };

  const toggleDetails = (id) => {
    setOpenPlanId(openPlanId === id ? null : id);
  };

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl font-bold text-black mb-5">
        Purchased Plans
      </h1>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block w-full max-w-5xl bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="primaryColor text-left">
              <th className="px-4 py-3">S No</th>
              <th className="px-4 py-3">Plan Name</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Purchased Date</th>
              <th className="px-4 py-3">Expire On</th>
              <th className="px-4 py-3 text-center">View</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan, index) => (
              <>
                <tr
                  key={plan.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{plan.name}</td>
                  <td className="px-4 py-3">{plan.amount}</td>
                  <td className="px-4 py-3">{plan.purchasedDate}</td>
                  <td className="px-4 py-3">{plan.expireOn}</td>
                <td className="px-4 py-3 text-center">
  <button
    onClick={() => toggleDetails(plan.id)}
    className="text-blue-600 hover:text-blue-800 transition"
  >
    {openPlanId === plan.id ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </button>
</td>


                </tr>

                {/* INNER COURSES TABLE */}
                {openPlanId === plan.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="p-4">
                      <table className="w-full border">
                        <thead>
                          <tr className="bg-gray-100 text-left">
                            <th className="px-3 py-2">S No</th>
                            <th className="px-3 py-2">Course Name</th>
                            <th className="px-3 py-2">Course Price</th>
                            <th className="px-3 py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {plan.courses.map((course, i) => (
                            <tr key={course.purchaseId} className="border-t">
                              <td className="px-3 py-2">{i + 1}</td>
                              <td className="px-3 py-2">
                                {course?.coursename || "course"}
                              </td>
                              <td className="px-3 py-2">
                                ${course.coursePrice}
                              </td>
                              <td className="px-3 py-2">
                              <span
  className={`font-medium ${
    course.status?.toLowerCase() === "active"
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {course.status}
</span>

                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
